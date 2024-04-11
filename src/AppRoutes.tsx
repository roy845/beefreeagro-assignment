import { Route, Routes } from "react-router";

import Drones from "./pages/drones/Drones";
import AddDrone from "./pages/drones/AddDrone";
import Drone from "./pages/drones/Drone";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Drones />} />
      <Route path={"/drone/:droneCode"} element={<Drone />} />
      <Route path={"/newDrone"} element={<AddDrone />} />
    </Routes>
  );
};

export default AppRoutes;
