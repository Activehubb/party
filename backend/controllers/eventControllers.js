const Event = require("../model/event");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

// Create Organization event => /api/v1/create/event
exports.createEvent = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const newEvent = await Event.create(req.body);

  // TODO send Email

  res.status(201).json({ success: true, newEvent });
});

// Get All Organization event => /api/v1/event?keyword=test
exports.getAllEvent = catchAsyncError(async (req, res, next) => {
  const resPerPage = 4;
  const eventCounts = await Event.countDocuments();
  const apiFeatures = new APIFeatures(Event.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  const getAllEvent = await apiFeatures.query;

  if (!getAllEvent) {
    return next(new ErrorHandler("You have not create event yet", 400));
  }

  res.status(200).json({
    success: true,
    count: getAllEvent.length,
    getAllEvent,
    eventCounts,
  });
});

// Update Organization event => /api/v1/update/event/:id
exports.updateEvent = catchAsyncError(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload({
    folder: "avatar",
    width: 2160,
    crop: "scale",
  });

  const updateEvent = await Event.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        ...req.body,
        primaryEventAvatar: {
          public_id: result.public_id,
          url: result.secure_url,
        },
        secEventAvatar: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      },
    },
    { new: true, runValidators: true }
  );

  if (!updateEvent) {
    return next(new ErrorHandler("This Party has been closed or deleted", 404));
  }

  res.status(201).json({ success: true, updateEvent });
});

// Get Organization event by ID
exports.getEventById = catchAsyncError(async (req, res, next) => {
  const getEventById = await Event.findById(req.params.id);

  res.status(200).json({ success: true, getEventById });
});

// Delete Organization event by ID => /api/v1/delete/event/:id
exports.deleteEventById = catchAsyncError(async (req, res, next) => {
  const deleteEventById = await Event.findByIdAndDelete(req.params.id);

  if (!deleteEventById) {
    return next(new ErrorHandler("This event does not exist...", 400));
  }

  res.status(200).json("Event deleted successfully...");
});

exports.deleteAllEvent = catchAsyncError(async (req, res, next) => {
  await Event.deleteMany({ user: req.user.id });

  res.status(200).json("Event deleted successfully...");
});
