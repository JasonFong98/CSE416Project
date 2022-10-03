import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/"
})

const apis = {
    getStateDistrictPlan
}

export const getStateDistrictPlan = (name) => api.get(`name=${name}`);



export default apis;