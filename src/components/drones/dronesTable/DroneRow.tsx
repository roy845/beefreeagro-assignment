import useDroneClickHandler from "../../../hooks/useDroneClickHandler";
import { DronesWithoutCamerasAndImage } from "../../../types/droneTypes";
import { formatDate } from "../../../utils/formatDate";
import TableData from "./TableData";

type DroneRowProps = {
  drone: DronesWithoutCamerasAndImage;
};

const DroneRow = ({ drone }: DroneRowProps): JSX.Element => {
  const handleDroneClick: (drone: DronesWithoutCamerasAndImage) => void =
    useDroneClickHandler();

  return (
    <tr
      onClick={() => handleDroneClick(drone)}
      className="bg-[#0d0c26] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 hover:text-white cursor-pointer"
    >
      <TableData label={drone.drone_code} />
      <TableData label={drone.name} />
      <TableData label={drone.range} />
      <TableData label={formatDate(drone.release_date)} />
    </tr>
  );
};

export default DroneRow;
