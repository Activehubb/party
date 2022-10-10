const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Creating Support Models
const supportSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  complain: {
    type: String,
    require: true,
  },
  complainMsg: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  archived: {
    type: Boolean,
    default: false,
  },
  
});

module.exports = mongoose.model("Support", supportSchema);
