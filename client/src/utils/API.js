import axios from "axios";

export default {

scrapeWebsite: (websiteToScrape) => {
    return axios.get("/api/fetch")
}


}