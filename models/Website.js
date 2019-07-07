var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var websiteSchema = new Schema({

    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
      // unique: { index: { unique: true } }
    },
    date: {
      type: Date,
      default: Date.now
    },
    scrapedData: {
      type: String
    },
    midi: {
      type: String
    }
    // saved: {
    //   type: Boolean,
    //   default: false
    // }
  });

  // Create the Headline model using the schema
const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;