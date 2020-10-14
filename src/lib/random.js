const createRandomNumber = (min = 0, max = 100) => Math.round(Math.random() * (max - min)) + min;

const getRandomArrayElement = (array) => array[createRandomNumber(0, array.length - 1)];

const chooseRandomArrayItems = (array, size) => (
  array
    .sort(() => Math.random() - 0.5)
    .slice(0, size)
);

export {createRandomNumber, getRandomArrayElement, chooseRandomArrayItems};
