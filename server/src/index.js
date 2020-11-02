const express = require("express");
const connectDB = require("./database/mongoose");
const cors = require("cors");

const passport = require("passport");
const passportConfiguration = require("./config/passport");

const userRouter = require("./routers/user");
const { notFound, errorHandler } = require("./middlewares/error");

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

passportConfiguration(passport);
app.use(passport.initialize());

app.use("/api/users", userRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`The Server is up and running on Port ${port}`);
});
