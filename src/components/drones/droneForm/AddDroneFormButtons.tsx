import { ButtonEnum } from "../../../constants/buttonConstants";
import useGoBack from "../../../hooks/useGoBack";

const AddDroneFormButtons = (): JSX.Element => {
  const goBack: () => void = useGoBack();
  return (
    <div className="flex justify-center gap-4">
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {ButtonEnum.ADD_DRONE}
      </button>
      <button
        type="button"
        onClick={goBack}
        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {ButtonEnum.CANCEL}
      </button>
    </div>
  );
};

export default AddDroneFormButtons;
