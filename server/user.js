const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, unique: true, required: true },
    password: { type: String },
    library: { type: Array, default: [] },
  },
  { timestamps: {} }
);

module.exports = mongoose.model("user", userSchema);
