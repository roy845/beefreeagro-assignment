import { ReactElement } from "react";
import useAppRoutes from "./hooks/useAppRoutes";

const AppRoutes = (): ReactElement | null => {
  const routingElement = useAppRoutes();
  return routingElement;
};

export default AppRoutes;
