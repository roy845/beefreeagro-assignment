import AddDroneForm from "../../components/drones/droneForm/AddDroneForm";
import Header from "../../components/header/Header";
import { DocumentTitleEnum } from "../../constants/documentTitleConstants";
import { HeaderEnum } from "../../constants/headerConstants";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const AddDrone = (): JSX.Element => {
  useDocumentTitle(DocumentTitleEnum.ADD_DRONE_PAGE);
  return (
    <div className="flex flex-col justify-center items-center">
      <Header title={HeaderEnum.ADD_DRONE} />
      <AddDroneForm />
    </div>
  );
};

export default AddDrone;
