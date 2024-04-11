import { Drone } from "../droneTypes";

export type AddDroneAction = {
  type: string;
  payload: Drone;
};

export type FetchDroneFromState = {
  type: string;
  payload: string;
};
