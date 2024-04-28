require("dotenv").config();
const express = require("express");

// import routes login
const AuthRoutes = require("./routes/auth-routes");

const app = express();

// set view engine
app.set("view engine", "ejs");

app.use("/auth", AuthRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("app now listening for requests on port 3000");
});
