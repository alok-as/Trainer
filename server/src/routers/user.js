const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
	registerUser,
	loginUser,
	getUserProfile,
	logoutUser,
} = require("../controllers/user");

router.post("/", registerUser);
router.post("/login", loginUser);

router.get(
	"/profile",
	passport.authenticate("jwt", { session: false }),
	getUserProfile
);

router.get(
	"/logout",
	passport.authenticate("jwt", { session: false }),
	logoutUser
);

module.exports = router;
