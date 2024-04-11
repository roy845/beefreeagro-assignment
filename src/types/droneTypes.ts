import { Camera } from "./cameraType";
import { StatusType } from "./statusType";

export type Drone = {
  drone_code: string;
  name: string;
  range: number;
  image?: string;
  release_date: string;
  cameras: Camera[];
};

export type DroneState = {
  drones: Drone[];
  drone: Drone;
  status: StatusType;
  errorDrone: string;
  errorDrones: string;
};
