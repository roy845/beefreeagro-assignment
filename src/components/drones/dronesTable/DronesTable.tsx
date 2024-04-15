import {
  DroneTableHeaders,
  NUM_OF_HEADERS,
} from "../../../constants/tableConstants";
import { DronesWithoutCamerasAndImage } from "../../../types/droneTypes";
import DroneRow from "./DroneRow";
import TableHeaders from "./TableHeaders";

type DronesTableProps = {
  drones: DronesWithoutCamerasAndImage[];
};

const DronesTable = ({ drones }: DronesTableProps): JSX.Element => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-white">
      <thead className="text-xs text-white border border-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <TableHeaders
          numOfHeaders={NUM_OF_HEADERS}
          labels={DroneTableHeaders}
        />
      </thead>
      <tbody>
        {drones.map((drone: DronesWithoutCamerasAndImage) => (
          <DroneRow key={drone.drone_code} drone={drone} />
        ))}
      </tbody>
    </table>
  );
};

export default DronesTable;
