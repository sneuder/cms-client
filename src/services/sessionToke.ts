export const saveSessionToken = (token: string) => {
  document.cookie = `token=${token}; path=/`;
};

export const getSessionToken = (cookieName: string) => {
  const cookie = document.cookie.match(
    '(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)'
  );

  return cookie ? cookie?.pop() : undefined;
};

export const removeSessionToken = () => {};
