const passportJwt = require("passport-jwt");
const { Strategy, ExtractJwt } = passportJwt;
const User = require("../models/user");

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_PRIVATE_KEY,
	passReqToCallback: true,
};

const strategy = new Strategy(opts, async (req, payload, done) => {
	try {
		console.log("Jwt", req);
		console.log("Passport Payload", payload);
		const user = await User.findOne({ _id: payload._id });
		if (!user) {
			return done(null, false);
		}
		done(null, user);
	} catch (error) {
		done(error, false);
	}
});

const passportConfiguration = (passport) => passport.use(strategy);
module.exports = passportConfiguration;
