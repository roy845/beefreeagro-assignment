import React from "react";
import { UseFormRegister, FieldPath, FieldValues } from "react-hook-form";

interface InputProps<TFieldValues extends FieldValues> {
  register: UseFormRegister<TFieldValues>;
  fieldName: FieldPath<TFieldValues>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}

function AddDroneFormInput<TFieldValues extends FieldValues>({
  register,
  fieldName,
  placeholder,
  type,
  className = "mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
}: InputProps<TFieldValues>): JSX.Element {
  return (
    <input
      {...register(fieldName)}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default AddDroneFormInput;
