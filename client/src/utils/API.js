import axios from "axios";

export default {

    storeUrl: (nameOfWebsite) => {
        console.log(`this is the store url function and name of website: ${nameOfWebsite}`);
        return axios.post("api/url", nameOfWebsite);
    },

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