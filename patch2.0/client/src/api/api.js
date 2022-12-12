import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const getUSMap = async () => await api.get("home");
export const getStateMap = async (state) => await api.get(`/map/${state}`);
export const getStateDemographics = async (state) => await api.get(`/home/${state}`);
export const getSMDSummary = async (state ) => await api.get(`/smd/summary/${state}`);
export const getSMDBarGraph = async (state) => await api.get(`/smd/barGraph/${state}`);
export const getSMDBoxAndWhiskers = async (state) => await api.get(`/smd/boxAndWhiskers/${state}`);
export const getMMDBoxAndWhiskers = async (state) => await api.get(`/mmd/boxAndWhiskers/${state}`);
export const getSMDDistrictPlans = async (state) => await api.get(`/smd/districtPlans/${state}`);
export const getEnsemble = async (state) => await api.get(`/ensemble/${state}`);


const apis = { 
  getUSMap, 
  getStateMap, 
  getStateDemographics, 
  getSMDSummary, 
  getSMDBarGraph, 
  getSMDBoxAndWhiskers, 
  getMMDBoxAndWhiskers,
  getSMDDistrictPlans, getEnsemble};

export default apis;