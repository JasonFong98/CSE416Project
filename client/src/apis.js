import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/"
})


export const getStateDistrictPlan = (name) => api.get(`${name}`);


const apis = {
    getStateDistrictPlan
}



export default apis;