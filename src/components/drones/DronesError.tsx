import useGoBack from "../../hooks/useGoBack";

type DronesErrorProps = {
  errorDrones: string;
};

const DronesError = ({ errorDrones }: DronesErrorProps): JSX.Element => {
  const goBack = useGoBack();

  return (
    <div className="text-center text-red-500">
      <p>Error: {errorDrones}</p>
      <button
        onClick={goBack}
        className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Go Back
      </button>
    </div>
  );
};

export default DronesError;
