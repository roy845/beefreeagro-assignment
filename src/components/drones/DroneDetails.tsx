import { Drone } from "../../types/droneTypes";
import DroneCamera from "./DroneCamera";
import DroneImage from "./DroneImage";

type DroneDetailsProps = {
  drone: Drone;
};

const DroneDetails = ({ drone }: DroneDetailsProps): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {drone.name} ({drone.drone_code})
        </div>
        <p className="text-white text-base">
          Range: {drone.range} km
          <br />
          Release Date: {new Date(drone.release_date).toLocaleDateString()}
        </p>
        <div className="pt-4">
          <span className="font-bold">Cameras:</span>
          {drone?.cameras?.map((camera, index) => (
            <DroneCamera key={index} camera={camera} />
          ))}
        </div>
      </div>

      <DroneImage drone={drone} />
    </div>
  );
};

export default DroneDetails;
