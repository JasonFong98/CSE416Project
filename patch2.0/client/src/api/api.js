import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const getUSMap = async () => await api.get("home");
export const getStateMap = async (state) => await api.get(`/map/${state}`);
export const getStateDemographics = async (state) => await api.get(`/home/demographics/${state}`);
export const getSMDSummary = async (state ) => await api.get(`/smd/summary/${state}`);
export const getMMDSummary = async (state ) => await api.get(`/mmd/summary/${state}`);
export const getSMDBarGraph = async (state) => await api.get(`/smd/barGraph/${state}`);
export const getSMDBoxAndWhiskers = async (state) => await api.get(`/smd/boxAndWhiskers/${state}`);
export const getMMDBoxAndWhiskers = async (state) => await api.get(`/mmd/boxAndWhiskers/${state}`);
export const getSMDDistrictPlans = async (state) => await api.get(`/smd/districtPlans/${state}`);
export const getEnsemble = async (state) => await api.get(`/ensemble/${state}`);
export const getMMDAveragePlan = async (state, type) => await api.get(`/mmd/average/map/${state}/${type}`);
export const getSMDExtremeDem = async (state) => await api.get(`/smd/extremeDem/map/${state}`);
export const getSMDExtremeRep = async (state) => await api.get(`/smd/extremeRep/map/${state}`);
export const getSMDLeastMajority = async (state) => await api.get(`/smd/leastM/map/${state}`);
export const getSMDMostMajority = async (state) => await api.get(`/smd/mostM/map/${state}`);
export const getSMDRandomPlan = async (state, value) => await api.get(`/smd/random/map/${state}/${value}`);
export const getMMDAverageData = async (state, type) => await api.get(`/mmd/average/${state}/${type}`);



const apis = { 
  getUSMap, 
  getStateMap, 
  getStateDemographics, 
  getSMDSummary, 
  getMMDSummary,
  getSMDBarGraph, 
  getSMDBoxAndWhiskers, 
  getMMDBoxAndWhiskers,
  getSMDDistrictPlans, 
  getEnsemble, 
  getMMDAveragePlan, 
  getSMDExtremeDem, 
  getSMDExtremeRep,
  getMMDAverageData,
};

export default apis;