import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/trucktrackerapi.herokuapp.com";

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

    saveReview(review) {
        return axios.post(BASEURL + "/api/reviews", review)
    },
    viewReview(id) {
        return axios.get(BASEURL + `/api/reviews/${id}`)
    },
    
    viewAllReviews() {
        return axios.get(BASEURL + `/api/reviews`)
    },
    //Jennifer

    //Cyrus
    updateTruck: function (companyId, approved, applicationOpen){
        console.log("im in the utilities")
        console.log(BASEURL + `/api/open/${companyId}`)
        return axios.put(BASEURL + `/api/open/${companyId}`, {id: companyId, approved: approved, applicationOpen: applicationOpen})
    },
    getOpenApplications: function (){
        return axios.get(BASEURL + "/api/open")
    },
    getApprovedApplications: function (){
        return axios.get(BASEURL + "/api/approved")
    },
    getDeniedApplications: function (){
        return axios.get(BASEURL + "/api/denied")
    }

};