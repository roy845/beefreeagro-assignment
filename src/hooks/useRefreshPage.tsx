const useRefreshPage = (): (() => void) => {
  const refreshPage = () => window.location.reload();
  return refreshPage;
};

export default useRefreshPage;
