const getAccessToken = (): string | null => {
  return localStorage.getItem("token");
};

const setAccessToken = (accessToken: string): void => {
  localStorage.setItem("token", accessToken);
};

export { getAccessToken, setAccessToken };
