import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDroneHandler, fetchDronesHandler } from "./droneAPI";
import { Drone, DroneState } from "../../types/droneTypes";

import {
  AddDroneAction,
  FetchDroneFromState,
  SetSourceAction,
} from "../../types/actions/droneActionTypes";
import { SourceEnum } from "../../types/SourceType";
import { StatusEnum } from "../../types/statusType";
import { ErrorEnum } from "../../constants/errorConstants";
import { StringEnum } from "../../constants/stringConstants";

const initialState: DroneState = {
  drones: [] as Drone[],
  drone: {} as Drone | undefined,
  status: StatusEnum.IDLE,
  source: SourceEnum.None,
  errorDrone: StringEnum.EMPTY_STRING,
  errorDrones: StringEnum.EMPTY_STRING,
};

export const fetchDrones = createAsyncThunk("drone/fetchDrones", async () => {
  return fetchDronesHandler();
});

export const fetchDrone = createAsyncThunk(
  "drone/fetchDrone",
  async (drone_code: string) => {
    return fetchDroneHandler(drone_code);
  }
);

export const droneSlice = createSlice({
  name: "drone",
  initialState,

  reducers: {
    addDrone: (state, action: AddDroneAction) => {
      const index: number = state.drones.findIndex(
        (drone) => drone.drone_code === action.payload.drone_code
      );
      if (index === -1) {
        state.drones.push(action.payload);
      } else {
        throw Error(ErrorEnum.DRONE_ALREADY_EXISTS);
      }
    },

    fetchDroneFromState: (state, action: FetchDroneFromState) => {
      state.drone = state.drones.filter(
        (drone) => drone.drone_code === action.payload
      )[0];
    },
    setSource: (state, action: SetSourceAction) => {
      state.source = action.payload;
    },
    setDroneUndefined: (state, _) => {
      state.drone = undefined;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchDrones.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(fetchDrones.fulfilled, (state, action) => {
        state.status = StatusEnum.IDLE;
        state.drones = action.payload.map((drone: Drone) => ({
          ...drone,
          source: SourceEnum.API,
        }));
      })
      .addCase(fetchDrones.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
        state.errorDrones = action.error.message || ErrorEnum.INTERNAL_ERROR;
      });

    builder
      .addCase(fetchDrone.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(fetchDrone.fulfilled, (state, action) => {
        state.status = StatusEnum.IDLE;
        state.drone = action.payload;
      })
      .addCase(fetchDrone.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
        state.errorDrone = action.error.message || ErrorEnum.INTERNAL_ERROR;
      });
  },
});

export const { addDrone, setSource, setDroneUndefined, fetchDroneFromState } =
  droneSlice.actions;

export default droneSlice.reducer;
