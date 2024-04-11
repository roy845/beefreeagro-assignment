import { Drone } from "../../types/droneTypes";
import { DRONES_URL } from "../../features/drone/dronesUrls";

type DroneImageProps = {
  drone: Drone;
};

const DroneImage = ({ drone }: DroneImageProps): JSX.Element => {
  return (
    <div className="flex-1">
      {drone.image ? (
        <img
          src={drone.image}
          alt={`${drone.name}`}
          className="object-cover h-full w-full"
        />
      ) : (
        <img
          src={`${DRONES_URL}${drone.drone_code}/image`}
          alt={`${drone.name}`}
          className="object-cover h-full w-full"
        />
      )}
    </div>
  );
};

export default DroneImage;
