import { DRONES_URL } from "../../features/drone/dronesUrls";
import { Drone } from "../../types/droneTypes";
import Header from "../header/Header";
import { NavigateFunction, useNavigate } from "react-router-dom";

type DroneCompProps = {
  drone: Drone;
};

const DroneComp = ({ drone }: DroneCompProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="flex flex-col max-w-2xl mx-auto overflow-hidden shadow-lg my-2 border border-white">
      <Header sm title={`Drone - ${drone.drone_code}`} />

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
              <p key={index} className="text-white">
                {camera.name} - {camera.megapixels} MP ({camera.type})
              </p>
            ))}
          </div>
        </div>

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
      </div>

      <div className="w-full px-6 py-4 text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DroneComp;
