


//! sort() - 2parametr -- 1-a, 2-b
//! map() - 3parametr -- 1-element, 2-index, 3-array[]
//! filter() - 3parametr -- 1-element, 2-index, 3-array[]

//!map()

//?  ОБРАЩАЕТСЯ К КАЖДОМУ ЭЛЕМЕНТУ И ВОЗВРАЩАЕТ В МАССИВ

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.map(function (element, index, array) {
//   return element ** 2;
// });
// console.log(res);

// let arr = ["qwer", "asdfg", "ddccvbnm", "jnmyuiu"];
// let res = arr.map(function (el) {
//   return el.toUpperCase();
//   return el.length;
//   if (el.length > 5) {
//     return el;
//   } else {
//     return false;
//   }
// });
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.map((el, adx, array) => {
//   return el / 2;
// });
// console.log(res);

// const task = (arr) => {
//  // return arr.map((el) => {
//   return el;
//   });
// };
// console.log(task([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//!filter

//? ПОСЛЕ ФИЛЬТРАЦИИ ХРАНИТ В НОВОМ МАССИВЕ

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter((el) => {
//   return el >= 5;
// });
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter((el, idx) => {
//   //   return idx % 2 != 0 ? el : false;
//   return el % 2 === 0;
// });
// console.log(res);



//! sort

// let arr = [2, 4, 56, 7, 9, 1, 3, 0, 45, 67];
// console.log(
//   arr.sort((a, b) => {
//     return a - b;
//   })
// );

// let arr = ["a", "B", "r", "y", "k", "o", "t", "f", "c"];
// console.log(
//   arr.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   })
// );

//! tasks

///////////////////////

//! Во всех задачах используйте только методы map, filter.

//? 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

// const task1 = (arr) => {
//   return arr.map((el) => {
//     return el + el;
//   });
// };
// console.log(task1([315, 64, 75, 43, 65, 63]));

//? 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// const task2 = (arr) => {
//   return arr.map((el) => {
//     return el.replaceAll('а', 'я');
//   });
// };
// console.log(task2(["Аскар", "Баяман", "Калмамат"]));

//? 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.

// let arr = ["Аскар", "Баяман", "Калмамат"];
// let res = arr.filter((el) => {
//   return el.includes("к");
// });
// console.log(res);

//? 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.

// let arr = [4, 54, 49];
// let res = arr.map((el) => {
//   return el ** 2;
// });
// console.log(res);

//? 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// let arr = [3134, 4, -143, -245, -214];
// let res = arr.filter((el) => {
//   return el < 0;
// });
// console.log(res);

// function task5(arr) {
// return arr.filter((el) =>{
//     return el < 0
// })
// }
// console.log(task5([3134, 4, -143, -245, -214]));

//? 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// let arr = [3, 51, 30, 54, 60];
// let res = arr.filter((el) => {
//   return el % 2 === 0;
// });
// console.log(res);

//? 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ["Бегимай", "Баяман", "Калмамат"];
// let res = arr.filter((el) => {
//   return el.length > 5;
// });
// console.log(res);

//? 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.

// let arr = [-13, 96, -41, -28, 40];
// let res = arr.filter((el) => {
//   return el < 0;
// }).length;
// console.log(res);

//? 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

// let arr = [3, 51, -30, -54, 60];
// let res = arr
//   .filter((el) => {
//     return el > 30;
//   }).map((el) => {
//     return el ** 2;
//   });
// console.log(res);

//? 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

// let arr = [55, 44, 55, 44, 15, 49];
// let res = arr.filter((el) => {
//   return arr.indexOf(el) === arr.lastIndexOf(el);
// });
// console.log(res);

//? 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

// let arr = [NaN, 0, 77, false, -17, "", undefined, 99, null];
// let res = arr.filter((el) => {
//   return el && el > 0
// });
// console.log(res);

// function task11(arr) {
//   return arr.filter((el) => {
//     return el && el > 0;
//   });
// }
// console.log(task11([NaN, 0, 77, false, -17, "", undefined, 99, null]));
//? 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let arr = ["Бегимай", "Баяман", "Калмамат"];
// let res = arr.map((el) => {
//   return el.length;
// });
// console.log(res);

// const task12 = (arr) => {
//   return arr.map((el) => {
//     return el.length;
//   });
// };
// console.log(task12(["Бегимай", "Баяман", "Калмамат"]));
