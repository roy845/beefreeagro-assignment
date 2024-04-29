import { DronesWithoutCamerasAndImage } from "../../types/droneTypes";
import DronesHeading from "./DronesHeading";
import DronesTable from "./dronesTable/DronesTable";

type DronesCompProps = {
  drones: DronesWithoutCamerasAndImage[];
};

const DronesComp = ({ drones }: DronesCompProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DronesHeading />
      <div className="max-w-4xl w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <DronesTable drones={drones} />
      </div>
    </div>
  );
};

export default DronesComp;
