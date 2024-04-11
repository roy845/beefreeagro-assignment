import { MdFileUpload } from "react-icons/md";

type AddDroneFormImageUploadProps = {
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileIconClick: () => void;
};

const AddDroneFormImageUpload = ({
  fileInputRef,
  onImageChange,
  onFileIconClick,
}: AddDroneFormImageUploadProps): JSX.Element => {
  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onImageChange}
        style={{ display: "none" }}
      />
      <MdFileUpload
        onClick={onFileIconClick}
        className="cursor-pointer text-indigo-600"
        size="1.5em"
      />
    </div>
  );
};

export default AddDroneFormImageUpload;
