export const isStringEmpty = (str) => str.length === 0;

export const isArrayEmpty = (str) => str.length === 0;

export const isObjectEmpty = (obj) => isArrayEmpty(Object.keys(obj));
