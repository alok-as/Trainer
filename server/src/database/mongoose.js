const mongoose = require("mongoose");
const connection = process.env.CONNECTION_URI;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(connection, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log(`The connection is ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
