const catchAsyncError = require("../middlewares/catchAsyncError");
const Support = require("../model/support");
const ErrorHandler = require("../utils/errorHandler");
const sgMail = require("../utils/sendEmail");

// Create Complain => /api/v1/support/
exports.newComplain = catchAsyncError(async (req, res, next) => {
  const { complain, complainMsg } = req.body;
  const newComplain = await (
    await Support.create({ complain, complainMsg, user: req.user.id })
  ).populate("user", "email, fname");

  // TODO send email
  try {
    sgMail;
  } catch (error) {
    return next(new ErrorHandler("Message do not send"));
  }

  res.status(200).json({ success: true, newComplain });
});

// Get Complains to customer service => /api/v1/support/complains
exports.getNewComplain = catchAsyncError(async (req, res, next) => {
  const newComplain = await Support.find();

  if (newComplain.archive === true) {
    return res.status(200).json({ success: true, newComplain });
  }

  // TODO send email
  res.status(200).json({ success: true, newComplain });
});

// Address Complain => /api/v1/support/sendEmail
exports.newComplain = catchAsyncError(async (req, res, next) => {
  const response = req.body.response;

  // TODO send email
  try {
    sgMail;
  } catch (error) {
    return next(new ErrorHandler("Email do not send"));
  }
  res.status(200).json({ success: true, newComplain });
});

// Update Complains status to archive by customer service => /api/v1/support/archive
exports.updateComplain = catchAsyncError(async (req, res, next) => {
  const newComplain = await Support.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true }
  );

  // TODO send email
  res.status(200).json({ success: true, newComplain });
});

// Delete Complains by customer service => /api/v1/support/
exports.updateComplain = catchAsyncError(async (req, res, next) => {
  await Support.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ success: true, message: `Complain with ID: ${req.params.id}` });
});
