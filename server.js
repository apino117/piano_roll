const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes")

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/pianoRollDB", { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err)
  }
  else { console.log("successfully connected to database!") };
})

app.get("/scrape", function (req, res) {

  axios.get("http://www.echojs.com/").then(function (response) {

    const $ = cheerio.load(response.data);

    $("article h2").each(function (i, element) {

      const result = {};

      result.title = $(this)
        .children("a")
        .text();
      result.url = $(this)
        .children("a")
        .attr("href");

      db.Website.create(result)
        .then(function (dbWebsite) {
          console.log(dbWebsite);
        })
        .catch(function (err) {
          console.log(err)
        });
    })

    // Send a message to the client
    res.send("Scrape Complete");
  });
});


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
