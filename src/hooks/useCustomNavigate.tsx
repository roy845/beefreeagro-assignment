import { NavigateFunction, useNavigate } from "react-router-dom";

const useCustomNavigate = (route: string): (() => void) => {
  const navigate: NavigateFunction = useNavigate();

  const customNavigate = (): void => {
    navigate(route);
  };

  return customNavigate;
};

export default useCustomNavigate;
