import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchDrones } from "../features/drone/droneSlice";

const useFetchDrones = () => {
  const { drones, status, errorDrones } = useAppSelector(
    (state) => state.drone
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchDronesHadndler = async (): Promise<void> => {
      if (drones.length === 0) {
        await dispatch(fetchDrones());
      }
    };
    fetchDronesHadndler();
  }, [dispatch]);

  return {
    drones,
    status,
    errorDrones,
  };
};

export default useFetchDrones;
