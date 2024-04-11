import { useNavigate } from "react-router-dom";

const useCustomNavigate = (route: string) => {
  const navigate = useNavigate();

  const customNavigate = (): void => {
    navigate(route);
  };

  return customNavigate;
};

export default useCustomNavigate;
