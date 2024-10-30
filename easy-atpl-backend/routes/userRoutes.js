const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// Register new user
router.post("/signup", registerUser);

// Login user
router.post("/signin", loginUser);

module.exports = router;
