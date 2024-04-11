import AddDroneForm from "../../components/drones/droneForm/AddDroneForm";
import Header from "../../components/header/Header";

const AddDrone = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header title="Add new drone" />
      <AddDroneForm />
    </div>
  );
};

export default AddDrone;
