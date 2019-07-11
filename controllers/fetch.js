const db = require("../models");
const scrape = require("../scripts/scrape");

let useThisUrl = "http://reductress.com/"

module.exports = {

    scrapedWebsites: function (req, res) {

        console.log("this is the scrapedWebsites jaunt");
        console.log(req.params);
        // const {query: params} = useThisUrl;

        return scrape(useThisUrl)
            .then(function (websites) {
                console.log("websites " + websites)
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
    },
    create: function (req, res) {

        //expected data should look like {  url: "sgafafa", name:"fasfafa"}
        console.log("inside fetch controller passed data:")
        console.log(req.body);
       db.Website   
       .create(req.body)     
       .then(dbModel => res.json(dbModel))     
       .catch(err => res.status(422).json(err));  }, }
