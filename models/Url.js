const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UrlSchema = new Schema({

  url: {
    type: String,
    required: true,
  },
    tags: {
    type: Array,
  },
  title: {
    type: String,
  }

});

// Create the Url model using the schema
const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;