// routes/testRoutes.js
const express = require("express");
const { createTest, resumeTest } = require("../controllers/testController");

const router = express.Router();

router.post("/create", createTest);
router.get("/:testId/resume", resumeTest);

module.exports = router;
