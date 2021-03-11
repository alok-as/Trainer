const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const passport = require("passport");

const { authorized } = require("../middlewares/auth");

const {
	registerUser,
	getAllUsers,
	getUserById,
	loginUser,
	getUserProfile,
	logoutUser,
} = require("../controllers/user");

router.post("/register", upload.single("profilePic"), registerUser);
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

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	authorized,
	getAllUsers
);
router.get("/:_id", getUserById);

module.exports = router;
