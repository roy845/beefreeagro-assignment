import { ButtonEnum } from "../../../constants/buttonConstants";
import { CameraType } from "../../../types/cameraType";
import AddDroneFormErrors from "./AddDroneFormErrors";
import AddDroneFormInput from "./AddDroneFormInput";
import AddDroneFormLabel from "./AddDroneFormLabel";
import {
  UseFormRegister,
  FieldValues,
  UseFieldArrayRemove,
  FieldPath,
  Path,
  FieldErrors,
} from "react-hook-form";

interface CameraField {
  id: string;
  name: string;
  megapixels: number;
  type: CameraType;
}

interface DynamicCameraFieldsProps<TFieldValues extends FieldValues> {
  fields: CameraField[];
  register: UseFormRegister<TFieldValues>;
  remove: UseFieldArrayRemove;
  fieldName: FieldPath<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}

function DynamicCameraFields<TFieldValues extends FieldValues>({
  fields,
  fieldName,
  register,
  remove,
  errors,
}: DynamicCameraFieldsProps<TFieldValues>): JSX.Element {
  return (
    <>
      {fields.map((field: CameraField, index: number) => (
        <div key={field.id}>
          <AddDroneFormLabel label={`Camera Name`} />
          <AddDroneFormInput
            register={register}
            fieldName={`${fieldName}.${index}.name` as Path<TFieldValues>}
            placeholder="Camera name"
            type="text"
          />

          <AddDroneFormErrors
            message={
              (
                errors[fieldName as keyof typeof errors] as
                  | FieldErrors<any>[]
                  | undefined
              )?.[index]?.name?.message as string | undefined
            }
          />
          <AddDroneFormLabel label={"Megapixels"} />
          <AddDroneFormInput
            register={register}
            fieldName={`${fieldName}.${index}.megapixels` as Path<TFieldValues>}
            placeholder="Megapixels"
            type="number"
          />

          <AddDroneFormErrors
            message={
              (
                errors[fieldName as keyof typeof errors] as
                  | FieldErrors<any>[]
                  | undefined
              )?.[index]?.megapixels?.message as string | undefined
            }
          />
          <AddDroneFormLabel label={"Type"} />
          <AddDroneFormInput
            register={register}
            fieldName={`${fieldName}.${index}.type` as Path<TFieldValues>}
            placeholder="Camera type"
            type="text"
          />

          <AddDroneFormErrors
            message={
              (
                errors[fieldName as keyof typeof errors] as
                  | FieldErrors<any>[]
                  | undefined
              )?.[index]?.type?.message as string | undefined
            }
          />
          <button
            className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="button"
            onClick={() => remove(index)}
          >
            {ButtonEnum.REMOVE}
          </button>
        </div>
      ))}
    </>
  );
}

export default DynamicCameraFields;
