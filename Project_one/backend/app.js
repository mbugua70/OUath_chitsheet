require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// import routes login
const AuthRoutes = require("./routes/auth-routes");
const UserRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");

const cookieSession = require("cookie-session");
const passport = require("passport");

// passport config file

const app = express();

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: process.env.cookieSessionKey,
  })
);

app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

// intializing passportjs
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGODB_STRING)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the database and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

// set view engine
app.set("view engine", "ejs");


app.use("/auth", AuthRoutes);
app.use("/profile", UserRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});
