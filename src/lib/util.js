export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const arrayUniqueByKey = (array, key) => [...new Map(array.map((item) => [item[key], item])).values()];
