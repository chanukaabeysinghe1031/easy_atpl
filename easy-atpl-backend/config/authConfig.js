// authConfig.js
const jwt = require("jsonwebtoken");

const generateToken = (uid) => {
  const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
