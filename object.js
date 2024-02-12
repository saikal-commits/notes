//!  Object -- data type - тип данный
//? ключь, свойство, поле

// {}
//key: value

// console.log(typeof {});

//? <<<  let obj = {}  >>>
//? let obj2 = new Object()
//? let obj3 = Object.create

//? Объекты в JavaScript позволяют структурировать данные и функции в единую сущность,
//? что делает их мощным и гибким средством для организации кода.

// let obj = {
//   name: {
//     LastName: "Sarylbekova",
//   },
//   age: 16,
//   adress: "Bishkek city",
//   car: ["Mersedes", "BMW", "lx570", "Tesla", "Tayota"],
//   "motion web": "academy",
// };

//? добавление если нет ключа с таким названием
// obj.number = "+996 556 77 88 99";

//? изменение если уже есть ключь с таким названием
// obj.number = '+996 700 778 899'

//? Object -- глобальный обьект

//1 console.log(obj)
//2 console.log(obj["age"]);
// console.log(obj.car[3]);

//! Object.keys(obj) -- найти все ключи
//console.log(Object.keys(obj));

//! Object.values(obj) -- найти все значения
// console.log(Object.values(obj));

//! Object.freeze(obj) -- заморозить обьект
// console.log(Object.freeze(obj));

//! Object.entries(obj) -- все ключи и значения превращает в массив
// console.log(Object.entries(obj));

//? узнать длину обьекта
// console.log(Object.entries(obj).length);



// console.log(
//   obj["adress"]
//     .split("")
//     .map((el, index) => {
//       if (index % 2 === 0) {
//         return el.toUpperCase();
//       } else {
//         return el;
//       }
//     })
//     .join("")
// );

///////////////////////////////////

//*  1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.keys(obj).length);

//*  2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя спообами: через квадратные скобки и как свойство объекта.

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(obj.c);
// console.log(obj["c"]);

//*  3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// let obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
// };
// console.log(obj.Атай, obj.Ширин);

//*   4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.

// let obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
// };
// obj.Атай = "500";
// console.table(obj);

//*   5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.

// let obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
// };
// obj.Медет = "1500";
// console.log(obj);

//*   6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.

// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(obj.Атай.salary);

//*  7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let obj = {
//   1: 'понедельник',
//   2: 'вторник',
//   3: 'среда',
//   4: 'четверг',
//   5: 'пятница',
//   6: 'суббота',
//   8: 'воскресенье',
// };
// console.log(obj["3"]);

//*  8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// let num = "4";
// let day = {
//   1: "понедельник",
//   2: "вторник",
//   3: "среда",
//   4: "четверг",
//   5: "пятница",
//   6: "суббота",
//   8: "воскресенье",
// };
// console.log(day[num]);

//*  9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.

// let obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: {
//     salary: "500",
//   },
// };
// console.log(Object.keys(obj));

//*  10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.

// let obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: {
//     salary: "500",
//   },
// };
// console.log(Object.values(obj));

//*  11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

// let obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: {
//     salary: "500",
//   },
// };
// console.log(Object.entries(obj));

//*  12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// const task1 = (obj) => {
//   if (obj.name.length % 2 === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// console.log(task1({ name: "Igor" }));

//*  13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// const task2 = (arr) => {
//   return arr
//     .map((el) => {
//       return el.id;
//     });
// };
// console.log(task2([{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }]));

//*  14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25.
//  Поменяйте значение name на Azat.

// let task3 = (obj) => {
//   obj.age = "25";
//   obj.name = "Azat";
//   return obj;
// };
// console.log(task3({ name: "Igor" }));

//*  15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%.
//  Если это не так, сделайте скидку на 7%. Обновите объект

// let obj = {
//   name: "headphones",
//   price: 105,
//   discount: 0,
// };
// let price = obj.price;
// if (price > 100) {
//   obj.price = price / 100 * 10;
// } else {
//   obj.price = price /100 * 7;
// }
// console.log(obj);

// TODO5  Дан массив с объектами: [
// {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
// {mark: 'Audi', year: 1996, price: 2500, sale: 0},
// {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
// {mark: 'BMW', year: 2015, price: 18000, sale: 0},
// {mark: 'Porsche', year: 2020, price: 120000, sale: 0},

// ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

// const cars = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// cars.map((el) => {
//   if (el.year < 2007) {
//     el.sale = el.price /100 * 20
//     return el
//   }
// });
// console.log(cars);

//TODO1 Создайте функцию checkTask(arr), которая принимает в аргументы массив состоящий из строк и выводит в консоль новый массив состояший только из первых и последних букв каждой строки.
// Например, для массива:
// ['hi', 'goodbye', 'smile']
// Вывод будет:
// ['hi', 'ge', 'se']

// function checkTask(arr) {
//   const res = arr.map((el) => {
//     const arr1 = el[0];
//     const arr2 = el[el.length - 1];
//     return arr1 + arr2;
//   });
//   console.log(res);
// }
// let arr = ["hi", "goodbye", "smile"];
// checkTask(arr);

//TODO2 Дан массив с числами. Проверьте то, что все элементы в массиве положительные every
// let arr = [5, 6, 7, 8, 9];

// let arr = [5, 6, 7, 8, 9];
// console.log(
//   arr.every((el) => {
//     return el > 0;
//   })
// );

//TODO3 Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().

// let total = [1, 5, 0, 3, 6];
// let a = total.reduce((acc, el) => acc + el);
// alert(a);

// const people = [
//     { name: 'Harry', age: 13, salary: 250, status: 'alive' },
//     { name: 'Ron', age: 12, salary: 300, status: 'alive' },
//     { name: 'Hermiona', age: 16, salary: 250, status: 'alive' },
//     { name: 'Hagrid', age: 15, salary: 250, status: 'alive' },
//     { name: 'Severus', age: 23, salary: 400, status: 'alive' },
//     { name: 'Tom', age: 20, salary: 500, status: 'dead' },
// ];

// TODO4  Дан массив let lengthName = ['Patricia' , William , Barbara , James , Chloe , Elizabeth ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];
// let res = lengthName.map((el) => {
//   return el.length;
// });
// console.log(res);

///////////////////////////////

// Задание №5
// Дан массив с объектами
// let users = [
// { name: 'Jack', age: 35, work: 'IT-backend developer' },
// { name: 'Helen', age: 35, work: 'Nurse' },
// { name: 'Bob', age: 35, work: 'Driver' },
// { name: 'Jessica', age: 35, work: 'IT-frontend developer' },
// { name: "Hel'ga", age: 35, work: 'IT-HR' },
// ];
//? задача, создать функцию, которая будет рассылать сообщения пользователям,
//? сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям,
//? которые тем или иным образом относятся к IT-сфере

// let users = [
//   { name: "Jack", age: 35, work: "IT-backend developer" },
//   { name: "Helen", age: 35, work: "Nurse" },
//   { name: "Bob", age: 35, work: "Driver" },
//   {name: "Uson", work: "it"},
//   { name: "Jessica", age: 35, work: "IT-frontend developer" },
//   { name: "Hel'ga", age: 35, work: "IT-HR" },
// ];
// let res = users.filter((el) => {
//   if (el.work.includes("IT") || el.work.includes("it")) {
//    alert(`Уважаемый(ая) ${el.name}, приглашаем вас посетить наш магазин компьютерной техники! Текущая акция вас ждет.`)
//   }
// });
// console.log(res);

// TODO 11
// Дан массив следущего вида: [
//   {title: 'Post 1', author: 'User 1', likes: 549},
//   {title: 'Post 2', author: 'User 1', likes: 67},
//   {title: 'Post 3', author: 'User 3', likes: 345},
//   {title: 'Post 4', author: 'User 6', likes: 1023},
//   {title: 'Post 5', author: 'User 2', likes: 150},
//   ],
//?   задача: вернуть массив, в котором будут только названия 3х самых популярных
//?   постов(ориентироваться на лайки)(использовать метод sort())

// let posts = [
//   { title: "Post 1", author: "User 1", likes: 549 },
//   { title: "Post 2", author: "User 1", likes: 67 },
//   { title: "Post 3", author: "User 3", likes: 345 },
//   { title: "Post 4", author: "User 6", likes: 102 },
//   { title: "Post 5", author: "User 2", likes: 150 },
// ];

// let res = posts.sort((a, b) => {
//   return b.likes - a.likes;
// });
// console.log(res.slice(0, 3));

// TODO5  Дан массив с объектами: [
// {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
// {mark: 'Audi', year: 1996, price: 2500, sale: 0},
// {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
// {mark: 'BMW', year: 2015, price: 18000, sale: 0},
// {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ],
//? задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

// const cars = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// cars.map((el) => {
//   if (el.year < 2007) {
//     el.sale = el.price /100 * 20
//     return el
//   }
// });
// console.log(cars);

// Задание №6
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(str) {
//   let res =
//     str.split("").join(" ").split(" ").reverse().join("") ===
//     str.split(" ").join("");
//   console.log(res);
// }
// checkTask("my gym");

// let words = "анна";
// let palindrome = true;

// for (let i = 0; i < words.length / 2 && palindrome; i++) {
//     if (words[i] !== words[words.length - i - 1]) {
//         palindrome = false;
//     }
// }

// console.log(palindrome);

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   } else {
//     return "Неправильный оператор";
//   }
// }
// console.log(basicOp("+", 4, 7)); 
// console.log(basicOp("-", 15, 18)); 
// console.log(basicOp("*", 5, 5)); 
// console.log(basicOp("/", 49, 7));
