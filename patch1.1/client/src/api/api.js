import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const getUSMap = async () => await api.get("home");
export const getStateMap = async (state) => await api.get(`/home/map/${state}`);
export const getStateDemographics = async (state) => await api.get(`/home/${state}`);
export const getBoxWhisker = async (state) => await api.get(`/districtplan/boxwhisker/${state}`);
export const getBarGraph = async (state) => await api.get(`districtplan/bargraph/${state}`);

const apis = { getUSMap, getStateMap, getStateDemographics, getBoxWhisker, getBarGraph };

export default apis;
