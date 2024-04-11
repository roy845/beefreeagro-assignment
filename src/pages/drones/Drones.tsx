import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchDrones } from "../../features/drone/droneSlice";
import Spinner from "../../components/spinner/Spinner";
import Header from "../../components/header/Header";
import Tooltip from "../../components/tooltip/tooltip";
import DronesTable from "../../components/drones/DronesTable";

const Drones = () => {
  const { drones, status, errorDrones } = useAppSelector(
    (state) => state.drone
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const naviagteToAddDrone = () => {
    navigate("/newDrone");
  };

  useEffect(() => {
    if (drones.length === 0) {
      dispatch(fetchDrones());
    }
  }, [dispatch]);

  if (status === "loading") {
    return <Spinner />;
  }

  if (errorDrones) {
    return <div className="text-center text-red-500">Error: {errorDrones}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex">
        <Header title="Drones List" />
        <Tooltip content="Add new drone">
          <button onClick={naviagteToAddDrone} className="text-3xl">
            +
          </button>
        </Tooltip>
      </div>

      <div className="max-w-4xl w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <DronesTable drones={drones} />
      </div>
    </div>
  );
};

export default Drones;
