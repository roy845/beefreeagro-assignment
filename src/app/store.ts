import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import droneReducer from "../features/drone/droneSlice";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistDronesConfig = {
  key: "drones",
  storage,
  whitelist: ["drones"],
  blacklist: ["_persist"],
};

const persistedDronesReducer = persistReducer(
  persistDronesConfig,
  droneReducer
);

export const store = configureStore({
  reducer: {
    drone: persistedDronesReducer,
  },
});

export const persistor: Persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
