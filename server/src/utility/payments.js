const dayjs = require("dayjs");

const generalCharges = new Map();
generalCharges.set(1200, "Monthly");
generalCharges.set(3000, "Quaterly");
generalCharges.set(5000, "Half-Yearly");
generalCharges.set(8000, "Annually");

const coupleCharges = new Map();
coupleCharges.set(1000, "Monthly");
coupleCharges.set(2500, "Quaterly");
coupleCharges.set(4000, "Half-Yearly");
coupleCharges.set(7000, "Annually");

const calculatePersonalPaymentPeriod = (amount) => {
	const months = amount / 8000;
	switch (months) {
		case 1:
			return "Monthly";
		case 3:
			return "Quaterly";
		case 6:
			return "Half-Yearly";
		case 12:
			return "Annually";
	}
};

const calculateMembershipExpiryDate = (period) => {
	const date = new Date();

	switch (period) {
		case "Monthly":
			//Testing
			// return new Date(date.setSeconds(date.getSeconds() + 5));
			return new Date(date.setMonth(date.getMonth() + 1));
		case "Quaterly":
			return new Date(date.setMonth(date.getMonth() + 3));
		case "Half-Yearly":
			return new Date(date.setMonth(date.getMonth() + 6));
		case "Annually":
			return new Date(date.setFullYear(date.getFullYear() + 1));
		default:
			break;
	}
};

const calculateMembershipPeriodAndExpiry = (serviceType, amount) => {
	let period;

	switch (serviceType) {
		case "General":
			period = generalCharges.get(amount);
			break;
		case "Couple":
			period = coupleCharges.get(amount);
			break;
		case "Personal Training":
			period = calculatePersonalPaymentPeriod(amount);
			break;
		default:
			break;
	}

	const expiresOn = calculateMembershipExpiryDate(period);
	return [period, expiresOn];
};

const formatDate = (date) => {
	const formattedDate = dayjs(date).format("DD MMM YYYY");
	return formattedDate;
};

module.exports = {
	calculateMembershipPeriodAndExpiry,
	formatDate,
};
