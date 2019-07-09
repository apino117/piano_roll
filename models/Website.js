const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const websiteSchema = new Schema({

    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      // unique: { index: { unique: true } }
    },
    date: {
      type: Date,
      default: Date.now
    },
    tags: {
      type: String,
    }
    // saved: {
    //   type: Boolean,
    //   default: false
    // }
  });

  // Create the Headline model using the schema
const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;