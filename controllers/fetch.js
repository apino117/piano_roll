const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {

    scrapedWebsites: function (req, res) {

        return scrape()
            .then(function (websites) {
                return db.Website.create(websites);
            })
            .then(function () {
                res.json({
                    message: "scrape done"
                })
            })
            .catch(function (err) {
                res.json({
                    message: "this is an error " + err
                })
            })
    }
}