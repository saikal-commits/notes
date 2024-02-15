//! область видимости

//* глобальная область видимости
//* функциональная область видимости
//* блочная область видимости

// let str = "hello world"; //область видимости   //пространство
// console.log(str);   // глобальная область видимости
// {
//   let str = "welcome to js"; // дочерний область видимости
//   console.log(str);
// }

//! destructure
//[]
//{}

//? array
// let arr = ["Uson", "Aidai", "Umar", "Saykal"];
// let [el1, el3] = arr;
// console.log(el1, el3);

//spread operator = ...   //!копирует все что есть внутри
// let [...all] = arr
// console.log([...arr]);

// rest operator = ...                 //!выводит остатки
// let [el1, el3, ...other] = arr;
// console.log(other);

//? object
// let obj = {
//   name: "Uson",
//   age: 16,
//   adress: "Bishkek",
//   job: "Front end Developer",
// };

// let { name } = obj;
// console.log(name);

// let { name, age, adress, job } = obj;
// name = "Umar";
// console.log(name);
