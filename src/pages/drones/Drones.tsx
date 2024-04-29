import Spinner from "../../components/spinner/Spinner";
import useFetchDrones from "../../hooks/useFetchDrones";
import DronesError from "../../components/drones/DronesError";
import { StatusEnum } from "../../types/statusType";
import { ErrorEnum } from "../../constants/errorConstants";
import NetworkError from "../notFound/NetworkError";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { DocumentTitleEnum } from "../../constants/documentTitleConstants";
import DronesComp from "../../components/drones/DronesComp";

const Drones = (): JSX.Element => {
  const { drones, errorDrones, status } = useFetchDrones();

  if (errorDrones === ErrorEnum.NETWORK_ERROR) {
    useDocumentTitle(DocumentTitleEnum.NETWORK_ERROR);
  } else {
    useDocumentTitle(DocumentTitleEnum.DRONES_PAGE);
  }

  if (errorDrones === ErrorEnum.NETWORK_ERROR) {
    return <NetworkError />;
  }

  if (status === StatusEnum.LOADING) {
    return <Spinner />;
  }

  if (errorDrones) {
    return <DronesError errorDrones={errorDrones} />;
  }

  return <DronesComp drones={drones} />;
};

export default Drones;
