require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const UserModel = require("../model/userModel.js");

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
    async (accessToken, refreshToken, profile, done) => {
      // passport callback function
      const currentUser = await UserModel.findOne({ googleId: profile.id });
      if (currentUser) {
        console.log(`User already exist`);
      } else {
        const userDetails = await UserModel.create({
          username: profile.displayName,
          googleId: profile.id,
        });
        console.log(`New user created: ${userDetails}`);
      }
    }
  )
);
