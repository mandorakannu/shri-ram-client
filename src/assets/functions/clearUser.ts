export const clearUser = (): void => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.replace("/");
};
