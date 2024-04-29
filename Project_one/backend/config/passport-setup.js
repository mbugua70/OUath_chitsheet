require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

// setting passport
passport.use(
  new GoogleStrategy(
    {
      // option for the google strategy
      // setting up the google api behind the scene
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log(profile);
    }
  )
);
