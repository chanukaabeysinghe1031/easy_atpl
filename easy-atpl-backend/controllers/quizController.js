// controllers/quizController.js
const Quiz = require("../models/Quiz");
const Question = require("../models/Question");

exports.createQuiz = async (req, res) => {
  try {
    const { userId, mode, filters } = req.body;
    const questionFilter = {}; // Apply filters based on mode
    if (mode === "exam") questionFilter.realExamFlag = true;

    const questions = await Question.find(questionFilter).limit(10); // Example limit
    const quiz = await Quiz.create({ userId, mode, questions, filters });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
