import axios from "axios";
import { Drone } from "../../types/droneTypes";

export const fetchDronesHandler = async (): Promise<Drone[]> => {
  try {
    const response = await axios.get<Drone[]>(
      "https://interviews-api.beefreeagro.com/api/v1/drones"
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch drones");
  }
};

export const fetchDroneHandler = async (droneCode: string): Promise<Drone> => {
  try {
    const response = await axios.get<Drone>(
      `https://interviews-api.beefreeagro.com/api/v1/drones/${droneCode}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};
