const catchAsyncError = require("../middlewares/catchAsyncError");
const Ticket = require("../model/ticket");
const ErrorHandler = require("../utils/errorHandler");
const Event = require("../model/event");

// Create Ticket => /api/v1/ticket
exports.createTicket = catchAsyncError(async (req, res, next) => {
  const { paymentInfo, ticketPrice, taxPrice, totalPrice, ticketDetails } =
    req.body;
  const ticket = await Ticket.create({
    paymentInfo,
    paidAt: Date.now(),
    ticketPrice,
    taxPrice,
    totalPrice,
    ticketDetails,
    user: req.user._id,
  });

  res.status(200).json({ success: true, ticket });
});

// Get Single Ticket => /api/v1/ticket/:id
exports.getSingleTicket = catchAsyncError(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id).populate(
    "user",
    "name, email"
  );

  if (!getTicket) {
    return next(new ErrorHandler("Ticket is not found", 404));
  }

  res.status(200).json({
    success: true,
    ticket,
  });
});

// Get Logged In User Ticket => /api/v1/admin/tickets
exports.getTickets = catchAsyncError(async (req, res, next) => {
  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json({ success: true, tickets });
});

// Get all Tickets => /api/v1/admin/tickets
exports.allTickets = catchAsyncError(async (req, res, next) => {
  const tickets = await Ticket.find();

  let totalAmount = 0;

  tickets.forEach((ticket) => {
    totalAmount += ticket.totalPrice;
  });

  res.status(200).json({ success: true, totalAmount, tickets });
});

// Update // Process all Tickets => /api/v1/admin/tickets
exports.updateTicket = catchAsyncError(async (req, res, next) => {
  const tickets = await Ticket.findById(req.params.id);

  if (tickets.ticketStatus === "Delivered") {
    return next(
      new ErrorHandler("You have already delivered this ticket", 404)
    );
  }

  tickets.ticketDetails.forEach(async (ticket) => {
    await updateTicket(ticket.event, ticket.quantity);
  });

  tickets.ticketStatus = req.body.status;
  tickets.deliveredAt = Date.now();

  await tickets.save();

  res.status(200).json({
    success: true,
    tickets,
  });
});

async function updateTicket(id, quantity) {
  const event = await Event.findById(id);

  event.capacity = event.capacity - quantity;
  await event.save();
}

// Delete Ticket by Admin => /api/v1/
exports.deleteTicket = catchAsyncError(async (req, res, next) => {
  await Ticket.findByIdAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    message: `Ticket with the ID: ${req.params.id} deleted successfully`,
  });
});
