import { Route, Routes } from "react-router";

import Drones from "./pages/drones/Drones";
import AddDrone from "./pages/drones/AddDrone";
import Drone from "./pages/drones/Drone";
import PageNotFound from "./pages/notFound/NotFound";
import { ADD_DRONE, DRONE, HOME, NOT_FOUND } from "./routes/routes";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={HOME} element={<Drones />} />
      <Route path={DRONE} element={<Drone />} />
      <Route path={ADD_DRONE} element={<AddDrone />} />
      <Route path={NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
