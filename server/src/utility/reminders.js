const User = require("../models/user");
const { sendPaymentReminderEmail } = require("../config/emails");

const remindUsersForPayment = async () => {
	const today = new Date();
	const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));
	today.setHours(0, 0, 0, 0);
	tomorrow.setHours(0, 0, 0, 0);

	const users = await User.find({
		expiresOn: { $gte: today, $lt: tomorrow },
	}).lean();

	console.log("Checking all Find Users", users);

	if (users.length) {
		users.forEach((user) => {
			sendPaymentReminderEmail(user.email, user.name);
		});
	}
};

const greetUsersForBirthday = () => {
	const today = new Date();
	const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));
	today.setHours(0, 0, 0, 0);
	tomorrow.setHours(0, 0, 0, 0);
};

module.exports = {
	remindUsersForPayment,
	greetUsersForBirthday,
};
