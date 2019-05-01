import axios from "axios";
const BASEURL = "";

export default {
  // Queries Google Books API
    searchBooks: function(query) {
        return axios.get(BASEURL + query );
    },
    getAllTrucks(){
        return axios.get(BASEURL + "/api/trucks")
    },
    saveTruck(truck){
        return axios.post("/api/trucks", truck)
    },
    getTruck: function (id){
        return axios.get(`/api/trucks/${id}`)
    },
    approveTruck: function (company){
        return axios.delete("/api/trucks/", {data: {name: company} })
    },
   
};