import { MdErrorOutline } from "react-icons/md";
import { NavigateFunction, useNavigate } from "react-router-dom";

const DroneNotFound = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const navigateBack = (): void => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdErrorOutline className="text-6xl text-red-500" />
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">
        Drone Not Found
      </h1>
      <p className="text-gray-600 mb-4">
        We couldn't find the drone you were looking for.
      </p>
      <button
        onClick={navigateBack}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
};

export default DroneNotFound;
