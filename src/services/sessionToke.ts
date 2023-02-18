export const saveSessionToken = (token: string) => {
  document.cookie = `token=${token}; path=/`;
};

export const removeSessionToken = () => {};
