import useGoBack from "../../hooks/useGoBack";

const BackButton = () => {
  const goBack = useGoBack();
  return (
    <div className="w-full px-6 py-4 text-center">
      <button
        onClick={goBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
