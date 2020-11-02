const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const registerUser = asyncHandler(async (req, res) => {
	const user = new User(req.body);
	await user.save();
	const token = await user.generateAuthToken();
	res.status(201).send({ user, token });
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

module.exports = {
	registerUser,
	loginUser,
	getUserProfile,
	logoutUser,
};
