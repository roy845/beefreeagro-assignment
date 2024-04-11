import { Drone } from "../../types/droneTypes";
import BackButton from "../buttons/BackButton";
import Header from "../header/Header";
import DroneDetails from "./DroneDetails";

type DroneCompProps = {
  drone: Drone;
};

const DroneComp = ({ drone }: DroneCompProps): JSX.Element => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto overflow-hidden shadow-lg my-2 border border-white">
      <Header sm title={`Drone - ${drone.drone_code}`} />
      <DroneDetails drone={drone} />
      <BackButton />
    </div>
  );
};

export default DroneComp;
