//! REDUCE()

//? 4-parametr:
// 1 - accumulator
// 2 - element
// 3 - index
// 4 - Array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   arr.reduce((acc, el, idx, array) => {
//     return el
//     return acc;
//   })
// );

// //////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   arr.reduce((acc, el, idx, array) => {
//     return acc + el;
//   })
// );

//  /////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   arr.reduce((acc, el, idx, array) => {
//     return acc + el;
//   }, 0)
// );

//  /////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   arr.reduce((acc, el, idx, array) => {
//     if (el > 5) {
//       acc.push(el);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, [])
// );

//////////////////?

// let arr = ['Uson', 'Saykal', 'Seyil', 'Kutman', 'Umar', 'Aidai', 'Nuriza', 'Ulukbek']

// console.log(
//   arr.reduce((acc, el, idx, array) => {
//     return acc + el;
//   })
// );

//! find() -- element, index

// Метод find() в JavaScript используется для поиска первого элемента массива, который удовлетворяет условию,
// заданному в виде функции обратного вызова.

// let arr = [1, 2, 3, 4, 0, 5, 6, 7, 8, 9];
// console.log(
//   arr.find((el, idx) => {
//     return el > 5;
//   })
// )

//! every() -- true, false

// Метод every() в JavaScript используется для проверки того, удовлетворяют ли все элементы массива определенному условию.
// Метод возвращает булево значение true, если все элементы массива соответствуют условию, и false в противном случае.

// let arr = [1, 2, 3, 4, 0, 5, 6, 7, 8, 9];
// console.log(
//   arr.every((el, idx) => {
//     return el > 5;
//   })
// );
//! some() -- true, false

// Метод some() в JavaScript используется для проверки, удовлетворяет ли хотя бы один элемент массива заданному условию,
// заданному в виде функции обратного вызова. Метод возвращает булево значение true, если хотя бы один элемент соответствует условию, и false в противном случае.

// let arr = [1, 2, 3, 4, 0, 5, 6, 7, 8, 9];
// console.log(
//   arr.some((el, idx) => {
//     return el > 5;
//   })
// )

//! reverse() --

// Метод reverse() в JavaScript используется для изменения порядка элементов в массиве на противоположный.
// То есть, элементы массива будут переставлены в обратном порядке.

// let arr = ['Uson', 'Umar'];
// console.log(arr.reverse())


//! Особенность метода reduce() заключается в его способности аккумулировать (накапливать) результаты применения функции к каждому элементу массива, образуя единое значение. Важные аспекты:

//? Аккумулятор:

// reduce() использует аккумулятор — переменную, которая хранит текущий результат и передается от итерации к итерации.
// Первый параметр функции reduce() (второй аргумент) представляет собой аккумулятор.

//? Функция обратного вызова:

// Функция, переданная в reduce(), принимает четыре параметра: аккумулятор, текущий элемент, индекс и массив.
// Функция должна возвращать новое значение аккумулятора после применения к текущему элементу.

//? Инициализация аккумулятора:

// Метод reduce() может принимать второй аргумент — начальное значение аккумулятора. Если не указано, первый элемент массива становится начальным значением.

//? Единое значение:

// В итоге reduce() возвращает одно значение, полученное после обработки всех элементов массива.

//////////////////////////////////

//!  Во всех задачах используйте только методы map, reduce.

//?! 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.

// const task1 = (arr) => {
//   return arr.reduce((acc, el) => {
//     return acc + el;
//   });
// };
// console.log(task1([5, 15, 315, 2, 13, 20, 9]));

//?! 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.

// function task2(arr) {
//   return arr.reduce((acc, el) => {
//     if (el % 2 === 0) {
//       return acc + el;
//     } else {
//       return acc;
//     }
//   }, 0);
// }
// console.log(task2([5, 12, 314, 2, 13, 20, 9]));

//?! 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.

// const task3 = (arr) => {
//   return arr.reduce((acc, el) => {
//     if (el > 10) {
//       return acc + el;
//     } else {
//       return acc;
//     }
//   }, 0);
// };
// console.log(task3([5, 15, 315, 2, 13, 20, 9]));

//?! 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.

// const task4 = (arr) => {
//   return arr.reduce((acc, el) => {
//     if (el > 10) {
//       return acc - el;
//     } else {
//       return acc;
//     }
//   }, 0);
// };
// console.log(task4([3, 13, 54, 15, 335, 39]));

//?! 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.

// const task5 = (arr) => {
//   return arr.reduce((acc, el) => {
//     return acc + el;
//   }).length;
// };
// console.log(task5(["Аскар", "Баяман", "Калмамат"]));

//?! 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.

// const task6 = (arr) => {
//   return arr.map((el) => {
//     return el.toUpperCase();
//   });
// };
// console.log(task6(["Аскар", "Баяман", "Калмамат"]));

//?! 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.

// let arr = ["Аскар", "Баяман", "Калмамат",'ryyuio'];
// let res = arr.map((el, idx) => {
//   if (idx % 2 != 0) {
//     return el.toUpperCase();
//   } else {
//     return el;
//   }
// });
// console.log(res);

//?! 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str. Использовать .reduce для этого.
//?! Пример: isPresent ('abcd', 'b') => true
//?! isPresent ('efghi', 'a') // => false

// function task8(str, target) {
//   return str.split(" ").reduce((acc, el) => {
//     return el.includes(acc);
//   }, target);
// }
// console.log(task8("abcd", "b"));
// console.log(task8("efghi", "a"));

//?! 9. Вам дан массив с строками  ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//?! Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// const task9 = (arr) => {
//   return arr.map((el) => {
//     return el[0].toUpperCase() + el.slice(1).toLowerCase();
//   });
// };
// console.log(task9(["асКар", "бЯяман", "калМмамат"]));

//?! 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.

// let arr = ["Баяман", "Калмамат"];
// const task = (arr) => {
//   return arr.reduce((acc, el) => {
//     return `${el[0]}${acc.slice(1)} ${acc[0]}${el.slice(1)}`;
//   });
// };
// console.log(task(arr));

//?! 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.

// function task11(arr) {
//   return arr.every((el) => {
//     return typeof el === typeof arr[0];
//   });
// }
// console.log(task11([true, "1234", 325]));

//?! 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// let str = "тестинг";
// let res = str.split("");
// let resault = res.reduce((acc, el, index, arr) => {
//   if (arr.length % 2 === 1) {
//     return arr[Math.floor(arr.length / 2)];
//   } else {
//     let text1 = arr.length / 2 - 1;
//     let text2 = arr.length / 2;
//     return arr[text1].concat(arr[text2]);
//   }
// }, "");
// console.log(resault);

//?! 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.

// const task13 = (arr) => {
//   return arr.reduce((acc, el) => {
//     if (el > 0) {
//       return acc + el;
//     } else {
//       return acc;
//     }
//   }, 0);
// };
// console.log(task13([5, -3, 13, -7, 45]));

//?! 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел, которые больше 10.

// let arr = [5, -54, 13, -7, 45, -15, -34];
// let res = arr.reduce((acc, el) => {
//   if (el < 0 && el > 10) {
//     return acc + el;
//   } else {
//     return acc;
//   }
// });
// console.log(res);

//?! 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.

// let arr = [1, 65, 13, 30, 100];
// let arr1 = 89;
// let res = arr.reduce((acc, el) => {
//   return acc + el * arr1;
// }, 0);
// console.log(res);

//?! 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit'].
//?! Выведите каждый нечетный индекс в строке в верхнем регистре.

// const task16 = (str) => {
//   return str.split("").reduce((acc, el, index) => {
//     return acc + (index % 2 != 0 ? el.toUpperCase() : el);
//   });
// };
// console.log(task16("Lorem ipsum dor sit omet devour il ela sit"));

// ! 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// const arr = ["Оскар", "Баяман", "Калмамат"];
// const res = arr.map((el, index) => index + " " + el);
// console.log(res);
// //

//?! 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// let arr = [2, 456, 6, 8];
// console.log(arr.join("-"));

//?! 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.

// const arr = [5, 15, 315, 2, 13, 20, 9];
// const sum = arr.reduce((acc, el) => acc + el, 0);
// const res = sum / arr.length;
// console.log(res);

//? 1. Найти первый элемент в массиве, который больше 10.
//? let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
//? output: 40

// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// console.log(
//   arr.find((el) => {
//     return el > 10;
//   })
// )

//? 2. Проверить, все ли элементы массива являются положительными числами.
//? let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
//? output: false

// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// console.log(
//   arr.every((el) => {
//     return el > 0;
//   })
// )

//? 3. Проверить, есть ли в массиве хотя бы один элемент, равный 0.
//? let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
//? output: true

// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// console.log(
//   arr.some((el) => {
//     return el === 0;
//   })
// );

//? 4. Найти первое четное число в массиве.
//? let arr = [3, 5, 7, 1, 33, 77, 44];
//? output: 44

// let arr = [3, 5, 7, 1, 33, 77, 44];
// console.log(
//   arr.find((el) => {
//     return el % 2 === 0;
//   })
// )

//? 5. Проверить, все ли строки в массиве содержат более 5 символов.
//? let person = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
//? output: false

// let arr = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
// console.log(
//   arr.every((el) => {
//     return el.length > 5;
//   })
// )

//? 6. Проверить, есть ли в массиве хотя бы одно отрицательное число.
//? let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
//? output: true

// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// console.log(
//   arr.some((el) => {
//     return el < 0;
//   })
// );

//? 7. Найти первую строку в массиве, которая начинается с буквы "M".
//? let person = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
//? output: Muradil

// let arr = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
// let res = arr.find((el)=> el[0] === "M" || "m")
// console.log(res);

//? 8. Проверить, все ли элементы массива являются четными числами.
//? let arr = [3, 5, 7, 1, 33, 77, 44];
//? output: false

// let arr = [3, 5, 7, 1, 33, 77, 44];
// console.log(
//   arr.every((el) => {
//     return el % 2 === 0;
//   })
// );

//? 9. Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
//? let person = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
//? output: false

// let arr = [
//   "Ilyaz",
//   "Usman",
//   "Ramazan",
//   "Bilal",
//   "Oroz",
//   "Zeynep",
//   "Erbol",
//   "Kurmanbek",
//   "Nurgul",
//   "Muradil",
//   "Bekzat",
// ];
// console.log(
//   arr.some((el) => {
//     return typeof el === "number" ? true : false;
//   })
// );

//? 10. Найти первый элемент массива, который делится на 3 без остатка.
//? let arr = [5, 7, 1, 8, 9, 77, 44];
//? output: 9

// let arr = [5, 7, 1, 8, 9, 77, 44];
// console.log(
//   arr.find((el) => {
//     return el % 3 === 0;
//   })
// );

//? 11. Проверить, все ли элементы массива больше 0.
//? let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
//? output: true

// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// console.log(
//   arr.every((el) => {
//     return el > 0;
//   })
// );

//? 12. Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
//? let person = ["Ilyaz", "usman", "ramazan", "bilal", "oroz", "zeynep", "erbol", "kurmanbek", "nurgul", "muradil", "bekzat"];
//? output: true

// let person = ["Ilyaz", "usman", "ramazan", "bilal", "oroz", "zeynep", "erbol", "kurmanbek", "nurgul", "muradil", "bekzat"];
// console.log(
//   person.some((el) => {
//     return el.charAt(0) === el.charAt(0).toUpperCase();
//   })
// );

///////////////////////

//? Преобразование данных
// Создайте массив чисел и используйте метод map(), чтобы преобразовать числа в строковый формат с добавлением символа "$" в начале каждой строки.
// let prices = [10, 20, 30, 40, 50];

// const arr = [10, 20, 30, 40, 50];
// const res = arr.map((el) => {
//   return "$" + el;
// });
// console.log(res);

//? Создайте функцию checkTask(arr), которая принимает в аргументы массив состоящий из строк и выводит в консоль новый массив состояший только из первых и последних букв каждой строки.
// Например, для массива:
// ['hi', 'goodbye', 'smile']
// Вывод будет:
// ['hi', 'ge', 'se']

// let arr = ['hi', 'goodbye', 'smile'];
// console.log(
//   arr.map((el, idx) => {
//     return el[0] + el[el.length - 1]
//   })
// );
//? Поиск элемента в массиве
// Создайте массив чисел и используйте метод find(), чтобы найти первый элемент, который больше  25 определенного порогового значения.
// let numbers = [10, 20, 30, 40, 50];

// let arr = [10, 20, 30, 40, 50];
// console.log(
//   arr.find((el) => {
//     return el > 25;
//   })
// );

// ?Поиск элемента с использованием функции-коллбэка
// Создайте массив строк и используйте метод find(), чтобы найти первую строку, которая начинается с "b" определенной буквы.
// let words = ["apple", "banana", "cherry", "date"];

// let arr = ["apple", "banana", "cherry", "date"];
// let res = arr.find((el) => el[0] === "b");
// console.log(res);

//? Поиск элемента по индексу
// Создайте массив чисел и используйте метод find() для нахождения элемента по его индексу 2
// let numbers = [10, 20, 30, 40, 50];

// let arr = [10, 20, 30, 40, 50];
// let res = arr.find((el, idx) => {
//   return idx === 2;
// });
// console.log(res);

//? Преобразование массива в строку
// Создайте массив строк и используйте метод join(), чтобы объединить все элементы массива в одну строку с определенным разделителем.
// let fruits = ["apple", "banana", "cherry"];

// let arr = ["apple", "banana", "cherry"];
// console.log(arr.join(""));

//? Объединение пути к файлу
// Создайте массив строк, представляющих части пути к файлу, и используйте метод join() для объединения их в один путь.
// let pathParts = ["folder", "subfolder", "file.txt"];

//? Преобразование чисел в строку
// Создайте массив чисел и используйте метод join() для преобразования их в строку, разделенную запятой.
// let numbers = [1, 2, 3, 4, 5];

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join(", "));

//? Разделение строки по пробелам
// Разделите строку на массив слов, используя пробел в качестве разделителя.
// let sentence = "Это пример разделения строки на слова";

// let str = "Это пример разделения строки на слова"
// console.log(str.split(" "))

//? Разделение строки по запятой
// Разделите строку, содержащую перечень элементов, разделенных запятыми, на массив элементов.
// let items = "apple, banana, cherry, date";

// let str = "apple, banana, cherry, date";
// console.log(str.split(" "));

//? Сортировка строк в лексикографическом порядке
// Используйте метод sort(), чтобы отсортировать массив строк в лексикографическом порядке (по алфавиту).
// let fruits = ["banana", "apple", "cherry", "date"];

// let arr = ["banana", "apple", "cherry", "date"];
// console.log(
//   arr.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   })
// );

//? Сортировка строк в обратном порядке
// Используйте метод sort() и функцию сравнения для отсортировки массива строк в обратном порядке
// let fruits = ["banana", "apple", "cherry", "date"];

// let arr = ["banana", "apple", "cherry", "date"];
// console.log(
//   arr.sort((a, b) => {
//     if (a < b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   })
// );

//? Проверка наличия элемента больше определенного порога
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент больше 15
// let numbers = [10, 5, 8, 22, 3];

// let arr = [10, 5, 8, 22, 3];
// console.log(
//   arr.some((el) => {
//     return el > 15;
//   })
// );

//? Проверка наличия строк, содержащих определенную букву
// Используйте метод some(), чтобы проверить, есть ли в массиве строк хотя бы одна строка, содержащая определенную букву “a”
// let words = ["apple", "banana", "cherry", "date"];

// let arr = ["apple", "banana", "cherry", "date"];
// let res = arr.find((el) => el[0] === "a");
// console.log(res);

//? Проверка наличия элементов, удовлетворяющих условию
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент, удовлетворяющий определенному условию.
// let numbers = [10, 5, 8, 22, 3];

// let arr =[10, 5, 8, 22, 3];
// let res = arr.some((el) => {
//   return el == 9
// });
//  console.log(res);

//? Объединение элементов массива с определенным разделителем
// Используйте метод reduce() для объединения элементов массива с определенным разделителем.
// let items = ["apple", "banana", "cherry"];

// let arr = ["apple", "banana", "cherry"];
// let res = arr.reduce((acc, el) => {
//   return acc + el
// });
// console.log(res);

// Задание №3
//? Дана функция checkTask(arr) которая принимает массив с предложениями. Необходимо вернуть новый массив с количеством слов в каждом предложении.
//? Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

// let arr = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
// let res = arr.map((el) => {
//   return el;
// });
// console.log(res);

/////////////////////////////

// Получив букву, верните ее положение в алфавите.
// function position(letter){
//Write your own Code!
// }

// Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число.
// / Это число обозначает позицию, которую слово должно занимать в результате.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

// let str = "is2 Thi1s T4est 3a";
// let arr = str.split(" ");
// let [elem2, elem1, elem4, elem3] = arr;
// let res = elem1 + " " + elem2 + " " + elem3 + " " + elem4;
// console.log(res);
