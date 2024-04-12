import { DronesWithoutCamerasAndImage } from "../../../types/droneTypes";
import { formatDate } from "../../../utils/formatDate";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import useDroneClickHandler from "../../../hooks/useDroneClickHandler";
import { TableEnum } from "../../../constants/tableConstants";

type DronesTableProps = {
  drones: DronesWithoutCamerasAndImage[];
};

const DronesTable = ({ drones }: DronesTableProps): JSX.Element => {
  const handleDroneClick = useDroneClickHandler();

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-white">
      <thead className="text-xs text-white border border-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <TableHeader label={TableEnum.DRONE_CODE} />
          <TableHeader label={TableEnum.NAME} />
          <TableHeader label={TableEnum.RANGE} />
          <TableHeader label={TableEnum.RELEASE_DATE} />
        </tr>
      </thead>
      <tbody>
        {drones.map((drone: DronesWithoutCamerasAndImage) => (
          <tr
            key={drone.drone_code}
            onClick={() => handleDroneClick(drone)}
            className="bg-[#0d0c26] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 hover:text-white cursor-pointer"
          >
            <TableData label={drone.drone_code} />
            <TableData label={drone.name} />
            <TableData label={drone.range} />
            <TableData label={formatDate(drone.release_date)} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DronesTable;
