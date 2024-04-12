import BackButton from "../buttons/BackButton";

type DronesErrorProps = {
  errorDrones: string;
};

const DronesError = ({ errorDrones }: DronesErrorProps): JSX.Element => {
  return (
    <div className="text-center text-red-500">
      <p>Error: {errorDrones}</p>
      <BackButton />
    </div>
  );
};

export default DronesError;
