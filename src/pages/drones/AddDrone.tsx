import AddDroneForm from "../../components/drones/droneForm/AddDroneForm";
import Header from "../../components/header/Header";
import { HeaderEnum } from "../../constants/headerConstants";

const AddDrone = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header title={HeaderEnum.ADD_DRONE} />
      <AddDroneForm />
    </div>
  );
};

export default AddDrone;
