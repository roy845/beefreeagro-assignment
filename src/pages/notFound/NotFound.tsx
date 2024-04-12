import { MdErrorOutline } from "react-icons/md";
import BackButton from "../../components/buttons/BackButton";

const PageNotFound = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdErrorOutline className="text-6xl text-red-500" />
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <BackButton />
    </div>
  );
};

export default PageNotFound;
