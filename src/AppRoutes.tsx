import { ReactElement } from "react";
import useAppRoutes from "./hooks/useAppRoutes";

const AppRoutes = (): ReactElement | null => {
  const routingElement: ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null = useAppRoutes();
  return routingElement;
};

export default AppRoutes;
