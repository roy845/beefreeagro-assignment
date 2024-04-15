import { useNavigate, NavigateFunction } from "react-router-dom";
import { SOURCE_PARAM } from "../types/SourceType";

const useNavigateToDrone = () => {
  const navigate: NavigateFunction = useNavigate();

  const navigateToDronePage = (droneCode: string, source: string): void => {
    navigate(`/drone/${droneCode}?${SOURCE_PARAM}=${source}`);
  };

  return navigateToDronePage;
};

export default useNavigateToDrone;
