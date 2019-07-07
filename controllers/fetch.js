const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {

    scrapedWebsites: function (req, res) {

        return scrape()
            .then(function (websites) {
                return db.Website.create(websites);
            })
            .then(function (dbWebsite) {
                if (dbWebsite.length === 0) {
                    res.json({
                        message: "no websites"
                    });
                } else {
                    res.json({
                        message: "added " + dbWebsite.length + " websites!!!"
                    });
                }
            })
            .catch(function (err) {
                res.json({
                    message: "this is an error " + err
                })
            })
    }
}