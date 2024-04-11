import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../../components/header/Header";
import { addDrone } from "../../features/drone/droneSlice";
import { MdFileUpload } from "react-icons/md";
import { useRef, useState } from "react";
import { Drone } from "../../types/droneTypes";

const cameraSchema = z.object({
  name: z.string().min(1, { message: "Camera name is required" }),
  megapixels: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Megapixels must be a positive number",
    }),
  type: z.string().min(1, { message: "Camera type is required" }),
});

const droneSchema = z.object({
  drone_code: z
    .string()
    .min(3, { message: "Drone code has to be a minimum of 3 characters" }),
  name: z.string().min(1, { message: "Drone name is required" }),
  range: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Range must be a positive number",
    }),
  image: z
    .instanceof(File)
    .refine((val) => val instanceof File && val.size > 0, {
      message: "Drone image is required",
    }),
  cameras: z.array(cameraSchema).refine((cameras) => cameras.length > 0, {
    message: "At least one camera is required",
  }),
});

type DroneData = z.infer<typeof droneSchema>;

const AddDrone = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DroneData>({
    resolver: zodResolver(droneSchema),
    defaultValues: {
      drone_code: "",
      name: "",
      range: 0,
      cameras: [],
    },
  });

  const { fields, append, remove } = useFieldArray<DroneData>({
    control,
    name: "cameras",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: DroneData): void => {
    const droneData: Drone = {
      ...data,
      release_date: new Date().toISOString(),
    };

    try {
      dispatch(addDrone(droneData));
      reset();
      navigate("/");
      toast.success("Drone Added successfully", { position: "bottom-left" });
    } catch (error: any) {
      toast.error(error.message, { position: "bottom-left" });
    }
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      setValue("image", file);
    } else {
      setImagePreview(null);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileIconClick = () => {
    fileInputRef.current?.click();
  };

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
