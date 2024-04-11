import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchDrone, fetchDroneFromState } from "../features/drone/droneSlice";

const useFetchDrone = (droneCode: string) => {
  const { drone, status, error } = useAppSelector((state) => state.drone);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDroneFromState(droneCode as string));
    dispatch(fetchDrone(droneCode as string));
  }, [dispatch, droneCode]);

  return {
    drone,
    status,
    error,
  };
};

export default useFetchDrone;
