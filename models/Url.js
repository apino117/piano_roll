const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UrlSchema = new Schema({

    url: {
      type: String,
      required: true,
    }

  });

  // Create the Url model using the schema
const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;