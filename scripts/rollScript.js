const axios = require("axios");
const cheerio = require("cheerio");

const roll = website => {

    return axios.get(website).then(response => {

        const $ = cheerio.load(response.data);

        console.log("rolling");

        let rollData = [];

        $("article h2").each((i, element) => {

            let scrapedData = $(this).tagName();

            rollData.push(scrapedData);

            res.send("Roll Complete");

        });
        return rollData;
    });
};

module.exports = roll;