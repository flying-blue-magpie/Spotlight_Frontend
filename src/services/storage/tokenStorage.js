
import storage from '.';

const TOKEN = 'token';
const KEY_USER = 'user';
const KEY_DOMAIN = 'domain';
const KEY_WORKSPACE = 'workspace';

export const setAuthToken = (token) => storage.saveItem(TOKEN, token);

export const setUserEmail = (email) => storage.saveItem(KEY_USER, email);
export const getUserEmail = () => storage.getItem(KEY_USER);

export const getAuthToken = () => storage.getItem(TOKEN);

export const setEnterprise = (enterprise) => storage.saveItem(KEY_WORKSPACE, enterprise);
export const getEnterprise = () => storage.getItem(KEY_WORKSPACE);

export const isLoggedIn = () => {
  if (typeof window.localStorage === 'undefined') {
    return false;
  }
  const token = getAuthToken();
  return token !== null && token !== '';
};

export const setDomain = (domain) => storage.saveItem(KEY_DOMAIN, domain);
export const getDomain = () => storage.getItem(KEY_DOMAIN);
export const removeDomain = () => storage.removeItem(KEY_DOMAIN);

export const removeSession = () => {
  storage.removeItem(TOKEN);
  storage.removeItem(KEY_USER);
};
