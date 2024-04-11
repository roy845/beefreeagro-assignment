import Spinner from "../../components/spinner/Spinner";
import DronesTable from "../../components/drones/dronesTable/DronesTable";
import useFetchDrones from "../../hooks/useFetchDrones";
import DronesHeading from "../../components/drones/DronesHeading";
import DronesError from "../../components/drones/DronesError";

const Drones = (): JSX.Element => {
  const { drones, errorDrones, status } = useFetchDrones();

  if (status === "loading") {
    return <Spinner />;
  }

  if (errorDrones) {
    return <DronesError errorDrones={errorDrones} />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <DronesHeading />
      <div className="max-w-4xl w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <DronesTable drones={drones} />
      </div>
    </div>
  );
};

export default Drones;
