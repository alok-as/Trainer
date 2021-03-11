const express = require("express");
const router = express.Router();
const {
	markAttendance,
	getAllUserAttendance,
} = require("../controllers/attendance");

router.post("/", markAttendance);
router.get("/fetch-all-attendance/:_id", getAllUserAttendance);

module.exports = router;
