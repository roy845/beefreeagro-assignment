import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import {
  fetchDrone,
  fetchDroneFromState,
} from "../../features/drone/droneSlice";
import Spinner from "../../components/spinner/Spinner";
import DroneComp from "../../components/drones/DroneComp";

type RouteParams = {
  droneCode: string;
};

const Drone = () => {
  const { droneCode } = useParams<RouteParams>();

  const { drone, status, error } = useAppSelector((state) => state.drone);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDroneFromState(droneCode as string));
    dispatch(fetchDrone(droneCode as string));
  }, [dispatch, droneCode]);

  if (status === "loading") {
    return <Spinner />;
  }

  if (error) {
    return <DroneComp drone={drone} />;
  }

  return <DroneComp drone={drone} />;
};

export default Drone;
