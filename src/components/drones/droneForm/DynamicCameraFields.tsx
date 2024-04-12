import AddDroneFormInput from "./AddDroneFormInput";
import AddDroneFormLabel from "./AddDroneFormLabel";
import {
  UseFormRegister,
  FieldValues,
  UseFieldArrayRemove,
  FieldPath,
  Path,
} from "react-hook-form";

interface CameraField {
  id: string;
  name: string;
  megapixels: number;
  type: string;
}

interface DynamicCameraFieldsProps<TFieldValues extends FieldValues> {
  fields: CameraField[];
  register: UseFormRegister<TFieldValues>;
  remove: UseFieldArrayRemove;
  fieldName: FieldPath<TFieldValues>;
}

function DynamicCameraFields<TFieldValues extends FieldValues>({
  fields,
  fieldName,
  register,
  remove,
}: DynamicCameraFieldsProps<TFieldValues>) {
  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <AddDroneFormLabel label={`Camera ${index + 1}`} />
          <AddDroneFormInput
            register={register}
            fieldName={`${fieldName}.${index}.name` as Path<TFieldValues>}
            placeholder="Camera name"
          />
          <AddDroneFormInput
            register={register}
            fieldName={`${fieldName}.${index}.megapixels` as Path<TFieldValues>}
            placeholder="Megapixels"
          />
          <AddDroneFormInput
            register={register}
            fieldName={`${fieldName}.${index}.type` as Path<TFieldValues>}
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
    </>
  );
}

export default DynamicCameraFields;
