// routes/quizRoutes.js
const express = require("express");
const { createQuiz } = require("../controllers/quizController");

const router = express.Router();

router.post("/create", createQuiz);

module.exports = router;
