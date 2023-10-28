/* eslint-disable import/no-anonymous-default-export */
const storageKeyToken = "@storage_Key";
const storageKeyDarkMode = "lesChatDarkMode";

const saveUser = (user) => {
  localStorage.setItem(storageKeyToken, JSON.stringify(user));
};

const loadUser = () => localStorage.getItem(storageKeyToken);

const removeUser = () => localStorage.removeItem(storageKeyToken);

const saveDarkMode = (boolean) =>
  localStorage.setItem(storageKeyDarkMode, boolean);

const loadDarkMode = () => JSON.parse(localStorage.getItem(storageKeyDarkMode));

export default {
  saveUser,
  loadUser,
  removeUser,
  saveDarkMode,
  loadDarkMode,
};
