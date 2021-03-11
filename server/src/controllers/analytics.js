const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Payment = require("../models/payment");

const fetchAnalytics = asyncHandler(async (req, res) => {
	const totalMembers = await User.estimatedDocumentCount();
	const payments = await Payment.find().lean();

	const totalIncome = payments.reduce((acc, payment) => {
		return acc + payment.amount;
	}, 0);

	res.status(200).send({
		success: true,
		message: "Analytics Fetched Successfully",
		analytics: {
			totalMembers,
			totalIncome,
		},
	});
});

module.exports = {
	fetchAnalytics,
};
