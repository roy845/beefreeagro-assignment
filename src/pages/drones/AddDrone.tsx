import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { MdFileUpload } from "react-icons/md";
import useAddDroneForm from "../../hooks/useAddDroneForm";

const AddDrone = () => {
  const navigate = useNavigate();

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
    <div className="flex flex-col justify-center items-center">
      <Header title="Add new drone" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-md"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-white font-medium"
          >
            Drone Code
          </label>
          <input
            {...register("drone_code")}
            type="text"
            placeholder="Enter drone code"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.drone_code && (
            <p className="mt-2 text-sm text-red-600">
              {errors.drone_code.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter drone name"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="address.street"
            className="block text-sm font-medium text-white"
          >
            Range
          </label>

          <input
            {...register("range")}
            type="number"
            placeholder="Enter drone range"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />

          {errors.range && (
            <p className="mt-2 text-sm text-red-600">{errors.range.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="release_date"
            className="block text-sm font-medium text-white"
          >
            Release Date
          </label>
          <input
            {...register("release_date")}
            type="date"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.release_date && (
            <p className="mt-2 text-sm text-red-600">
              {errors.release_date.message}
            </p>
          )}
        </div>

        {fields.map((field, index) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-white">
              Camera {index + 1}
            </label>
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
          <label className="block text-sm font-medium text-white">
            Drone Image
          </label>

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

          {errors.image && (
            <p className="mt-2 text-sm text-red-600">{errors.image.message}</p>
          )}
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Drone Preview"
              className="w-40 h-40 object-cover"
            />
          ) : null}
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Drone
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDrone;
