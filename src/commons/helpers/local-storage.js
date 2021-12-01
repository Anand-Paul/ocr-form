const getStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeStorageItem = (key) => {
  localStorage.removeItem(key);
};

export { getStorageItem, setStorageItem, removeStorageItem };
