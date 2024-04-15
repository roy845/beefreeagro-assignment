import { useRoutes } from "react-router-dom";
import AddDrone from "../pages/drones/AddDrone";
import Drone from "../pages/drones/Drone";
import Drones from "../pages/drones/Drones";
import PageNotFound from "../pages/notFound/NotFound";
import { RoutesEnum } from "../routes/routes";
import { RoutesType } from "../types/routesType";

const useAppRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes: RoutesType[] = [
    { path: RoutesEnum.HOME, element: <Drones /> },
    { path: RoutesEnum.DRONE, element: <Drone /> },
    { path: RoutesEnum.ADD_DRONE, element: <AddDrone /> },
    { path: RoutesEnum.NOT_FOUND, element: <PageNotFound /> },
  ];

  return useRoutes(routes);
};

export default useAppRoutes;
