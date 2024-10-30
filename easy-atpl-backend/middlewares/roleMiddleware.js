const admin = require("../config/firebaseConfig");

// Middleware to check user roles
const checkRole = (requiredRole) => {
  return async (req, res, next) => {
    const user = await admin.auth().getUser(req.user.uid);
    if (user.customClaims && user.customClaims.role === requiredRole) {
      return next();
    } else {
      return res.status(403).send("Access denied");
    }
  };
};

module.exports = checkRole;
