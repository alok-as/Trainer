const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const passport = require("passport");

const {
	registerUser,
	loginUser,
	getUserProfile,
	logoutUser,
	createContactCard,
} = require("../controllers/user");

router.post("/register", upload.single("image"), registerUser);
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

router.get("/contact-card", createContactCard);

module.exports = router;
