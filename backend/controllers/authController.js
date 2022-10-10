const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../model/user");
const sendTokenToCookie = require("../utils/cookie");
const ErrorHandler = require("../utils/errorHandler");
const { crypto } = require("node:crypto");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const fs = require("fs");
const handlebars = require("handlebars");
const cloudinary = require("cloudinary");

// SendGrid Email Template compiled
const forgotPasswordTemplate = fs.readFileSync(
  "./backend/views/verifyAccount.handlebars",
  "utf-8"
);

const compileTemplate = handlebars.compile(forgotPasswordTemplate);

// Register/Create User => /api/v1/register
exports.createUser = catchAsyncError(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "avatar",
    width: 150,
    crop: "scale",
  });

  const { email, lname, fname, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User already exist", 400));
  }

  const newUser = await User.create({
    fname,
    lname,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  sendTokenToCookie(newUser, 200, res);
});

// Login User => /api/v1/login

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  // Compare email and password

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }

  sendTokenToCookie(user, 200, res);
});

// Get currently Login User => /api/v1/me

exports.getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({ success: true, user });
});

// Update user profile => /api/v1/me/update
exports.updateUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: req.body },
    { new: true, runValidators: true }
  );

  if (!user) {
    return next(
      new ErrorHandler(`User with the id: ${req.params.id} not found`)
    );
  }

  res.status(200).json({ success: true, user });
});

// Forgot password => /api/v1/password/reset

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("Invalid credentials", 404));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  // const message = `Your password reset token is as follow"\n\n${resetUrl}\n\nIf you have not requested for this reset of your password, kindly ignore it`;

  const msg = {
    to: user.email, // Change to your recipient
    from: ` <${process.env.SENDGRID_API_EMAIL_FROM}>`, // Change to your verified sender
    subject: "Party Mode account verification",
    html: compileTemplate({ resetUrl }),
  };

  try {
    await sgMail.send(msg);

    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    console.log(error.message);
    return next(new ErrorHandler("Internal server error", 500));
  }
});

// Reset Password = /api/v1/password/reset/:token

exports.resetPassword = catchAsyncError(async (req, res, next) => {
  // Hash URL token

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHandler("Invalid Token or token has expired", 400));
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next("Password do not match", 400);
  }

  //  Setup a new password

  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendTokenToCookie(user, 200, res);
});

// Update / Change password => /api/v1/password/update
exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  // Check if password is match
  const isMatched = await user.comparePassword(req.body.prevPassword);

  if (!isMatched) {
    return next(new ErrorHandler("Old password is in correct", 401));
  }

  user.password = req.body.password;

  sendTokenToCookie(user, 200, res);
});

// Logout user => /api/v1/logout

exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });

  res
    .status(200)
    .json({ success: true, message: "You are logged out successfully..." });
});

// Admin route => /api/v1/admin/users

exports.allUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get user details => /api/v1/admin/user/:id

exports.getUserDetail = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler(`User with the ${req.params.id} not found`));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User => /api/v1/admin/user/:id

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true }
  );

  if (!user) {
    return next(
      new ErrorHandler(`User with the id: ${req.params.id} not found`)
    );
  }

  res.status(200).json({ success: true, user });
});

// Delete User => /api/v1/admin/user/:id

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User with the id: ${req.params.id} not found`)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
  });
});
