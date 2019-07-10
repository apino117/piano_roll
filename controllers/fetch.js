const db = require("../models");
const scrape = require("../scripts/scrape");

let useThisUrl = "http://reductress.com/"

module.exports = {

    scrapedWebsites: function (req, res) {

        return scrape(useThisUrl)
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