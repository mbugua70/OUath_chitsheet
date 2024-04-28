const { Router } = require("express");
const router = Router();

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout
router.get("/logout", (req, res) => {
  // handled with passportjs
  res.send("logging out");
});

// auth Google
router.get("/google", (req, res) => {
  // handled with Google
  res.send("Logging in with Google");
});

module.exports = router;
