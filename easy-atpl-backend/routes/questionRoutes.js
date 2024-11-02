// routes/questionRoutes.js
const express = require("express");
const { getQuestions } = require("../controllers/questionController");

const router = express.Router();

router.post("/", getQuestions);

module.exports = router;
