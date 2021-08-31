const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypt password using bcrypt

module.exports = mongoose.model("Register", RegisterSchema);
