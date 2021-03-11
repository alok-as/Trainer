const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Attendance = require("../models/attendance");
const { formatDate } = require("../utility/payments");

const markAttendance = asyncHandler(async (req, res) => {
	const { type, _id, phoneNumber } = req.body;
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
	await attendance.save();

	res.status(200).send({
		success: true,
		message: "Attendance Marked Successfully",
		attendance,
	});
});

const getAllUserAttendance = asyncHandler(async (req, res) => {
	const { _id } = req.params;
	const { month, year } = req.body;

	const user = await User.findById(_id).lean();

	if (!user) {
		throw new Error("User doesn't Exist");
	}

	const attendanceRecord = await Attendance.find({ userId: _id }).lean();

	const transformedRecords = attendanceRecord.map((record) => {
		return { ...record, date: formatDate(record.date) };
	});

	res.send({
		success: true,
		message: "Attendance Fetched Successfully",
		attendanceRecord: transformedRecords,
	});
});

module.exports = {
	markAttendance,
	getAllUserAttendance,
};
