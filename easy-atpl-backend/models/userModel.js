const admin = require("../config/firebaseConfig");

const createUserInFirestore = async (uid, email) => {
  const userRef = admin.firestore().collection("users").doc(uid);
  await userRef.set({
    email: email,
    createdAt: new Date().toISOString(),
  });
};

module.exports = { createUserInFirestore };
