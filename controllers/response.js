const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Response = require("../models/Response");

// @desc    Add Qustions/
// @route   POST/api/v1/Qustions
// @access   Public
exports.addResponse = asyncHandler(async (req, res, next) => {
  const response = await Response.create(req.body);

  if (!response) {
    return next(new ErrorResponse("An Error Occured, Please Tray Again", 400));
  }
  res.status(201).json({
    success: true,
    data: response,
  });
});
