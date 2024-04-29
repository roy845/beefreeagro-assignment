import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import DroneComp from "../../components/drones/DroneComp";
import useFetchDrone from "../../hooks/useFetchDrone";
import DroneNotFound from "./DroneNotFound";
import { StatusEnum } from "../../types/statusType";
import { ErrorEnum } from "../../constants/errorConstants";
import NetworkError from "../notFound/NetworkError";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { DocumentTitleEnum } from "../../constants/documentTitleConstants";

type RouteParams = {
  droneCode: string;
};

const Drone = (): JSX.Element => {
  const { droneCode } = useParams<RouteParams>();

  const { drone, status, errorDrone } = useFetchDrone(droneCode as string);

  if (errorDrone === ErrorEnum.NETWORK_ERROR) {
    useDocumentTitle(DocumentTitleEnum.NETWORK_ERROR);
  } else {
    useDocumentTitle(`Drone ${droneCode}`);
  }

  if (errorDrone === ErrorEnum.NETWORK_ERROR) {
    return <NetworkError />;
  }

  if (!drone || errorDrone) {
    return <DroneNotFound />;
  }

  if (status === StatusEnum.LOADING) {
    return <Spinner />;
  }

  return <DroneComp drone={drone} />;
};

export default Drone;
