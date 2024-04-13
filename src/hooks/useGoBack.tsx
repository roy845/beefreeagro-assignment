import { NavigateFunction, useNavigate } from "react-router-dom";

const useGoBack = () => {
  const navigate: NavigateFunction = useNavigate();

  const goBack = (): void => {
    navigate(-1);
  };

  return goBack;
};

export default useGoBack;
