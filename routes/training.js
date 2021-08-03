const express = require("express");
const { addTraniee, getTraniees } = require("../controllers/training");
const advancedResults = require("../middleware/advancedResults");
const Training = require("../models/Training");

const router = express.Router({ mergeParams: true });

router.route("/").post(addTraniee).get(advancedResults(Training), getTraniees);

module.exports = router;
