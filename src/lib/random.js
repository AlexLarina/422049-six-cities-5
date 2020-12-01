const createRandomNumber = (min = 0, max = 100) => Math.round(Math.random() * (max - min)) + min;

export {createRandomNumber};
