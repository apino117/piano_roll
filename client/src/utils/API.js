import axios from "axios";

export default {

    storeUrl: (nameOfWebsite) => {
        console.log(`this is the store url function and name of website: ${nameOfWebsite}`);
        return axios.post("api/url", nameOfWebsite);
    },

    retrieveUrl: (idOfWebsite) => {
        console.log(`this is the id of the website function: ${idOfWebsite}`);
        console.log(idOfWebsite)
        return axios.get(`api/url/${idOfWebsite}`);
    },

    returnObject: (urlToFindObject) => {
        console.log(`this is the id of the website function: ${urlToFindObject}`);
        let dataObject = axios.get("api/url:id", urlToFindObject);
        console.log("this is the data object", dataObject);
        return dataObject;
    },


    // scrapeWebsite: (q) => {
    //     return axios.post("/api/fetch", { params: { q } })
    // },

    alert: (thingToSay) => {
        alert(thingToSay)
    },

    scrapeData: function (websiteData) {
        return axios.get(websiteData)
    },

    // scrapeData:(websiteData)
    // {axios.get(wb)}
    // return 

    saveWebsite: websiteData => {
        console.log("inside savewebsite " + websiteData);
        return axios.post("/api/fetch", websiteData)
    },


}