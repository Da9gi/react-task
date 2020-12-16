export const stringify = (data, ...rest) => JSON.stringify(data, ...rest);

export const parse = (data) => JSON.parse(data);

export const setStorage = (key = "", item) =>
    localStorage.setItem(key, stringify(item));

export const getStorage = (key = "") => parse(localStorage.getItem(key));

export const isStorage = (key = "") => (getStorage(key) ? true : false);

export const removeStorage = (key = "") => localStorage.removeItem(key);
