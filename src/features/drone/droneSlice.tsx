import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Drone, DroneState } from "../../types/droneTypes";
import { fetchDroneHandler, fetchDronesHandler } from "./droneAPI";
import {
  AddDroneAction,
  FetchDroneFromState,
} from "../../types/actions/droneActionTypes";

const initialState: DroneState = {
  drones: [] as Drone[],
  drone: {} as Drone,
  status: "idle",
  errorDrone: "",
  errorDrones: "",
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
      if (index == -1) {
        state.drones.push(action.payload);
      } else {
        throw Error("Drone Already exists");
      }
    },

    fetchDroneFromState: (state, action: FetchDroneFromState) => {
      state.drone = state.drones.filter(
        (drone) => drone.drone_code === action.payload
      )[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrones.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDrones.fulfilled, (state, action) => {
        state.status = "idle";
        state.drones = action.payload;
      })
      .addCase(fetchDrones.rejected, (state, action) => {
        state.status = "failed";
        state.errorDrones = action.error.message || "Something went wrong";
      });

    builder
      .addCase(fetchDrone.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDrone.fulfilled, (state, action) => {
        state.status = "idle";
        state.drone = action.payload;
      })
      .addCase(fetchDrone.rejected, (state, action) => {
        state.status = "failed";
        state.errorDrone = action.error.message || "Something went wrong";
      });
  },
});

export const { addDrone, fetchDroneFromState } = droneSlice.actions;

export default droneSlice.reducer;
