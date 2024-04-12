import axiosInstance from "../../api/api";
import { ErrorEnum } from "../../constants/errorConstants";
import { StringEnum } from "../../constants/stringConstants";
import { Drone } from "../../types/droneTypes";

export const fetchDronesHandler = async (): Promise<Drone[]> => {
  try {
    const response = await axiosInstance.get<Drone[]>(StringEnum.EMPTY_STRING);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || ErrorEnum.DRONES_ERROR);
  }
};

export const fetchDroneHandler = async (droneCode: string): Promise<Drone> => {
  try {
    const response = await axiosInstance.get<Drone>(`${droneCode}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || ErrorEnum.DRONE_ERROR);
  }
};
