const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail, isMobilePhone } = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Username is required"],
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Email is required"],
			lowercase: true,
			trim: true,
			validate: [isEmail, "Please Enter a Valid Email address"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be 8 characters long"],
		},
		phoneNumber: {
			type: String,
			required: true,
			validate: {
				validator: (value) => isMobilePhone(value, "en-IN"),
				message: ({ value }) => `${value} is not a valid Phone Number`,
			},
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = await jwt.sign(
		{
			_id: user._id.toString(),
		},
		process.env.JWT_PRIVATE_KEY
	);

	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
};

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	delete userObject.password;
	delete userObject.tokens;
	return userObject;
};

userSchema.methods.verifyPassword = async function (password) {
	const user = this;
	return await bcrypt.compare(password, user.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
