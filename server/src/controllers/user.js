const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Attendance = require("../models/attendance");
const vCardsJS = require("vcards-js");

const registerUser = asyncHandler(async (req, res) => {
	const { phoneNumber, age, dateOfBirth } = req.body;
	const user = new User({
		...req.body,
		password: `${phoneNumber}-${age}`,
		dateOfBirth: new Date(dateOfBirth),
	});

	const attendance = new Attendance({
		userId: user._id,
		isPresent: true,
	});

	user.attendanceRecord = user.attendanceRecord.concat(attendance._id);

	await user.save();
	await attendance.save();

	res.status(201).send({
		success: true,
		message: "User Successfully Created",
		user,
	});
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		throw new Error("Incorrect Email or Password");
	}

	const isMatch = await user.verifyPassword(password);
	if (!isMatch) {
		throw new Error("Incorrect Email or Password");
	}

	const token = await user.generateAuthToken();
	res.send({ user, token });
});

const getUserProfile = asyncHandler((req, res) => {
	res.send(req.user);
});

const logoutUser = asyncHandler(async (req, res) => {
	console.log(req.user);
	req.logout();
	res.send({
		message: "User Successfully Logged Out",
	});
});

const createContactCard = asyncHandler((req, res) => {
	const vCard = vCardsJS();

	vCard.firstName = "Alok";
	vCard.middleName = "J";
	vCard.lastName = "Sharma";
	vCard.organization = "Techchefz Pvt Ltd";
	vCard.workPhone = "8755595964";
	vCard.birthday = new Date(1985, 0, 1);
	vCard.title = "Software Developer";
	vCard.note = "Notes by Alok Sharma";

	res.set("Content-Type", 'text/vcard; name="contact.vcf"');
	res.set("Content-Disposition", 'attachment; filename="contact.vcf"');
	res.send({
		vcard: vCard,
		name: vCard.firstName,
	});
});

module.exports = {
	registerUser,
	loginUser,
	getUserProfile,
	logoutUser,
	createContactCard,
};
