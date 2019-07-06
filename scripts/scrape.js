const axios = require("axios");
const cheerios = require("cheerio");

const scrape = function () {

    return axios.get("http://www.echojs.com/").then(function (response) {

        const $ = cheerio.load(response.data);

        console.log("scraping");

        let websites = [];

        $("article h2").each(function (i, element) {

            let title = $(this)
                .children("a")
                .text();
            let url = $(this)
                .children("a")
                .attr("href");

            if (title && url) {
                const titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                let dataToAdd = {
                    title: titleNeat,
                    url: url
                }
            }

            websites.push(dataToAdd);
            // Send a message to the client
            res.send("Scrape Complete");
        });
        return websites;


    });

}