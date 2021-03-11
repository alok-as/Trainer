const express = require("express");
const router = express.Router();
const { fetchAnalytics } = require("../controllers/analytics");

router.get("/", fetchAnalytics);

module.exports = router;
