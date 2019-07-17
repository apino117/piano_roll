const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UrlSchema = new Schema({

  url: {
    type: String,
    required: true,
    unique: true,
  },
  tags: {
    type: Array,
  },
  title: {
    type: String,
    unique: true,
  }

});

// Create the Url model using the schema
const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;