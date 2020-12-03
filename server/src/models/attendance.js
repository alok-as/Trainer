const mongoose = require("mongoose");

const attendenceSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	isPresent: {
		type: Boolean,
		required: true,
		default: false,
	},
	date: {
		type: Date,
		default: new Date(),
	},
});

const Attendance = mongoose.model("Attendance", attendenceSchema);
module.exports = Attendance;
