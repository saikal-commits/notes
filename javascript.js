// Назаркулов Рамазан, [11.02.2024 10:12]
// var:

// Переменные, объявленные с помощью var, имеют функциональную область видимости. Это означает, что они доступны только внутри функции, в которой были объявлены.
// Переменные var поднимаются (hoisted) в начало своей области видимости, поэтому их можно использовать до их фактического объявления.
// Значение переменной var можно изменить и переназначить.
// let:

// Переменные, объявленные с помощью let, имеют блочную область видимости. Это означает, что они доступны только в блоке кода, в котором были объявлены (например, внутри цикла или условного оператора).
// Переменные let также поднимаются (hoisted), но их не можно использовать до их фактического объявления (они останутся в "зоне темени").
// Значение переменной let можно изменить, но не переназначить.
// const:

// Переменные, объявленные с помощью const, также имеют блочную область видимости.
// Переменные const должны быть инициализированы при объявлении, и их значение не может быть изменено после этого.
// Они не могут быть переназначены, но если это объект или массив, содержимое объекта или массива может быть изменено.

// Назаркулов Рамазан, [11.02.2024 10:28]
// push(): Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.
// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr); // [1, 2, 3, 4, 5]
// pop(): Удаляет последний элемент из массива и возвращает его.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let removedElement = arr.pop();
// console.log(removedElement); // 3
// console.log(arr); // [1, 2]
// shift(): Удаляет первый элемент из массива и возвращает его.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let removedElement = arr.shift();
// console.log(removedElement); // 1
// console.log(arr); // [2, 3]
// unshift(): Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
// javascript
// Copy code
// let arr = [2, 3];
// arr.unshift(0, 1);
// console.log(arr); // [0, 1, 2, 3]
// slice(): Возвращает новый массив, содержащий выбранные элементы массива, без изменения исходного массива.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 4);
// console.log(slicedArr); // [2, 3, 4]
// console.log(arr); // [1, 2, 3, 4, 5]
// splice(): Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые элементы.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1); // Удаляем один элемент, начиная с индекса 2
// console.log(arr); // [1, 2, 4, 5]

// arr.splice(1, 0, 'a', 'b'); // Добавляем 'a' и 'b' в индекс 1
// console.log(arr); // [1, 'a', 'b', 2, 4, 5]
// Это лишь небольшой набор методов. Другие важные методы включают concat(), forEach(), map(), filter(), reduce(), find(), findIndex(), sort() и т. д. Каждый из этих методов предоставляет различные способы манипулирования и обработки массивов в JavaScript.

// User
// Это лишь небольшой набор методов. Другие важные методы включают concat(), forEach(), map(), filter(), reduce(), find(), findIndex(), sort() и т. д. Каждый из этих методов предоставляет различные способы манипулирования и обработки массивов в JavaScript.
// ChatGPT
// Действительно, в JavaScript существует множество методов для работы с массивами, включая те, которые вы упомянули. Давайте рассмотрим их:

// concat(): Объединяет два или более массивов и возвращает новый массив.
// javascript
// Copy code
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr); // [1, 2, 3, 4]
// forEach(): Выполняет указанную функцию один раз для каждого элемента в массиве.
// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.forEach(function(element) {
//     console.log(element);
// });
// // Выведет:
// // 1
// // 2
// // 3
// map(): Создаёт новый массив с результатом вызова указанной функции для каждого элемента исходного массива.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let mappedArr = arr.map(function(element) {
//     return element * 2;
// });
// console.log(mappedArr); // [2, 4, 6]
// filter(): Создаёт новый массив, содержащий элементы исходного массива, для которых функция фильтрации возвращает true.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let filteredArr = arr.filter(function(element) {
//     return element % 2 === 0;
// });
// console.log(filteredArr); // [2, 4]
// reduce(): Применяет функцию к аккумулятору и каждому значению массива (слева направо), чтобы свести его к одному значению.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0); // начальное значение аккумулятора равно 0
// console.log(sum); // 15
// find(): Возвращает значение первого найденного в массиве элемента, удовлетворяющего заданному условию.
// javascript
// Copy code
// let arr = [5, 12, 8, 130, 44];
// let found = arr.find(function(element) {
//     return element > 10;
// });
// console.log(found); // 12
// findIndex(): Возвращает индекс первого найденного в массиве элемента, удовлетворяющего заданному условию.
// javascript
// Copy code
// let arr = [5, 12, 8, 130, 44];
// let foundIndex = arr.findIndex(function(element) {
//     return element > 10;
// });
// console.log(foundIndex); // 1
// sort(): Сортирует элементы массива на месте и возвращает отсортированный массив.
// javascript
// Copy code
// let arr = [3, 1, 4, 1, 5, 9, 2, 6];
// arr.sort(function(a, b) {
//     return a - b;
// });
// console.log(arr); // [1, 1, 2, 3,

// Назаркулов Рамазан, [11.02.2024 10:30]
// charAt(): Возвращает символ по указанному индексу строки.
// charCodeAt(): Возвращает код Unicode указанного символа в строке.
// concat(): Объединяет строки и возвращает новую строку.
// indexOf(): Возвращает индекс первого вхождения указанного значения в строке.
// lastIndexOf(): Возвращает индекс последнего вхождения указанного значения в строке.
// slice(): Извлекает часть строки и возвращает новую строку без изменения исходной.
// substring(): Возвращает часть строки между двумя индексами.
// substr(): Возвращает указанное количество символов из строки, начиная с указанной позиции.
// toUpperCase(): Преобразует все символы строки в верхний регистр.
// toLowerCase(): Преобразует все символы строки в нижний регистр.
// trim(): Удаляет пробельные символы с начала и конца строки.
// startsWith(): Проверяет, начинается ли строка с указанной подстроки.
// endsWith(): Проверяет, заканчивается ли строка указанной подстрокой.
// includes(): Проверяет, содержит ли строка указанную подстроку.
// repeat(): Повторяет строку указанное количество раз.
// replace(): Заменяет подстроку на другую строку.
// split(): Разбивает строку на массив подстрок по указанному разделителю.
// padStart(): Дополняет строку пробельными символами до указанной длины с начала.
// padEnd(): Дополняет строку пробельными символами до указанной длины с конца.
// match(): Ищет совпадения в строке с помощью регулярного выражения и возвращает массив результатов.

//* console.log('     '.length);

// data types - тип данных
// number - 12345768  34546.7   *номер*
// string - "fdghdkj 1213245 & # @ .,       "   *строка*
// boolean - true,false   *верно /не верно*
// null - null    *пустота*
// undefined - неизвестно   *неизвестно*
// bigint - 1n  *большие числа*
// symbol - symbol('hello world')
// object - {}   *объект*

// let a = {
//     name: 'saykal',
//     number: 9965512425,
//     adress: 'bishkek',
//     email: 'saukalsar',
//     password:'tyewuiwuiwq'
// }
// console.log(a);

// console.log(typeof 2024); //number
// console.log(typeof true); //boolean
// console.log(typeof 'hello'); //string
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof 432435n); //bigint
// console.log(typeof Symbol()); //symbol
// console.log(typeof{}); //object

// (), [], {}

// let a = '134526534'
// console.log(typeof a);

//+
//console.log(5 + 5);

//-
//console.log(5 - 5);

// *
//console.log(5 * 5);

// /
//console.log(20 / 5);

// **
//console.log(5 ** 2);

// %
//console.log(200 % 15);

// 200,15 - оперант
// % - оператор

//операторы - термины - Бинарный, Унарный, Операйд

// операйнд (значение или аргумент)
// бинарный (Операции, которые требуют наличия двух операндов)   console.log(5 - 5);
// унарный (операции, имеющие один операнд (аргумент))    console.log(-50);

//NaN (Not A Number) - Глобальное свойство NaN является значением, представляющим не-число - invalid number - typof = number
// (не ошибка)

// console.log('2024'); - string
// console.log(+'2024'); - number
// console.log('hello world' * 2); - NaN
// console.log(typeof NaN); - number
// console.log(null + undefined); - NaN

//! Переменный
//!1 var
//!2 let
//!3 const

//! ПОЧЕМУ ПЕРМЕННЫЕ НЕ ВХОДЯТ В ТИП ДАННЫХ ?
//! ПОТОМУ ЧТО ЕСТЬ ВСЕГО 8 ТИПОВ ДАННЫХ И ПЕРЕМЕННЫЕ В НИХ НЕ ВХОДЯТ

//старая версия переменной*
// var a = 2024
// console.log(a);

//новая версия переменной*
// let a = "hello world";
// a = 'welcome to js'
// a = 'js30'
// console.log(a);

// неизмененная*
// const a = 'hello world'
// console.log(a);

//? camelСase
// let motionWebAcademy = "";
// каждое слово в переменной пишется с заглавной буквы. Например: MySuperVar

//? snake_case
// let motion_web_academy = ""
// snake_case - это стиль написания составных слов, при котором слова разделяются символом подчеркивания _, и все буквы пишутся в нижнем регистре.

// let str = "hello world"
// str = "js"
// console.log(str);
// const str = "hello world";
// str = "js";
// console.log(str);

// console.log(name);
// var name ="js30";
// console.log(a);
// let a = "hello world";
// console.log(a);
// const a = "hello world";

//? data types 8 - тип данных

// number - 1234567890, 34.2, 1.3
// string - "frgthy 3456 & ,. ", 'edrfg345',  fghn4556
// boolean - true,false
// null - null
// undefined - белгисиз нерсе
// bigint - 1n - чон сандар
// symbol - Symbol("hello world")
// object - {}

// typeof
// console.log(typeof 1234); // number
// console.log(typeof "sdfgh 2345    "); // string
// console.log(typeof true); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof 34567n); // bigint
// console.log(typeof Symbol()); // symbol
// console.log(typeof {}); // object
// let a = false
// console.log(typeof a);
// +
// console.log(12345 + 4532);
// -
// console.log(5 - 5);
// *
// console.log(5 * 5);
// /
// console.log(5 / 5);
// **
// console.log(5 ** 3);
// %
// console.log(200 % 15);
// NaN -- not a number - не чиcло -- invalid number -- typof = number
// oparator - терминдер - Бинарный, Унарный, операнд
// console.log(null + undefined);
// alert();
// prompt();
// confirm();
// let a = prompt("your name?");
// console.log(a);
// let a = confirm("вам есть 18?");
// console.log(a);

//! Number Method - Методы
//? floor() - 1.1, 1.9 = 1
// console.log(Math.floor(1.2));
//? ceil() - 1.1, 1.9 = 2
// console.log(Math.ceil(1.9));
//? round() - 1.1 = 1, 1.9 = 2
// console.log(Math.round(1.6));
//? abc() - -12345 = 12345
// console.log(Math.abs(1.1234));
//? pow() - power - ***
// console.log(Math.pow());
//? random() - 0,1 random
// console.log(Math.random());
//? sqrt() - **
// console.log(Math.sqrt(64));
//? trunc() -1.234567 = 1
// console.log(Math.trunc(234.234567898765432));

// Math.ceil - округляет верхние числа 1.3 -- 2
// Math.floor-округляет нижние числа 1.8 -- 1
// Math.round- округляет как и нижние числа так и верхние 1.1-1  2.8 - 3
// Math.random- 0,9879
// Math.abс- отрицательное на положительное
// Math.pow-  возводит определенную степень
// Math.sqrt - выводит корень

// is Integer() - выводит цельные числа

//////////////////////

// function isInteger(num) {
//     return parseInt(num) === num;
//   }

//   console.log(isInteger(6.7));

//! ОПЕРАТОР

//? Терминдер: "Унарный", "Бинарный",  "Операнд",

//! Операнд - Бул операторго тиешелуу болгон же колдонулган нерселерди айтабыз,
// жана аларды "Аргументтер" деп дагы аташат

//? Мисалдар:
// let user = 30 - 6; - Число 30 жана 6 - бул операндалар, анткени алар минус операторуна колдонулуп атат.
// либо - же болбосо
// let user = h + y; - Перменныйлар h жана y - бул операндалар
//! Бинарный деп биз эки операндага тиешелуу операндаларды айтабыз,
// Биздин мисалда, алып салуу жана кошуу бинарный оператор.

// let user = 30 % 6;
// console.log(user);

//! Унарный деп биз бир гана операндага тиешелуу болгон операторду атайбыз.
// МИСАЛЫ:

// let user = -30;
// console.log(user);

//! логические операторы
// && -- и
// || -- или
//. !-- не

//!условные операторы
// if ... else
// тернарный оператор

//////////////////////////////////////

// Математикалык опараторлор:
// + = кошуу
// - = Алып салуу
// * = кобойтуу
// / = Болуп салуу
// % = Болуунун калган болугун алуу
// ** = Даражага которот, озуно озу кобойтот

//! Операторлордун мумкунчулуктору

//? Кошуу операторун саптарга колдонуу
// let resultOne = "JavaScript" + " HTML " + "CSS";
// console.log(resultOne);

// let resultTwo = "JavaScript " + 58;
// console.log(resultTwo);
// console.log(typeof resultTwo);

// let resultThree = 58 + " JavaScript";
// console.log(resultThree);

// let resultFour = 2 + "2";
// console.log(resultFour);

//Сап кошууга чейинки операциялар
// адаттагыдай эле аткарылат
// let resultFive = 25 - 20 + " Дастан";
// console.log(resultFive);

// Башка операторлордун иштеши
// let resultOne = "25" - 5;
// console.log(resultOne);
// console.log(typeof resultOne);

// //же
// //
// let resultTwo = 10 * "sdfghb";
// console.log(resultTwo);
// console.log(typeof resultOne);

// // //Жараксыз иш
// let resultThree = 3 * "JavaScript";
// console.log(resultThree); //Кайра  NaN келет
// console.log(typeof resultOne);

// Бирдиктүү(Унарный) оператор +

//Саптар менен
// let resultOne = +"25";
// console.log(resultOne);
// console.log(typeof resultOne);
//
// Сандар менен
// let resultTwo = +10;
// console.log(resultTwo);
// console.log(typeof resultTwo);

//Мисал
// let users = "25";
// let admins = "10";
// console.log(users + admins);
// console.log(+users + +admins);

//Узун жазуу
// console.log(Number(users) + Number(admins));

//Операторлордун артыкчылыгы
//Ар кандай артыкчылык
// let resultOne = 2 - 1 * 5;
// console.log(resultOne);
// let resultTwo = (2 - 1) * 5;
// console.log(resultTwo);
// Окшош эле артыкчылык
// let resultThree = 2 - 1 + 5;
// console.log(resultThree);

//! String - строка - сап >>> "", '', ``
// let age = 24;
// let name = "js"
// console.log(`my names is ${name}, my age is ${age}`);
// console.log(str.length);
// console.log(str[]);
// length - узундугун чыгарып берет - элементтердин санын - узундугу
// index[] - 0,1,2 .......

// let str = "Bishkek";
// console.log(str[str.length - 1]);
// console.log(str[Math.floor(str.length / 2)]);
//! toUpperCase()
// console.log(str.toUpperCase());
//! toLowerCase()
// console.log(str.toLowerCase());
//! includes()
// console.log(str.includes("p"));
//! indexOf()
// console.log(str.indexOf("p"));
//! lastIndexOf()
// console.log(str.lastIndexOf("w"));
//! repeat()
// console.log(str.repeat(10));

// let str1 = "is cool"

//! console.log(str.toUpperCase());
//toUpperCase() - это метод в JavaScript, который применяется к строкам и используется для преобразования всех символов строки в верхний регистр (заглавные буквы).
//! console.log(str.toLowerCase());
//если вы хотите инвертировать регистр всех букв в строке (перевести заглавные буквы в строчные и наоборот), можно использовать методы toUpperCase()
//! console.log(str.indexOf("k"));
//Этот метод полезен для определения позиции символа или подстроки в строке. Он возвращает -1, если искомый элемент не найден.
//! console.log(str.lastIndexOf("k"));
//Этот метод полезен для поиска последнего вхождения символа или подстроки в строке, начиная с конца строки. Если элемент не найден, он возвращает -1.
// !console.log(str.charAt(1));
// Метод charAt() возвращает символ, находящийся на указанной позиции в строке. Это полезно при работе с отдельными символами в строке.
// !console.log(str.includes("q"));
//Этот метод полезен для быстрой проверки наличия определенной подстроки в строке. Если подстрока найдена, метод includes() возвращает true, в противном случае - false.
// !console.log(str.trimStart());
//Этот метод полезен для очистки строки от пробельных символов в начале строки. Он возвращает новую строку без пробельных символов в начале исходной строки.
//! console.log(str.concat(str1));
//В JavaScript метод concat() используется для объединения двух или более массивов, создавая новый массив, который содержит элементы из исходных массивов.

//? let array1 = [1, 2, 3];
// ? let array2 = [4, 5, 6];
//? let newArray = array1.concat(array2);
//? console.log(newArray); // Выведет [1, 2, 3, 4, 5, 6]

//! console.log(str.repeat());
//Метод repeat() позволяет повторить строку заданное количество раз.
//! console.log(str.slice());
//Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки
//? slice() -- 2parametr:
//?1 - start
//?2 - end

// console.log(str.replaceAll("k", "a"));
// console.log(str.substring(-1));
// console.log(str.substr(-1));
// console.log(str.big());
// console.log(str.sup());
// console.log(str.link());
// console.log(str.sub());
// console.log(str.bold());
// console.log(str.fontsize());

// let num = 2024;
//! number >>> string
//1 toString()
// console.log(num.toString());
//2 String()
// console.log(String(num));
//3 + ""
// console.log(num + "");
// let str = "2023";
//! string >>> number
//! Number()
// console.log(Number(str));
//! parseInt()
// console.log(parseInt(str));
//! +str
// console.log(+"srf");

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
