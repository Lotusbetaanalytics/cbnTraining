const express = require("express");
const { addQuestion, getQuestions } = require("../controllers/evaluation");
const advancedResults = require("../middleware/advancedResults");
const Evaluation = require("../models/Evaluation");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(addQuestion)
  .get(advancedResults(Evaluation), getQuestions);

module.exports = router;
