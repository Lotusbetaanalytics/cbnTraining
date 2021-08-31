const express = require("express");
const { login } = require("../controllers/user");

const router = express.Router({ mergeParams: true });

router.route("/").post(login);
module.exports = router;
