import Header from "../header/Header";
import Tooltip from "../tooltip/tooltip";
import useCustomNavigate from "../../hooks/useCustomNavigate";
import { RoutesEnum } from "../../routes/routes";
import { HeaderEnum } from "../../constants/headerConstants";
import { ButtonEnum } from "../../constants/buttonConstants";

const DronesHeading = (): JSX.Element => {
  const customNavigate = useCustomNavigate(RoutesEnum.ADD_DRONE);

  return (
    <div className="flex">
      <Header title={HeaderEnum.DRONES_LIST} />
      <Tooltip content={HeaderEnum.ADD_DRONE}>
        <button onClick={customNavigate} className="text-3xl">
          {ButtonEnum.PLUS}
        </button>
      </Tooltip>
    </div>
  );
};

export default DronesHeading;
