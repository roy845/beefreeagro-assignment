import { useNavigate, NavigateFunction } from "react-router-dom";

const useNavigateToDrone = () => {
  const navigate: NavigateFunction = useNavigate();

  const navigateToDronePage = (droneCode: string) => {
    navigate(`/drone/${droneCode}`);
  };

  return navigateToDronePage;
};

export default useNavigateToDrone;
