import { MdErrorOutline } from "react-icons/md";
import BackButton from "../../components/buttons/BackButton";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { DocumentTitleEnum } from "../../constants/documentTitleConstants";

const DroneNotFound = (): JSX.Element => {
  useDocumentTitle(DocumentTitleEnum.DRONE_NOT_FOUND);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdErrorOutline className="text-6xl text-red-500" />
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">
        Drone Not Found
      </h1>
      <p className="text-gray-600 mb-4">
        We couldn't find the drone you were looking for.
      </p>
      <BackButton />
    </div>
  );
};

export default DroneNotFound;
