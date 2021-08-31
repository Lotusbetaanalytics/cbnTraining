const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Register = require("../models/Register");

// @desc    Add Qustions/
// @route   POST/api/v1/Qustions
// @access   Public
exports.login = asyncHandler(async (req, res, next) => {
  const register = await Register.create(req.body);

  if (!register) {
    return next(new ErrorResponse("An Error Occured, Please Tray Again", 400));
  }
  res.status(201).json({
    success: true,
    data: register,
  });
});
