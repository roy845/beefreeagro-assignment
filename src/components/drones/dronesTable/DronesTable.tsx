import {
  DroneTableHeaders,
  NUM_OF_HEADERS,
} from "../../../constants/tableConstants";
import { DronesWithoutCamerasAndImage } from "../../../types/droneTypes";
import DataTable from "../../table/DataTable";
import DroneRow from "./DroneRow";

type DronesTableProps = {
  drones: DronesWithoutCamerasAndImage[];
};

const DronesTable = ({ drones }: DronesTableProps): JSX.Element => {
  return (
    <DataTable<DronesWithoutCamerasAndImage>
      items={drones}
      headers={DroneTableHeaders}
      numOfHeaders={NUM_OF_HEADERS}
      renderRow={(drone: DronesWithoutCamerasAndImage, _) => (
        <DroneRow key={drone.drone_code} drone={drone} />
      )}
    />
  );
};

export default DronesTable;
