import { useNavigate } from "react-router-dom";
import { Drone } from "../../types/droneTypes";
import { formatDate } from "../../utils/formatDate";

type DronesTable = {
  drones: Drone[];
};

const DronesTable = ({ drones }: DronesTable) => {
  const navigate = useNavigate();

  const navigateToDronePage = (droneCode: string) => {
    navigate(`/drone/${droneCode}`);
  };

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-white">
      <thead className="text-xs text-white border border-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            className="py-3 px-6 text-center border border-white bg-[#0d0c26] hover:bg-gray-300 hover:text-white cursor-pointer "
          >
            Drone Code
          </th>
          <th
            scope="col"
            className="py-3 px-6 text-center border border-white bg-[#0d0c26] hover:bg-gray-300 hover:text-white cursor-pointer "
          >
            Name
          </th>
          <th
            scope="col"
            className="py-3 px-6 text-center border border-white bg-[#0d0c26] hover:bg-gray-300 hover:text-white cursor-pointer"
          >
            Ramge
          </th>
          <th
            scope="col"
            className="py-3 px-6 text-center border border-white bg-[#0d0c26] hover:bg-gray-300 hover:text-white cursor-pointer"
          >
            Release Date
          </th>
        </tr>
      </thead>
      <tbody>
        {drones.map((drone: Drone) => (
          <tr
            key={drone.drone_code}
            className="bg-[#0d0c26] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 hover:text-white cursor-pointer"
          >
            <td className="py-4 px-6 text-center border text-white border-white ">
              {drone.drone_code}
            </td>
            <td
              onClick={() => navigateToDronePage(drone.drone_code)}
              className="py-4 px-6 text-center border text-white border-white "
            >
              {drone.name}
            </td>
            <td className="py-4 px-6 text-center border text-white border-white">
              {drone.range}
            </td>
            <td className="py-4 px-6 text-center border text-white border-white">
              {formatDate(drone.release_date)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DronesTable;
