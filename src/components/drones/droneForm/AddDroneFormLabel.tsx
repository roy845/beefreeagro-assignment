type AddDroneFormLabelProps = {
  label: string;
};

const AddDroneFormLabel = ({ label }: AddDroneFormLabelProps): JSX.Element => {
  return (
    <label htmlFor={label} className="block text-sm text-white font-medium">
      {label}
    </label>
  );
};

export default AddDroneFormLabel;
