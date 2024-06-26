import { SourceType } from "./SourceType";
import { Camera } from "./cameraType";
import { StatusType } from "./statusType";

export type Drone = {
  drone_code: string;
  name: string;
  range: number;
  image?: string;
  release_date: string;
  cameras: Camera[];
  source: SourceType;
};

type CameraAndImage = "cameras" | "image";

export type DronesWithoutCamerasAndImage = Omit<Drone, CameraAndImage>;

export type DroneState = {
  drones: Drone[];
  drone: Drone | undefined;
  status: StatusType;
  errorDrone: string;
  errorDrones: string;
  source: SourceType;
};
