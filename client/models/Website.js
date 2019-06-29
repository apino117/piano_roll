var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;


var websiteSchema = new Schema({

    // url, a string, must be entered
    url: {
      type: String,
      required: true,
      unique: { index: { unique: true } }
    },
    // date is just a string
    date: {
      type: Date,
      default: Date.now
    },
    saved: {
      type: Boolean,
      default: false
    }
  });

  // Create the Headline model using the headlineSchema
var Website = mongoose.model("Website", websiteSchema);

module.exports = Website;