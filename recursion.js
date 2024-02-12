//! Recursion
// recursion - функциянын ичинен функцияны чакырганда

// let i = 0
// function num() {
//   i++
//   console.log(i)
//   if (i === 100) {
//     return
//   }else {
//     num()
//   }
// }
// num()

// function factorial(n) {
//   // Если мы пытаемся найти факториал 1,
//   // возвращаем 1 — это базовый случай.
//   if (n <= 1) {
//     return 1
//   }

//   // В остальных случаях
//   // возвращаем произведение n
//   // на факториал предыдущего числа —
//   // таким образом мы от n дойдём до 1,
//   // перебрав каждое число.
//   return n * factorial(n - 1)
// }

// console.log(factorial(4))
//  120

// function f1() {
//   t++
//   console.log(t)
//   if (t === 100) {
//     return
//   } else {
//     f1()
//   }
// }

// f1()

// function pow(x, n) {
//   let result = 1;

//    умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(pow(2, 3)) // 8

// recursion
// function pow(x, n) {
//   if (n === 1) {
//     return x
//   } else {
//     return x * pow(x, n - 1)
//   }
// }

// console.log(pow(2, 3)) // 8

////////////////////////
//! 1.Обратное суммирование:
// Напишите функцию, которая суммирует все числа от 1 до заданного числа n, используя рекурсию.

// let n = 5;
// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }
// let result = sum(n);
// console.log(result);

//! 2.Подсчет элементов массива:
// Напишите функцию, которая подсчитывает количество элементов в массиве, используя рекурсию.

// let arr = [1, 2, 3, 4, 5, 6];

// function num(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return 1 + num(arr.slice(1));
// }
// let count = num(arr);
// console.log(count);

//! 3.Проверка наличия элемента в массиве:
// Напишите функцию, которая проверяет, содержится ли определенный элемент в массиве, используя рекурсию.

// let arr = ["a", "b", "c", "d"];
// function str(arr) {
//   if (arr.includes("a")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let count = str(arr);
// console.log(count);

//! 4.Сумма элементов массива:
// Напишите функцию, которая вычисляет сумму всех элементов в массиве, используя рекурсию.

// let arr = [1, 2, 3, 4, 5, 6];

// function num(arr) {
//   if (arr.length === 0) {
//     return 0 ;
//   }
//   return arr[0] + num(arr.slice(1));
// }
// let count = num(arr);
// console.log(count);

//! 5.Факториал числа:
// Напишите функцию, которая принимает целое число n и возвращает факториал этого числа. Факториал числа n - это произведение всех положительных целых чисел от 1 до n.

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.clear(factorial(5));
