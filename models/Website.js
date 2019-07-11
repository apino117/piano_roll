const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const websiteSchema = new Schema({

    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    }

  });

  // Create the website model using the schema
const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;