// models/Quiz.js
const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  mode: { type: String, enum: ["study", "exam"], required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  isTimed: Boolean,
  countryFilter: String,
  incorrectlyAnsweredFilter: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", quizSchema);
