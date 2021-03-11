const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
	question: {
		type: "String",
		required: true,
		trim: true,
	},
	answers: {
		type: Array,
		required: true,
	},
	solution: {
		type: Number,
	},
});

const QuizSchema = mongoose.Schema(
	{
		survey: [QuestionSchema],
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
