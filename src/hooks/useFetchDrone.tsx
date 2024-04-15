import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchDrone,
  fetchDroneFromState,
  setDroneUndefined,
} from "../features/drone/droneSlice";
import { SOURCE_PARAM, SourceEnum } from "../types/SourceType";
import { useSearchParams } from "react-router-dom";
import { Drone } from "../types/droneTypes";
import { StatusType } from "../types/statusType";

type UseFetchDroneReturnType = {
  drone: Drone | undefined;
  status: StatusType;
  errorDrone: string;
};

const useFetchDrone: (droneCode: string) => UseFetchDroneReturnType = (
  droneCode: string
): UseFetchDroneReturnType => {
  const { drone, status, errorDrone, source } = useAppSelector(
    (state) => state.drone
  );

  let [searchParams, _] = useSearchParams();
  const routeQueryParamValue: string | null = searchParams.get(SOURCE_PARAM);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchDroneHandler = async (): Promise<void> => {
      if (
        source === SourceEnum.API ||
        routeQueryParamValue === SourceEnum.API
      ) {
        await dispatch(fetchDrone(droneCode as string));
      } else if (
        source === SourceEnum.State ||
        routeQueryParamValue === SourceEnum.State
      ) {
        dispatch(fetchDroneFromState(droneCode as string));
      } else {
        dispatch(setDroneUndefined(undefined));
      }
    };

    fetchDroneHandler();
  }, [dispatch, droneCode]);

  return {
    drone,
    status,
    errorDrone,
  };
};

export default useFetchDrone;
