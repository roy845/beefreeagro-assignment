import axios, { AxiosInstance } from "axios";
import { DRONES_URL } from "../features/drone/dronesUrls";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: DRONES_URL,
});

export default axiosInstance;
