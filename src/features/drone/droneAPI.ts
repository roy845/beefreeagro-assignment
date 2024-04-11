import axiosInstance from "../../api/api";
import { Drone } from "../../types/droneTypes";

export const fetchDronesHandler = async (): Promise<Drone[]> => {
  try {
    const response = await axiosInstance.get<Drone[]>("");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch drones");
  }
};

export const fetchDroneHandler = async (droneCode: string): Promise<Drone> => {
  try {
    const response = await axiosInstance.get<Drone>(`${droneCode}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch drone");
  }
};
