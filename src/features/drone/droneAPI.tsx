import axios from "axios";
import { Drone } from "../../types/droneTypes";
import { DRONES_URL } from "./dronesUrls";

export const fetchDronesHandler = async (): Promise<Drone[]> => {
  try {
    const response = await axios.get<Drone[]>(DRONES_URL);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch drones");
  }
};

export const fetchDroneHandler = async (droneCode: string): Promise<Drone> => {
  try {
    const response = await axios.get<Drone>(`${DRONES_URL}${droneCode}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};
