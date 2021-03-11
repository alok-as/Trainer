const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Attendance = require("../models/attendance");
const uploadImage = require("../utility/uploader");
const { sendWelcomeEmail } = require("../config/emails");

const registerUser = asyncHandler(async (req, res) => {
	const { phoneNumber, age, dateOfBirth } = req.body;

	console.log("Checking Received File", req.file);

	// const profilePic = await uploadImage(req.file);

	// console.log("Checking Profile Image URL", profilePic);

	const user = new User({
		...req.body,
		// profilePic,
		password: `${phoneNumber}-${age}`,
		dateOfBirth: new Date(dateOfBirth),
	});

	const attendance = new Attendance({
		userId: user._id,
		isPresent: true,
	});

	await user.save();
	await attendance.save();
	sendWelcomeEmail(user.email, user.name);

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

const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find();

	if (!users.length) {
		throw new Error("No Users Exist");
	}

	res.send({
		users,
		success: true,
		message: "Users Successfully Fetched",
	});
});

const getUserById = asyncHandler(async (req, res) => {
	console.log("Query Received", req.params);
	const { _id } = req.params;
	console.log("Id Received", _id);
	const user = await User.findById(_id);

	if (!user) {
		throw new Error("No Such User Found");
	}

	res.send({
		user,
		success: true,
		message: "User Successfully Fetched",
	});
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

module.exports = {
	registerUser,
	getAllUsers,
	getUserById,
	loginUser,
	getUserProfile,
	logoutUser,
};
