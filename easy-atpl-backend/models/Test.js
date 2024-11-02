// models/Test.js
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: String,
  subject: String,
  mode: { type: String, enum: ["study", "exam"], required: true },
  currentQuestionIndex: { type: Number, default: 0 },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  filters: Object, // stores applied filters
  isComplete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Test", testSchema);
