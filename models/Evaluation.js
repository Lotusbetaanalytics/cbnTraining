const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypt password using bcrypt

module.exports = mongoose.model("Evaluation", EvaluationSchema);
