
// все методы массива

// ChatGPT
// Вот некоторые из основных методов массивов в JavaScript:

// push(): Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.

// pop(): Удаляет последний элемент из массива и возвращает его значение.

// shift(): Удаляет первый элемент из массива и возвращает его значение, сдвигая остальные элементы вверх.

// unshift(): Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.

// concat(): Объединяет два или более массива и возвращает новый массив.

// join(): Соединяет все элементы массива в строку с разделителем, указанным в аргументе.

// slice(): Возвращает часть массива, начиная с указанного индекса и заканчивая указанным индексом (не включая его).

// splice(): Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые элементы.

// indexOf(): Возвращает индекс первого вхождения заданного элемента в массиве, или -1, если элемент не найден.

// lastIndexOf(): Возвращает индекс последнего вхождения заданного элемента в массиве, или -1, если элемент не найден.

// forEach(): Вызывает функцию обратного вызова для каждого элемента массива.

// map(): Создает новый массив с результатами вызова указанной функции для каждого элемента массива.

// filter(): Создает новый массив, содержащий все элементы, для которых функция обратного вызова возвращает true.

// reduce(): Применяет функцию обратного вызова к аккумулятору и каждому элементу массива (слева направо), чтобы свести его к одному значению.

// reduceRight(): Применяет функцию обратного вызова к аккумулятору и каждому элементу массива (справа налево), чтобы свести его к одному значению.

// Это лишь некоторые из основных методов. В JavaScript существует много других методов массивов, которые могут быть полезны в различных ситуациях.








//! array - массивы
//? массив - набор данных, структура данных
// console.log(typeof []) - object;

// length
// index[]

// let array = [
//   1,
//   2,
//   3,
//   "sfghjk",
//   "  ",
//   "123",
//   true,
//   false,
//   null,
//   undefined,
//   {},
//   12344n,
//   [12, "wert", ["werr"]],
// ]

// let names = ["Saykal", "Umar", "Kutman", "Seyil", "Aidai", "Uson", "Ulukbek"];
// console.log(names[names.length - 1]);
// console.log(names);

////////////////////

// let names = ["Saykal", [1, 2, 3, 4, 5], "Umar", "Kutman", "Seyil", "Aidai", "Uson", "Ulukbek"]
// console.log(names[1][4]);

////////////////////

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numArr);

////////////////////

// let names = ["Saykal", "Umar", "Kutman", "Seyil", "Aidai", "Uson", "Ulukbek"];
// names.slice(0, 2)
// console.log(names);

// console.log(names.slice(0, 2));
// console.log(names.includes('Kutman'));
// console.log(names.indexOf('Umar'));

////////////////////

// let names = ["Saykal", "Umar", "Kutman", "Seyil", "Aidai", "Ulukbek"];

//////? names.push("Uson");
// console.log(names);

//////? names.pop()
// console.log(names);

//////? names.unshift('Uson')
// console.log(names);

//////? names.shift()
// console.log(names);

//////? names.splice(2, 2, "Azat", "Nuriza");
// console.log(names);

//? push() - толкать -- эн акырына кошуп кетет
//? pop() -- эн аягынан алып коет
//? unshift() -- башынан кошуп коет
//? shift() -- башынан алып салат

//?) slice() -- 2parametr:  капирует
//?1) - start
//?2) - end

//? splice() -- 3parametr: изменяет
//?1 - start
//?2 - deleteCount
//?3 - items

//!separatot - "" -- строка
//? split() - "" >>> [] -- строканы массивке айлантат

// let str = "motion"
// console.log(str.split(" "))

//? join() - [] >>> "" -- массивти строкага айлантат

// let str = ["Saykal", "Umar", "Kutman", "Seyil", "Aidai", "Ulukbek"];
// console.log(str.join(" - "));