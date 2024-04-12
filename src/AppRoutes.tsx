import { Route, Routes } from "react-router";

import Drones from "./pages/drones/Drones";
import AddDrone from "./pages/drones/AddDrone";
import Drone from "./pages/drones/Drone";
import PageNotFound from "./pages/notFound/NotFound";
import { RoutesEnum } from "./routes/routes";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={RoutesEnum.HOME} element={<Drones />} />
      <Route path={RoutesEnum.DRONE} element={<Drone />} />
      <Route path={RoutesEnum.ADD_DRONE} element={<AddDrone />} />
      <Route path={RoutesEnum.NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
