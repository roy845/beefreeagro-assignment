import { MdErrorOutline } from "react-icons/md";
import { NavigateFunction, useNavigate } from "react-router-dom";

const PageNotFound = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const navigateBack = (): void => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdErrorOutline className="text-6xl text-red-500" />{" "}
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-4">
        Sorry, the page you are looking for does not exist.
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

export default PageNotFound;
