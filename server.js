const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes")
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(logger("dev")); // Use morgan logger for logging requests

app.use(bodyParser()); // get information from html forms

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // Make public a static folder

// require('./routes/routes')(app, passport); // load our routes and pass in our app and fully configured passport
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes
app.use(routes);

// If deployed, use the deployed database, otherwise default to the local 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pianoRollDB"

// COnnect to the mongo db
mongoose.connect(MONGODB_URI || `mongodb://${process.env.MLAB_DBNAME}:${process.env.MLAB_PASSWORD}@ds245927.mlab.com:45927/heroku_lm2dk7qt`);


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
