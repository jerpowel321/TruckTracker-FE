import axios from "axios";
const BASEURL = "";

export default {
    // Queries Heroku App API
    //Jennifer
    saveTruck(truck) {
        return axios.post("https://cors-anywhere.herokuapp.com/https://api-food-truck.herokuapp.com/api/trucks", truck)
    },
    getAllTrucks() {
        return axios.get(BASEURL + "/api/trucks")
    },
    getTruck: function (id) {
        return axios.get(`/api/trucks/${id}`)
    },
    approveTruck: function (company) {
        return axios.delete("/api/trucks/", { data: { businessName: company } })
    },

    //Jennifer
    //Cyrus
    getAllTrucksOpenApplication() {
        return axios.get(BASEURL + "/api/trucks")
    },
    getAllTrucksApproved() {
        return axios.get(BASEURL + "/api/trucks")
    },
    getAllTrucksDenied() {
        return axios.get(BASEURL + "/api/trucks")
    },

    //Cyrus

};