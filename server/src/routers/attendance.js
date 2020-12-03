const express = require("express");
const router = express.Router();
const {
	markAttendance,
	getAllAttendance,
} = require("../controllers/attendance");

router.post("/", markAttendance);
router.get("/", getAllAttendance);

module.exports = router;
