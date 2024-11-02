// models/Question.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctAnswer: Number, // index of the correct option
  hasAttachments: Boolean,
  country: String, // For filtering questions by country
  difficulty: Number,
  tags: [String],
  realExamFlag: { type: Boolean, default: false },
  seenInRealExam: [{ country: String }],
  markedByUser: Boolean,
  note: String,
});

module.exports = mongoose.model("Question", questionSchema);
