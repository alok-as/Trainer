const mongoose = require("mongoose");
const User = require("./user");

const paymentSchema = mongoose.Schema({
	amount: {
		type: Number,
		default: 1200,
		required: [true, "Payment amount is required"],
	},
	method: {
		type: String,
		trim: true,
		enum: ["Cash", "UPI", "Cheque", "Netbanking"],
		required: [true, "Payment method is required"],
	},
	date: {
		type: Date,
		required: true,
	},
	period: {
		type: String,
		enum: ["Monthly", "Quaterly", "Half-Yearly", "Annually"],
		default: "Monthly",
		required: true,
	},
	serviceType: {
		type: String,
		enum: ["General", "Couple", "Personal Training"],
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
