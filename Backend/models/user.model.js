const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    type: {
      type: String,
      default: "user",
      enum: ["vendor", "user"],
    },
    walletAddress: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

