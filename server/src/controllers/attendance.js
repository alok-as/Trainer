const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Attendance = require("../models/attendance");

const markAttendance = asyncHandler(async (req, res) => {
	const { type, _id, phoneNumber, date, date2 } = req.body;
	let user;

	switch (type) {
		case "userId":
			user = await User.findById(_id);
			break;
		case "phoneNumber":
			user = await User.findOne({ phoneNumber });
			break;
		default:
			return res.status(400).send({
				success: false,
				message: "Not a valid Credential",
			});
	}

	if (!user) {
		throw new Error("User not Found");
	}

	const today = new Date();
	const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));
	today.setHours(0, 0, 0, 0);
	tomorrow.setHours(0, 0, 0, 0);

	const isAlreadyMarked = await Attendance.findOne({
		userId: user._id,
		date: { $gte: today, $lt: tomorrow },
	});

	if (isAlreadyMarked) {
		throw new Error("Attendance Already Marked");
	}

	const attendance = new Attendance({
		userId: user._id,
		isPresent: true,
		date: today,
	});
	user.attendanceRecord = user.attendanceRecord.concat(attendance._id);

	await user.save();
	await attendance.save();

	res.status(200).send({
		success: true,
		message: "Attendance Marked Successfully",
	});
});

const getAllAttendance = asyncHandler(async (req, res) => {
	const { _id } = req.body;
	const user = await User.findById(_id);

	if (!user) {
		throw new Error("User doesn't Exist");
	}

	await user.populate("attendanceRecord").execPopulate();
	res.send({
		success: true,
		message: "Attendance Fetched Successfully",
		attendanceRecord: user.attendanceRecord,
	});
});

module.exports = {
	markAttendance,
	getAllAttendance,
};
