import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import DroneComp from "../../components/drones/DroneComp";
import useFetchDrone from "../../hooks/useFetchDrone";

type RouteParams = {
  droneCode: string;
};

const Drone = () => {
  const { droneCode } = useParams<RouteParams>();

  const { drone, status, error } = useFetchDrone(droneCode as string);

  if (status === "loading") {
    return <Spinner />;
  }

  if (error) {
    return <DroneComp drone={drone} />;
  }

  return <DroneComp drone={drone} />;
};

export default Drone;
