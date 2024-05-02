const { Router } = require("express");
const router = Router();
const passport = require("passport");

// Middleware to check if user is authenticated
const authUser = (req, res, next) => {
  const userOne = req.user;
  next();
};

// Apply authUser middleware to profile route
router.get("/", authUser, (req, res) => {
  // Access user data from req.user
  res.send("The user profile: " + req.user);
});

module.exports = router;
