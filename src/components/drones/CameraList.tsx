import { Camera } from "../../types/cameraType";
import DroneCamera from "./DroneCamera";

type CameraListProps = {
  cameras: Camera[];
};

const CameraList = ({ cameras }: CameraListProps) => {
  return (
    <div className="pt-4">
      <span className="font-bold">Cameras:</span>
      {cameras?.map((camera: Camera, index: number) => (
        <DroneCamera key={index} camera={camera} />
      ))}
    </div>
  );
};

export default CameraList;
