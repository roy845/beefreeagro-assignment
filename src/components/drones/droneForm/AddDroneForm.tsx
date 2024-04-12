import useAddDroneForm from "../../../hooks/useAddDroneForm";
import AddCameraButton from "./AddCameraButton";
import AddDroneFormButtons from "./AddDroneFormButtons";
import AddDroneFormErrors from "./AddDroneFormErrors";
import AddDroneFormImagePreview from "./AddDroneFormImagePreview";
import AddDroneFormImageUpload from "./AddDroneFormImageUpload";
import AddDroneFormInput from "./AddDroneFormInput";
import AddDroneFormLabel from "./AddDroneFormLabel";
import DynamicCameraFields from "./DynamicCameraFields";

const AddDroneForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    imagePreview,
    onImageChange,
    onFileIconClick,
    fileInputRef,
    onSubmit,
  } = useAddDroneForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <div>
        <AddDroneFormLabel label={"Drone Code"} />
        <AddDroneFormInput
          register={register}
          fieldName="drone_code"
          placeholder="Enter drone code"
          type="text"
        />

        {errors.drone_code && (
          <AddDroneFormErrors message={errors.drone_code.message} />
        )}
      </div>

      <div>
        <AddDroneFormLabel label={"Name"} />
        <AddDroneFormInput
          register={register}
          fieldName="name"
          placeholder="Enter drone name"
          type="text"
        />

        {errors.name && <AddDroneFormErrors message={errors.name.message} />}
      </div>

      <div>
        <AddDroneFormLabel label={"Range"} />
        <AddDroneFormInput
          register={register}
          fieldName="range"
          placeholder="Enter drone range"
          type="number"
        />

        {errors.range && <AddDroneFormErrors message={errors.range.message} />}
      </div>

      <div>
        <AddDroneFormLabel label={"Release Date"} />
        <AddDroneFormInput
          register={register}
          fieldName="release_date"
          placeholder="Enter drone range"
          type="date"
        />

        {errors.release_date && (
          <AddDroneFormErrors message={errors.release_date.message} />
        )}
      </div>

      <DynamicCameraFields
        fieldName="cameras"
        fields={fields}
        register={register}
        remove={remove}
        errors={errors}
      />

      <AddCameraButton
        onClick={() => append({ name: "", megapixels: 0, type: "Color" })}
      />

       {errors.cameras && (
        <AddDroneFormErrors message={errors.cameras.message} />
      )}

      <div className="flex gap-4">
        <AddDroneFormLabel label={"Upload Image"} />

        <AddDroneFormImageUpload
          fileInputRef={fileInputRef}
          onFileIconClick={onFileIconClick}
          onImageChange={onImageChange}
        />

        {errors.image && <AddDroneFormErrors message={errors.image.message} />}
        <AddDroneFormImagePreview imagePreview={imagePreview} />
      </div>

      <AddDroneFormButtons />
    </form>
  );
};

export default AddDroneForm;
