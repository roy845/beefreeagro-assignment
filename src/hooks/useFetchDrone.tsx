import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchDrone,
  fetchDroneFromState,
  setDroneUndefined,
} from "../features/drone/droneSlice";
import { SOURCE_PARAM, SourceEnum } from "../types/SourceType";
import { useSearchParams } from "react-router-dom";

const useFetchDrone = (droneCode: string) => {
  const { drone, status, errorDrone, source } = useAppSelector(
    (state) => state.drone
  );

  let [searchParams, _] = useSearchParams();
  const routeParamValue = searchParams.get(SOURCE_PARAM);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (source === SourceEnum.API || routeParamValue === SourceEnum.API) {
      dispatch(fetchDrone(droneCode as string));
    } else if (
      source === SourceEnum.State ||
      routeParamValue === SourceEnum.State
    ) {
      dispatch(fetchDroneFromState(droneCode as string));
    } else {
      dispatch(setDroneUndefined(undefined));
    }
  }, [dispatch, droneCode]);

  return {
    drone,
    status,
    errorDrone,
  };
};

export default useFetchDrone;
