const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {

    scrapedWebsites: function (req, res) {
        return scrape()
            .then(function (websites) {
                return db.Title.create(websites);
            })
            .then(function (dbTitle) {
                if (dbTitle.length === 0) {
                    res.json({
                        message: "no websites"
                    });
                } else {
                    res.json({
                        message: "added " + dbTitle.length + " websites!!!"
                    });
                }
            })
            .catch(function (err) {
                res.json({
                    message: "this is an error?"
                })
            })
    }
}