import axios from "axios";

export default {

scrapeWebsite: (q) => {
    return axios.get("/api/fetch", {params: {q}})
},

alert: (thingToSay) => {
    alert(thingToSay)
}


}