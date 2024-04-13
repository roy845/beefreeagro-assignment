import { useRoutes } from "react-router-dom";
import AddDrone from "../pages/drones/AddDrone";
import Drone from "../pages/drones/Drone";
import Drones from "../pages/drones/Drones";
import PageNotFound from "../pages/notFound/NotFound";
import { RoutesEnum } from "../routes/routes";

const useAppRoutes = () => {
  const routes = [
    { path: RoutesEnum.HOME, element: <Drones /> },
    { path: RoutesEnum.DRONE, element: <Drone /> },
    { path: RoutesEnum.ADD_DRONE, element: <AddDrone /> },
    { path: RoutesEnum.NOT_FOUND, element: <PageNotFound /> },
  ];

  return useRoutes(routes);
};

export default useAppRoutes;
