import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import DroneComp from "../../components/drones/DroneComp";
import useFetchDrone from "../../hooks/useFetchDrone";
import DroneNotFound from "./DroneNotFound";

type RouteParams = {
  droneCode: string;
};

const Drone = (): JSX.Element => {
  const { droneCode } = useParams<RouteParams>();

  const { drone, status, errorDrone } = useFetchDrone(droneCode as string);

  if (!drone) {
    return <DroneNotFound />;
  }

  if (status === "loading") {
    return <Spinner />;
  }

  if (errorDrone) {
    return <DroneComp drone={drone} />;
  }

  return <DroneComp drone={drone} />;
};

export default Drone;
