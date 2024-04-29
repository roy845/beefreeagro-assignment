import { FiWifiOff } from "react-icons/fi";
import RefreshButton from "../../components/buttons/RefreshButton";
import { SpinnerEnum } from "../../constants/spinnerConstants";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { DocumentTitleEnum } from "../../constants/documentTitleConstants";

const NetworkError = (): JSX.Element => {
  useDocumentTitle(DocumentTitleEnum.NETWORK_ERROR);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <FiWifiOff size={SpinnerEnum.SIZE} className="text-red-500" />
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">
        Network Error
      </h1>
      <p className="text-gray-600 mb-4">
        Please check your internet connection and try again.
      </p>
      <RefreshButton />
    </div>
  );
};

export default NetworkError;
