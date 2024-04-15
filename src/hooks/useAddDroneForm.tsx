import { useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useAppDispatch } from "../app/hooks";
import { DroneData } from "../types/droneDataType";
import { droneSchema } from "../schemas/droneSchema";
import { Drone } from "../types/droneTypes";
import { addDrone } from "../features/drone/droneSlice";
import { formatDateAsLocal } from "../utils/formatDate";
import useCustomNavigate from "./useCustomNavigate";
import { Camera } from "../types/cameraType";
import { SourceEnum } from "../types/SourceType";
import { SuccessEnum } from "../constants/successConstants";
import { RoutesEnum } from "../routes/routes";
import { StringEnum } from "../constants/stringConstants";

const useAddDroneForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const navigateToHome: () => void = useCustomNavigate(RoutesEnum.HOME);
  const fileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const formMethods = useForm<DroneData>({
    resolver: zodResolver(droneSchema),
    defaultValues: {
      drone_code: StringEnum.EMPTY_STRING,
      name: StringEnum.EMPTY_STRING,
      range: 0,
      release_date: new Date(),
      cameras: [] as Camera[],
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
        release_date: formatDateAsLocal(data.release_date),
        source: SourceEnum.State,
      };
      dispatch(addDrone(droneData));
      reset();
      navigateToHome();
      toast.success(SuccessEnum.DRONE_ADDED_SUCCESS, {
        position: "bottom-left",
      });
    } catch (error: any) {
      toast.error(error.message, { position: "bottom-left" });
    }
  };

  const isImage = (base64String: string): boolean => {
    const match: RegExpMatchArray | null = base64String.match(
      /^data:([A-Za-z-+\/]+);base64,(.+)$/
    );
    if (match) {
      const mimeType: string = match[1];
      return mimeType.startsWith("image/");
    }
    return false;
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        const base64String: string = reader.result as string;
        if (isImage(base64String)) {
          setImagePreview(base64String);
          setValue("image", base64String);
        }
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
