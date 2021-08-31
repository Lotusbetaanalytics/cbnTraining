const express = require("express");
const { addResponse } = require("../controllers/response");
const advancedResults = require("../middleware/advancedResults");
const Evaluation = require("../models/Evaluation");

const router = express.Router({ mergeParams: true });

router.route("/").post(addResponse);

module.exports = router;
