import { useDispatch } from "react-redux";
import useNavigateToDrone from "./useNavigateToDrone";
import { setSource } from "../features/drone/droneSlice";
import { DronesWithoutCamerasAndImage } from "../types/droneTypes";
import { SourceEnum } from "../types/SourceType";

const useDroneClickHandler = (): ((
  drone: DronesWithoutCamerasAndImage
) => void) => {
  const dispatch = useDispatch();
  const navigateToDronePage: (droneCode: string, source: string) => void =
    useNavigateToDrone();

  const handleDroneClick = (drone: DronesWithoutCamerasAndImage): void => {
    const routeQueryParam: SourceEnum.API | SourceEnum.State =
      drone.source === SourceEnum.API ? SourceEnum.API : SourceEnum.State;
    if (drone.source === SourceEnum.API) {
      dispatch(setSource(SourceEnum.API));
    } else {
      dispatch(setSource(SourceEnum.State));
    }
    navigateToDronePage(drone.drone_code, routeQueryParam);
  };

  return handleDroneClick;
};

export default useDroneClickHandler;
