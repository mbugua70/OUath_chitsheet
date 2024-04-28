require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth");

// setting passport
passport.use(
  new GoogleStrategy({
    // option for the google strategy
    // setting up the google api behind the scene
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
  }),
  () => {
    // passport callback function
  }
);
