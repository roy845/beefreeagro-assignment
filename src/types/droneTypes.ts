import { StatusType } from "./statusTypes";

export type Camera = {
  megapixels: number;
  name: string;
  type: string;
};

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
  error: string;
  errorDrones: string;
};
