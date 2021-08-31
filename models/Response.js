const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Register",
  },
  question: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypt password using bcrypt

module.exports = mongoose.model("Response", ResponseSchema);
