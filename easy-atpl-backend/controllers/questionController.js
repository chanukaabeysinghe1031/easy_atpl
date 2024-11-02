// controllers/questionController.js
const Question = require("../models/Question");

exports.getQuestions = async (req, res) => {
  try {
    const { filters } = req.body;
    const questions = await Question.find(filters).lean();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
