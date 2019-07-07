const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes")

const passport = require('passport');
const flash = require('connect-flash');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

// Configure middleware

app.use(logger("dev")); // Use morgan logger for logging requests

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // Make public a static folder

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// require('./routes/routes')(app, passport); // load our routes and pass in our app and fully configured passport

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/pianoRollDB", { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err)
  }
  else { console.log("successfully connected to database!") };
})


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
