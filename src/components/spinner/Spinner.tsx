import React from "react";
import { TailSpin } from "react-loader-spinner";
import { SpinnerEnum } from "../../constants/spinnerConstants";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = SpinnerEnum.SIZE,
  color = SpinnerEnum.COLOR,
}): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TailSpin height={size} width={size} color={color} ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
