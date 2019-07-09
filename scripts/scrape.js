const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function () {

    return axios.get("http://www.nytimes.com/").then(function (response) {

        const $ = cheerio.load(response.data);

        console.log("scraping");


        let websites = []; // create blank arrays to hold our final website and to hold the tag data we're gonna push

        let dataToAdd = {
            title: $("title").text(), // title we can set already cause it's always the same HTML
            tags: []
        }

        
        $('body').children().each(function (index, element) { // for every child of the main body

            let tags = (element.tagName); // grab the tagname

            dataToAdd.tags.push(tags); // push that to the tags section of the array

        });

        console.log(dataToAdd); // just the see what we're working with

        websites.push(dataToAdd); // push to the websites array 

        return websites;
    });
}

module.exports = scrape;