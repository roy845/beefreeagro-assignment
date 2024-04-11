import useAddDroneForm from "../../../hooks/useAddDroneForm";
import AddDroneFormButtons from "./AddDroneFormButtons";
import AddDroneFormErrors from "./AddDroneFormErrors";
import AddDroneFormImagePreview from "./AddDroneFormImagePreview";
import AddDroneFormImageUpload from "./AddDroneFormImageUpload";
import AddDroneFormLabel from "./AddDroneFormLabel";

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

        <input
          {...register("drone_code")}
          type="text"
          placeholder="Enter drone code"
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />

        {errors.drone_code && (
          <AddDroneFormErrors message={errors.drone_code.message} />
        )}
      </div>

      <div>
        <AddDroneFormLabel label={"Name"} />
        <input
          {...register("name")}
          type="text"
          placeholder="Enter drone name"
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && <AddDroneFormErrors message={errors.name.message} />}
      </div>

      <div>
        <AddDroneFormLabel label={"Range"} />

        <input
          {...register("range")}
          type="number"
          placeholder="Enter drone range"
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />

        {errors.range && <AddDroneFormErrors message={errors.range.message} />}
      </div>

      <div>
        <AddDroneFormLabel label={"  Release Date"} />

        <input
          {...register("release_date")}
          type="date"
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.release_date && (
          <AddDroneFormErrors message={errors.release_date.message} />
        )}
      </div>

      {fields.map((field, index) => (
        <div key={field.id}>
          <AddDroneFormLabel label={`Camera ${index + 1}`} />

          <input
            {...register(`cameras.${index}.name`)}
            placeholder="Camera name"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            {...register(`cameras.${index}.megapixels`)}
            placeholder="Megapixels"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="number"
          />
          <input
            {...register(`cameras.${index}.type`)}
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Camera type"
          />

          <button
            className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="button"
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => append({ name: "", megapixels: 0, type: "" })}
      >
        Add Camera
      </button>

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
