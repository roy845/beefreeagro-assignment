type AddDroneFormImagePreviewProps = {
  imagePreview: string | null;
};

const AddDroneFormImagePreview = ({
  imagePreview,
}: AddDroneFormImagePreviewProps): JSX.Element => {
  return (
    <>
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Drone Preview"
          className="w-40 h-40 object-cover"
        />
      ) : null}
    </>
  );
};

export default AddDroneFormImagePreview;
