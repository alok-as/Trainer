const express = require("express");
const connectDB = require("./database/mongoose");

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());

app.listen(port, () => {
	console.log(`The Server is up and running on Port ${port}`);
});
