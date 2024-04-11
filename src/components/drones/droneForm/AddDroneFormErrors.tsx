type AddDroneFormErrorsProps = {
  message: string | undefined;
};

const AddDroneFormErrors = ({
  message,
}: AddDroneFormErrorsProps): JSX.Element => {
  return <p className="mt-2 text-sm text-red-600">{message}</p>;
};

export default AddDroneFormErrors;
