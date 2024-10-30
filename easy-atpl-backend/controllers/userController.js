const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin = require("../config/firebaseConfig");
const { createUserInFirestore } = require("../models/userModel");

// Register User
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await admin.auth().createUser({
      email: email,
      password: hashedPassword,
    });

    // Create user in Firestore
    await createUserInFirestore(user.uid, email);

    res
      .status(201)
      .json({ message: "User registered successfully", uid: user.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().getUserByEmail(email);

    // Fetch user password from Firestore
    const userDoc = await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get();
    const isMatch = await bcrypt.compare(password, userDoc.data().passwordHash);

    if (isMatch) {
      const token = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = { registerUser, loginUser };
