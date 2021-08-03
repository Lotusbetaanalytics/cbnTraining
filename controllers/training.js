const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Training = require("../models/Training");

// @desc    Add Trainee/
// @route   POST/api/v1/trainee
// @access   Public
exports.addTraniee = asyncHandler(async (req, res, next) => {
  const training = await Training.create(req.body);

  if (!training) {
    return next(new ErrorResponse("An Error Occured, Please Tray Again", 400));
  }
  res.status(201).json({
    success: true,
    data: training,
  });
});

// @desc    Get Trainees/
// @route   GET/api/v1/trainee
// @access   Private
exports.getTraniees = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
