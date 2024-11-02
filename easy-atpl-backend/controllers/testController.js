// controllers/testController.js
const Test = require("../models/Test");
const Question = require("../models/Question");

exports.createTest = async (req, res) => {
  try {
    const { userId, course, subject, mode, filters } = req.body;
    const questionFilter = {}; // Add conditions based on filters

    const questions = await Question.find(questionFilter).limit(20); // Limit questions
    const test = await Test.create({
      userId,
      course,
      subject,
      mode,
      questions,
      filters,
    });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.resumeTest = async (req, res) => {
  try {
    const { testId } = req.params;
    const test = await Test.findById(testId).populate("questions");
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
