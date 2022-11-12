import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const getUSMap = async () => await api.get("home");
export const getStateMap = async (state) => await api.get(`/home/map/${state}`);
export const getStateDemographics = async (state) => await api.get(`/home/${state}`);
export const getPlots = async (state) => await api.get(`/districtplan/plots/${state}`);

const apis = { getUSMap, getStateMap, getStateDemographics, getPlots };

export default apis;
