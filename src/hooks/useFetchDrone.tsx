import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchDrone, fetchDroneFromState } from "../features/drone/droneSlice";
import { SourceEnum } from "../types/SourceType";

const useFetchDrone = (droneCode: string) => {
  const { drone, status, errorDrone, source } = useAppSelector(
    (state) => state.drone
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (source === SourceEnum.API) {
      dispatch(fetchDrone(droneCode as string));
    } else {
      dispatch(fetchDroneFromState(droneCode as string));
    }
  }, [dispatch, droneCode]);

  return {
    drone,
    status,
    errorDrone,
  };
};

export default useFetchDrone;
