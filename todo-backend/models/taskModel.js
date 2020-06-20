
const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true,"Task Name is require"],
    },
    description: {
      type: String,
      trim: true,
      required: [true,"Task Description is require"],
    },
    isRepeat: {
      type: String,
      trim: true,
      enum: ["yes", "no"],
    },
    status:{
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);


module.exports = mongoose.model("Task", schema);
