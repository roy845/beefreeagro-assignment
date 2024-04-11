import { useNavigate } from "react-router-dom";

const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = (): void => {
    navigate(-1);
  };

  return goBack;
};

export default useGoBack;
