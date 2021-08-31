const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Evaluation = require("../models/Evaluation");

// @desc    Add Qustions/
// @route   POST/api/v1/Qustions
// @access   Public
exports.addQuestion = asyncHandler(async (req, res, next) => {
  const evaluation = await Evaluation.create(req.body);

  if (!evaluation) {
    return next(new ErrorResponse("An Error Occured, Please Tray Again", 400));
  }
  res.status(201).json({
    success: true,
    data: evaluation,
  });
});

// @desc    Get Questions/
// @route   GET/api/v1/questions
// @access   Private
exports.getQuestions = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
