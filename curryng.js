//! каррирование

const task1 = (a, b, c, d) => {
  return a + b + c + d;
};
console.log(task1(2, 5, 7, 3));

///////////////////////////

const task = (a) => {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
};
console.log(task(2)(5)(7)(3));

/////////////////////////////

// const sum = (a) => (b) => (c) => (d) => a + b + c + d;
// console.log(sum(2)(5)(7)(3));

/////////////////////

// https://www.facebook.com/?locale=ru_RU

// const link = (a) => {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// };
// console.log(link("https://")("www.facebook.")("com/?locale")("=ru_RU"));

/////////////////////////

// const sum1 = (a) => (b) => (c) => (d) => a + b + c + d;
// console.log(sum1("https://")("www.facebook.")("com/?locale")("=ru_RU"));

