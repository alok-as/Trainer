const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const validatationErrorHandler = (err) => {
	const message = Object.values(err.errors)
		.map(({ properties }) => {
			return properties.message;
		})
		.join(" and ");

	return message;
};

const duplicateKeyErrorHandler = (err) => {
	const message = "User already exists";
	return message;
};

const sendErrorResponse = (res, message) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({ success: false, message });
};

const errorHandler = (error, req, res, next) => {
	let message = error.message;

	if (error.name.includes("ValidationError")) {
		message = validatationErrorHandler(error);
	} else if (error.code === 11000) {
		message = duplicateKeyErrorHandler(error);
	}

	sendErrorResponse(res, message);
};

module.exports = {
	errorHandler,
	notFound,
};
