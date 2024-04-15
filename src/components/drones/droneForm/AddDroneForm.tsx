import { InputPlaceholderEnum } from "../../../constants/inputConstants";
import { InputLabelEnum } from "../../../constants/labelConstants";
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
    handleUpperCase,
  } = useAddDroneForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <div>
        <AddDroneFormLabel label={InputLabelEnum.DRONE_CODE} />
        <AddDroneFormInput
          register={register}
          fieldName="drone_code"
          placeholder={InputPlaceholderEnum.DRONE_CODE}
          type="text"
          onChange={handleUpperCase}
        />

        {errors.drone_code && (
          <AddDroneFormErrors message={errors.drone_code.message} />
        )}
      </div>

      <div>
        <AddDroneFormLabel label={InputLabelEnum.DRONE_NAME} />
        <AddDroneFormInput
          register={register}
          fieldName="name"
          placeholder={InputPlaceholderEnum.DRONE_NAME}
          type="text"
        />

        {errors.name && <AddDroneFormErrors message={errors.name.message} />}
      </div>

      <div>
        <AddDroneFormLabel label={InputLabelEnum.DRONE_RANGE} />
        <AddDroneFormInput
          register={register}
          fieldName="range"
          placeholder={InputPlaceholderEnum.DRONE_RANGE}
          type="number"
        />

        {errors.range && <AddDroneFormErrors message={errors.range.message} />}
      </div>

      <div>
        <AddDroneFormLabel label={InputLabelEnum.DRONE_RELEASE_DATE} />
        <AddDroneFormInput
          register={register}
          fieldName="release_date"
          placeholder={InputPlaceholderEnum.DRONE_RELEASE_DATE}
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
