import axios from "axios";

export default {

    // scrapeWebsite: (q) => {
    //     return axios.post("/api/fetch", { params: { q } })
    // },

    alert: (thingToSay) => {
        alert(thingToSay)
    },

    scrapeData: function(websiteData) {
        return axios.get(websiteData)
    },

    // scrapeData:(websiteData)
    // {axios.get(wb)}
    // return 

    saveWebsite:  websiteData => {
        console.log("inside savewebsite " + websiteData);
        return axios.post("/api/fetch", websiteData)
    },


}