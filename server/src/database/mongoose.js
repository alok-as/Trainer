const mongoose = require("mongoose");
const connection = process.env.CONNECTION_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(connection, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
