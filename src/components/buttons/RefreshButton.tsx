import { ButtonEnum } from "../../constants/buttonConstants";
import useRefreshPage from "../../hooks/useRefreshPage";

const RefreshButton = (): JSX.Element => {
  const refresh: () => void = useRefreshPage();
  return (
    <div className="w-full px-6 py-4 text-center">
      <button
        onClick={refresh}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {ButtonEnum.REFRESH}
      </button>
    </div>
  );
};

export default RefreshButton;
