import { ButtonEnum } from "../../../constants/buttonConstants";

interface AddCameraButtonProps {
  onClick?: () => void;
}

const AddCameraButton = ({ onClick }: AddCameraButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={onClick}
    >
      {ButtonEnum.ADD_CAMERA}
    </button>
  );
};

export default AddCameraButton;
