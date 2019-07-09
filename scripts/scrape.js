const axios = require("axios");
const cheerio = require("cheerio");
// const tagName = this.tagName;

const scrape = function () {

    return axios.get("http://www.nytimes.com/").then(function (response) {

        const $ = cheerio.load(response.data);

        console.log("scraping");

        let websites = [];

        let dataToAdd = {
            title: $("title").text(),
            tags: []
        }

        // $("title").each(function (index, element) {
        //     // console.log(element);
        //     console.log($(this));
        //     let title = $(this)
        //         .text();

        //     let titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        //     dataToAdd.title.push(titleNeat);

        // });

        $('body').children().each(function(index, element) {

            let tags = (element.tagName);
            // console.log(element.tagName);
            dataToAdd.tags.push(tags);
        })

        // $("div").find("div").each(function (index, element) {

        //     let tags = $(element);
        //         // .children()
        //         // .tagName;

            

        // })

        // websites.push(dataToAdd);
        console.log(dataToAdd);

        // $("article h2").each(function (i, element) {


        //     let title = $(this)
        //         .children("a")
        //         .text();
        //     let url = $(this)
        //         .children("a")
        //         .attr("href");

        //     if (title && url) {
        //         const titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        //         let dataToAdd = {
        //             title: titleNeat,
        //             url: url
        //         }

        //         websites.push(dataToAdd);
        //     }
        // });
        return websites;
    });
}

module.exports = scrape;