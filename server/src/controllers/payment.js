const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Payment = require("../models/payment");
const {
	calculateMembershipPeriodAndExpiry,
	formatDate,
} = require("../utility/payments");

const makePayment = asyncHandler(async (req, res) => {
	const { _id, amount, method, serviceType } = req.body;

	console.log("Checking recieved Body", req.body);

	const user = await User.findById(_id);
	if (!user) {
		throw new Error("User not Found");
	}

	const date = new Date();
	const [period, expiresOn] = calculateMembershipPeriodAndExpiry(
		serviceType,
		amount
	);

	const payment = new Payment({
		amount,
		method,
		date,
		period,
		serviceType,
		userId: user._id,
	});
	user.currentPlan = serviceType;
	user.isActive = true;
	user.expiresOn = expiresOn;

	await user.save();
	await payment.save();

	res.status(200).send({
		success: true,
		message: "Payment Successfull",
		payment,
		user,
	});
});

const getAllUserPayments = asyncHandler(async (req, res) => {
	const { _id } = req.params;

	const user = await User.findById(_id).lean();
	if (!user) {
		throw new Error("User not Found");
	}

	const records = await Payment.find({ userId: _id }).lean();
	const paymentsRecord = records.map((record) => {
		return {
			...record,
			date: formatDate(record.date),
			name: user.name,
			profilePic: user.profilePic,
		};
	});

	console.log("Record", paymentsRecord);

	res.send({
		success: true,
		message: "Payments Record Fetched Successfully",
		paymentsRecord,
	});
});

module.exports = {
	makePayment,
	getAllUserPayments,
};
