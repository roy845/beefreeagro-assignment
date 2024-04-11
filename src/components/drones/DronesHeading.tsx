import Header from "../header/Header";
import Tooltip from "../tooltip/tooltip";
import useCustomNavigate from "../../hooks/useCustomNavigate";
import { ADD_DRONE } from "../../routes/routes";

const DronesHeading = (): JSX.Element => {
  const customNavigate = useCustomNavigate(ADD_DRONE);

  return (
    <div className="flex">
      <Header title="Drones List" />
      <Tooltip content="Add new drone">
        <button onClick={customNavigate} className="text-3xl">
          +
        </button>
      </Tooltip>
    </div>
  );
};

export default DronesHeading;
