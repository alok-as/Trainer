const authorized = async (req, res, next) => {
	try {
		console.log("Middleware", req.user.role);
		if (!req.user.role.includes("admin")) {
			throw new Error("Not an authorized User");
		}
		next();
	} catch (error) {
		res.status(401).send(error.message);
	}
};

module.exports = {
	authorized,
};
