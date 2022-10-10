const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Ticket Models
const ticketSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    ticketDetails: [
      {
        price: {
          type: Number,
        },
        eventAvatar: {
          type: String,
          required: true,
        },
        eventName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        event: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Event",
        },
      },
    ],
    paymentInfo: {
      id: {
        type: String,
      },
      status: {
        type: String,
      },
    },
    paidAt: { type: Date },
    ticketPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    ticketStatus: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendee", ticketSchema);
