const express = require("express");
const passport = require("passport");
const { authorized } = require("../middlewares/auth");

const { makePayment, getAllUserPayments } = require("../controllers/payment");

const router = express.Router();

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	authorized,
	makePayment
);

router.get("/fetch-all-payments/:_id", getAllUserPayments);

module.exports = router;
