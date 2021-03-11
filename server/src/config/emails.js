// const nodemailer = require("nodemailer");

// const transport = nodemailer.createTransport({
// 	host: "smtp.mailtrap.io",
// 	port: 2525,
// 	auth: {
// 		user: "907f92095122b0",
// 		pass: "17a47418cbba94",
// 	},
// });

// const sendWelcomeEmail = (receiver) => {
// 	const messgage = {
// 		from: "elonmusk@tesla.com",
// 		to: "to@email.com",
// 		subject: "Design Your Model S | Tesla",
// 		text: "Have the most fun you can in a car. Get your Tesla today!",
// 	};

// 	transporter.sendMail(message, (error, result) => {
// 		if (error) {
// 			console.log("Error", error);
// 		} else {
// 			console.log("Result", result);
// 		}
// 	});
// };

//Testing
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.MAILING_API_KEY);

const sendWelcomeEmail = async (email, name) => {
	try {
		await sgMail.send({
			to: email,
			from: process.env.SENDER_ADDRESS,
			subject: "Welcome Mail for Joining",
			text: `Thank you ${name}, for joining, Looking forward for a long term collaboration`,
		});
	} catch (error) {
		throw new Error(error.message);
	}
};

const sendPaymentReminderEmail = async (email, name) => {
	try {
		await sgMail.send({
			to: email,
			from: process.env.SENDER_ADDRESS,
			subject: "Membership Payment Reminder",
			text: `Hi ${name}, This email is to notify you that your membership in expiring today.`,
		});
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = {
	sendWelcomeEmail,
	sendPaymentReminderEmail,
};
