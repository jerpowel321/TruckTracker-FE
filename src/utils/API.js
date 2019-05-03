import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/https://api-food-truck.herokuapp.com";

export default {
    // Queries Heroku App API
    //Jennifer
    saveTruck(truck) {
        return axios.post(BASEURL + "/api/trucks", truck)
    },
    getAllTrucks() {
        return axios.get(BASEURL + "/api/trucks")
    },
    getTruck: function (id) {
        return axios.get(BASEURL + `/api/trucks/${id}`)
    },
    approveTruck: function (company) {
        return axios.delete(BASEURL + "/api/trucks/", { data: { businessName: company } })
    },

    //Jennifer

    //Cyrus
    updateTruck: function (companyId, approved, applicationOpen){
        console.log("im in the utilities")
        return axios.put(BASEURL + `/api/trucks/${companyId}`, {id: companyId, approved: approved, applicationOpen: applicationOpen})
    }







    
    //Cyrus

};