const express = require("express");
const router = express.Router();

const {
	fetchAllQuiz,
	fetchUserQuiz,
	createQuiz,
	deleteQuiz,
	addQuestion,
	updateQuestion,
	deleteQuestion,
} = require("../controllers/quiz");

router.post("/create-quiz", createQuiz);
router.post("/delete-quiz", deleteQuiz);
router.post("/add-question", addQuestion);
router.post("/update-question", updateQuestion);
router.post("/delete-question", deleteQuestion);

router.get("/fetch-quiz-by-id", fetchUserQuiz);
router.get("/fetch-all-quiz", fetchAllQuiz);

module.exports = router;
