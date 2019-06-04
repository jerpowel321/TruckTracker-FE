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
    saveOwnerImages(images) {
        return axios.post(BASEURL + "/api/owner", images)
    },
    viewReview(id) {
        return axios.get(BASEURL + `/api/reviews/${id}`)
    },
    
    viewAllReviews() {
        return axios.get(BASEURL + `/api/reviews`)
    },
    //Jennifer

    //Cyrus
    updateTruck: function (businessId, approved, applicationOpen){
        console.log("im in the utilities")
        console.log(BASEURL + `/api/open/${businessId}`)
        console.log( approved);
        console.log(applicationOpen);
        console.log(businessId)
        return axios.put(BASEURL + `/api/open/${businessId}`, {id: businessId, approved: approved, applicationOpen: applicationOpen})
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