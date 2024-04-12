import { SourceType } from "../SourceType";
import { Drone } from "../droneTypes";

export type AddDroneAction = {
  type: string;
  payload: Drone;
};

export type FetchDroneFromState = {
  type: string;
  payload: string;
};

export type SetSourceAction = {
  type: string;
  payload: SourceType;
};
