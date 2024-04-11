import { useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NavigateFunction, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppDispatch } from "../app/hooks";
import { DroneData } from "../types/droneDataType";
import { droneSchema } from "../schemas/droneSchema";
import { Drone } from "../types/droneTypes";
import { addDrone } from "../features/drone/droneSlice";

const useAddDroneForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const fileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const formMethods = useForm<DroneData>({
    resolver: zodResolver(droneSchema),
    defaultValues: {
      drone_code: "",
      name: "",
      range: 0,
      release_date: new Date(),
      cameras: [],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = formMethods;

  const { fields, append, remove } = useFieldArray<DroneData>({
    control,
    name: "cameras",
  });

  const onSubmit = (data: DroneData): void => {
    try {
      const droneData: Drone = {
        ...data,
        release_date: data.release_date.toISOString(),
      };
      dispatch(addDrone(droneData));
      reset();
      navigate("/");
      toast.success("Drone Added successfully", { position: "bottom-left" });
    } catch (error: any) {
      toast.error(error.message, { position: "bottom-left" });
    }
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setValue("image", base64String);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setValue("image", "");
    }
  };

  const onFileIconClick = (): void => {
    fileInputRef.current?.click();
  };

  return {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    errors,
    fields,
    append,
    remove,
    imagePreview,
    onImageChange,
    onFileIconClick,
    fileInputRef,
    onSubmit,
  };
};

export default useAddDroneForm;
