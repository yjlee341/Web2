const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

const setAccessToken = (accessToken: string): void => {
  localStorage.setItem("accessToken", accessToken);
};

export { getAccessToken, setAccessToken };
