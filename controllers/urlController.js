const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {
    findAll: function (req, res) {
        db.Url
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findById: function (req, res) {
    //     db.Url
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // findByUrl: function (req, res) {
    //     db.Url
    //         .findOne({ "url": req.params.url })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findByTitle: function (req, res) {
        db.Url
            .findOne({ "title": req.params.title })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {

        console.log("this is the req.body: ", req.body)

        const url = req.body.url;

        axios.get(url).then(function (response) {

            const $ = cheerio.load(response.data);

            let dataToAdd = {
                title: $("title").text(), // title we can set already cause it's always the same HTML
                tags: [],
            }

            $("body").children().each(function (index, element) { // for every child of the main body

                let tags = (element.tagName); // grab the tagname

                for (let i = 0; i < tags.length; i++) {
                    //    console.log(tags[i]);
                    dataToAdd.tags.push(tags[i].charCodeAt(0)); // push that to the tags section of the array
                }

            });

            // console.log(dataToAdd); // just the see what we're working with

            // console.log(req.body);

            // websites.push(dataToAdd); // push to the websites array 

            db.Url
                .create({
                    url: url,
                    tags: dataToAdd.tags,
                    title: dataToAdd.title
                })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        });

    },
}