const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Event Models
const eventSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "please enter event name"],
    },
    summary: {
      type: String,
    },
    description: {
      type: String,
    },
    
    primaryEventAvatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    secEventAvatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    location: { type: String },
    preVideoLink: { type: String },
    eventType: {
      type: String,
      required: [true, "Please select event type"],
      enum: {
        values: [
          "Appearance or Signing",
          "Attraction",
          "Camp, Trip, or Retreat",
          "Class, Training, or Workshop",
          "Concert or Performance",
          "Conference",
          "Convention",
          "Dinner or Gala",
          "Festival or Fair",
          "Game or Competition",
          "Meeting or Networking Event",
          "Other",
          "Party or Social Gathering",
          "Race or Endurance event",
          "Tournament",
          "Rally",
          "Seminar or Talk",
          "Screening",
          "Tour",
          "TradeShow, Consumer Show or Expo",
        ],
      },
    },
    eventCategory: {
      type: String,
      required: [true, "Please select event category"],
      enum: {
        values: [
          "Auto, Boat & Air",
          "Business & Professional",
          "Charity & Causes",
          "Community & Culture",
          "Family & Education",
          "Fashion & Beauty",
          "Film, Media & Entertainment",
          "Food & Drink",
          "Government & Policy",
          "Health & Wellness",
          "Hobbies & Special Interest",
          "Other",
          "Home & Lifestyle",
          "Music",
          "Performing & Visual Arts",
          "Religion & Spirituality",
          "School Activities",
          "Science & Technology",
          "Season Holiday",
          "Sport & Fitness",
          "Travel & Outdoor",
        ],
      },
    },
    tags: [String],
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    changed: {
      type: String,
    },
    published: {
      type: String,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    draft: {
      type: String,
      default: "Draft",
    },
    isDraft: {
      type: Boolean,
      default: true,
    },
    currency: {
      type: String,
    },
    capacity: { type: Number },
    onlineEvent: {
      type: Boolean,
      default: false,
    },
    recurringEvent: {
      type: Boolean,
      default: false,
    },
    hideEndTime: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
