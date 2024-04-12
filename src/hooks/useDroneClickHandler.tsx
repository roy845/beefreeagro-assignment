import { useDispatch } from "react-redux";
import useNavigateToDrone from "./useNavigateToDrone";
import { setSource } from "../features/drone/droneSlice";
import { DronesWithoutCamerasAndImage } from "../types/droneTypes";

const useDroneClickHandler = () => {
  const dispatch = useDispatch();
  const navigateToDronePage = useNavigateToDrone();

  const handleDroneClick = (drone: DronesWithoutCamerasAndImage): void => {
    if (drone.source === "api") {
      dispatch(setSource("api"));
    } else {
      dispatch(setSource("state"));
    }
    navigateToDronePage(drone.drone_code);
  };

  return handleDroneClick;
};

export default useDroneClickHandler;
