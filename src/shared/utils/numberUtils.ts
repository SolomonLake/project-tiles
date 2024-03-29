export const numberUtils = {
  getRandomInt: (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  isEven: (n: number): boolean => {
    return n % 2 === 0;
  },
};
