import { Camera } from "../../types/cameraType";

type DroneCameraProps = {
  camera: Camera;
};

const DroneCamera = ({ camera }: DroneCameraProps): JSX.Element => {
  return (
    <p className="text-white">
      {camera.name} - {camera.megapixels} MP ({camera.type})
    </p>
  );
};

export default DroneCamera;
