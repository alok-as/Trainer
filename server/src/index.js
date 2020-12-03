const express = require("express");
const connectDB = require("./database/mongoose");
const cors = require("cors");
// const NetworkSpeed = require("network-speed"); // ES5

const passport = require("passport");
const passportConfiguration = require("./config/passport");

const userRouter = require("./routers/user");
const attendanceRouter = require("./routers/attendance");
const { notFound, errorHandler } = require("./middlewares/error");

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

passportConfiguration(passport);
app.use(passport.initialize());

app.use("/api/users/", userRouter);
app.use("/api/attendance", attendanceRouter);
app.use(notFound);
app.use(errorHandler);

// const getNetworkDownloadSpeed = async () => {
// 	const baseUrl = "http://eu.httpbin.org/stream-bytes/50000000";
// 	const fileSizeInBytes = 50000000;
// 	const speed = await new NetworkSpeed().checkDownloadSpeed(
// 		baseUrl,
// 		fileSizeInBytes
// 	);
// 	console.log(speed);
// };

// getNetworkDownloadSpeed();

app.listen(port, () => {
	console.log(`The Server is up and running on Port ${port}`);
});
