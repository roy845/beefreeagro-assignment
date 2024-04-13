import { useDispatch } from "react-redux";
import useNavigateToDrone from "./useNavigateToDrone";
import { setSource } from "../features/drone/droneSlice";
import { DronesWithoutCamerasAndImage } from "../types/droneTypes";
import { SourceEnum } from "../types/SourceType";

const useDroneClickHandler = () => {
  const dispatch = useDispatch();
  const navigateToDronePage = useNavigateToDrone();

  const handleDroneClick = (drone: DronesWithoutCamerasAndImage): void => {
    if (drone.source === SourceEnum.API) {
      dispatch(setSource(SourceEnum.API));
    } else {
      dispatch(setSource(SourceEnum.State));
    }
    navigateToDronePage(drone.drone_code);
  };

  return handleDroneClick;
};

export default useDroneClickHandler;