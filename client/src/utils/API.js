import axios from "axios";

export default {

getWebsites: () => {
    return axios.get("/api/website")
}


}