const asyncHandler = require("express-async-handler");
const Quiz = require("../models/quiz");
const User = require("../models/user");

const fetchAllQuiz = asyncHandler(async (req, res) => {
	const quiz = await Quiz.find();
	if (!quiz.length) {
		throw new Error("No Quiz Exists");
	}

	res.status(200).send({
		message: "All Quizes Successfully fetched",
		quiz,
	});
});

const fetchUserQuiz = asyncHandler(async (req, res) => {
	const { _id } = req.body;
	console.log(req.query);
	const quiz = await Quiz.findById(_id).populate("user", "name");

	if (!quiz) {
		throw new Error("Quiz not Found");
	}

	res.status(200).send({
		message: "Quiz Successfully fetched",
		quiz,
	});
});

const createQuiz = asyncHandler(async (req, res) => {
	const { _id, survey } = req.body;

	const user = await User.findById(_id);
	if (!user) {
		throw new Error("User not found");
	}

	const isExisiting = await Quiz.findOne({ user: _id });
	if (isExisiting) {
		throw new Error("Quiz Already Exists for the User");
	}

	const quiz = await new Quiz({
		user: _id,
		survey,
	});
	await quiz.save();

	res.status(200).send({
		message: "Quiz Successfully Created",
		quiz,
	});
});

const deleteQuiz = asyncHandler(async (req, res) => {
	const { _id } = req.body;
	const quiz = await Quiz.findOneAndDelete({ _id });

	if (!quiz) {
		throw new Error("Quiz doesn't exist");
	}

	res.send({
		message: "Quiz Successfully deleted",
	});
});

const addQuestion = asyncHandler(async (req, res) => {
	const { quizId, question } = req.body;

	const quiz = await Quiz.findById(quizId);
	if (!quiz) {
		throw new Error("Quiz not found");
	}

	quiz.survey.push(question);
	await quiz.save();

	res.send({
		message: "Question successfully added to quiz",
		survey: quiz.survey,
	});
});

const updateQuestion = asyncHandler(async (req, res) => {
	const { quizId, _id, question } = req.body;

	const quiz = await Quiz.findById(quizId);
	if (!quiz) {
		throw new Error("Quiz not found");
	}

	const index = quiz.survey.findIndex((question) => question._id == _id);
	if (index === -1) {
		throw new Error("Question not Found");
	}

	const existingQuestion = quiz.survey[index];
	const newQuestion = {
		question: question.question ? question.question : existingQuestion.question,
		answers: question.answers ? question.answers : existingQuestion.answers,
		solution: question.solution ? question.solution : existingQuestion.solution,
	};
	quiz.survey[index] = newQuestion;
	await quiz.save();

	res.send({
		message: "Question Successfully updated",
		survey: quiz.survey,
	});
});

const deleteQuestion = asyncHandler(async (req, res) => {
	const { quizId, _id, question } = req.body;

	const quiz = await Quiz.findById(quizId);
	if (!quiz) {
		throw new Error("Quiz not found");
	}

	const index = quiz.survey.findIndex((question) => question._id == _id);
	if (index === -1) {
		throw new Error("Question not Found");
	}
	quiz.survey.splice(index, 1);
	await quiz.save();

	res.send({
		message: "Question Successfully deleted",
		survey: quiz.survey,
	});
});

module.exports = {
	createQuiz,
	fetchAllQuiz,
	fetchUserQuiz,
	deleteQuiz,
	addQuestion,
	updateQuestion,
	deleteQuestion,
};
