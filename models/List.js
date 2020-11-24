const mongoose = require("mongoose");

const Items = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Items", Items);
