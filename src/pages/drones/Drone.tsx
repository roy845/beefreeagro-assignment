import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import DroneComp from "../../components/drones/DroneComp";
import useFetchDrone from "../../hooks/useFetchDrone";
import DroneNotFound from "./DroneNotFound";
import DronesError from "../../components/drones/DronesError";
import { StatusEnum } from "../../types/statusType";

type RouteParams = {
  droneCode: string;
};

const Drone = (): JSX.Element => {
  const { droneCode } = useParams<RouteParams>();

  const { drone, status, errorDrone } = useFetchDrone(droneCode as string);

  if (!drone) {
    return <DroneNotFound />;
  }

  if (status === StatusEnum.LOADING) {
    return <Spinner />;
  }

  if (errorDrone) {
    return <DronesError errorDrones={errorDrone} />;
  }

  return <DroneComp drone={drone} />;
};

export default Drone;
