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
// Math.pow- выводит куб
// Math.sqrt - выводит квадрат

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
//! console.log(str.charAt(1));
// Метод charAt() возвращает символ, находящийся на указанной позиции в строке. Это полезно при работе с отдельными символами в строке.
//! console.log(str.includes("q"));
//Этот метод полезен для быстрой проверки наличия определенной подстроки в строке. Если подстрока найдена, метод includes() возвращает true, в противном случае - false.
//! console.log(str.trimStart());
//Этот метод полезен для очистки строки от пробельных символов в начале строки. Он возвращает новую строку без пробельных символов в начале исходной строки.
//! console.log(str.concat(str1));
//В JavaScript метод concat() используется для объединения двух или более массивов, создавая новый массив, который содержит элементы из исходных массивов.

//? let array1 = [1, 2, 3];
//? let array2 = [4, 5, 6];
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
