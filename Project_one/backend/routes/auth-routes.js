const { Router } = require("express");
const router = Router();
const passport = require("passport");

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
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("Redirect Google api");
});

module.exports = router;
