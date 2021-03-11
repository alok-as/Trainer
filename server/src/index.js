const path = require("path");
const express = require("express");
const connectDB = require("./database/mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const passport = require("passport");
const passportConfiguration = require("./config/passport");

const userRouter = require("./routers/user");
const attendanceRouter = require("./routers/attendance");
const paymentRouter = require("./routers/payment");
const analyticsRouter = require("./routers/analytics");
const quizRouter = require("./routers/quiz");
const { notFound, errorHandler } = require("./middlewares/error");

const { runEveryDayAtTime } = require("./utility/scheduler");
const { remindUsersForPayment } = require("./utility/reminders");

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

passportConfiguration(passport);
app.use(passport.initialize());

app.use("/api/users", userRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/quiz", quizRouter);
app.use(notFound);
app.use(errorHandler);

// runEveryDayAtTime("8:36 pm", remindUsersForPayment);

app.listen(port, () => {
	console.log(`The Server is up and running on Port ${port}`);
});
