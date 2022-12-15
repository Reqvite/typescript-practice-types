// let test: string = 'world';
// alert(test);

// let text: string = 'abc';

// let phone: number = 323213213;

// let ok: boolean = true;

// let text: string;

// text = 'abc';

// console.log(text);

// //////////////////////// OPERATION

// let test1: number = 123;
// let test2: number = 456;

// console.log(test1 + test2);

// let test1: string = '123';
// let test2: string = '456';

// let test3: string = test1 + test2;
// console.log(test3);

// let test1: number = 123;
// let test2: number = 456;

// let test3: string = test1 + ' ' + test2;
// console.log(test3);

// let test1: number = 123;
// let test2: number = 456;
// let test3: string = '!';

// let test4: string = test1 + test2 + test3;
// console.log(test4); 579!

// let test1: number = +'123';
// let test2: number = +'456';

// console.log(test1 + test2); 579

// /////////////////////////////////////ARRAY TYPESCRIPT

// let arr: number[] = [1, 2, 3, 4, 5];

// console.log(arr);

// let arr: Array<string> = ['a', 'b', 'c'];

// console.log(arr);

// /////////////////////////////////////OBJECT TYPESCRIPT

// let user = { name: 'john', age: 30 };
// user = '123' //error
// user = { name: 'eric', age: 40, salary: 300 };  error
// user = { name: 'eric', age: 40 };

// let date = { year: 2025, month: 12, day: 31 };
// date.isLeap = true; Property 'isLeap' does not exist on type

// console.log(date);

// let date = { year: 2025, month: 12, day: 31 };
// date = { year: 2025, month: 12 }; Property 'day' is missing in type

// let date = { year: 2025, month: 12, day: 31 };
// date = { year: 2025, month: 12, date: 7 }; Type '{ year: number; month: number; date: number; }' is not assignable to type '{ year: number; month: number; day: number; }'.

// /////////////////////////////////////typescript LOOPS

// for (let i: number = 0; i <= 10; i++) {
//   console.log(i);
// }

// let arr: number[] = [1, 2, 3, 4, 5];

// for (let elem of arr) { default
//   console.log(elem);
// }

// let obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) { default
//   console.log(key);
// }

// refactoring
// let res: number = 0;

// for (let i: number = 0; i < 100; i++) {
//   res += i;
// }

// console.log(res);

// let i: number = 0;
// let res: number = 0;

// while (i < 100) {
//   res += i;
//   i++;
// }

// console.log(res);

// let arr: number[] = [1, 2, 3, 4, 5];
// let res: number = 0;

// for (let elem of arr) {
//   res += elem;
// }

// console.log(res);

// let obj = { a: 1, b: 2, c: 3 };
// let res: number = 0;

// for (let key in obj) {
//   let elem: number = obj[key];
//   res += elem;
// }

// console.log(res);

// /////////////////////////////////////FUNCTION TS

// function sum(x: number, y: number) {
//   return x + y;
// }

// function sum(arr: number[]):number {
//   let res: number = 0;
//     for (let num of arr) {

//     res += num;
//   }

//   return res;
// }

// /////////////////////////////////////VOID TYPE TS

// function func(elem: HTMLElement, text: string):void {
//   elem.textContent = text;
// }

// /////////////////TUPLES in TypeScript

// const arr: [number, number] = [1998, 24];

// const arr: [number, string] = [1998, 'September'];

// const arr: [number, number, number, string] = [1998, 5, 22, 'JOHN'];

// let time: [number, number, number] = [12, 59, 59];
// time[0] = 13;
// console.log(time);

// let time: [number, number, number] = [12, 59, 59];
// time[0] = '01'; Type 'string' is not assignable to type 'number'.
// console.log(time);

// let time: readonly [number, number, number] = [12, 59, 59];
// time[0] = 13; Cannot assign to '0' because it is a read-only property.
// console.log(time);

// let date: [number, number, number, string?] = [2022, 10, 10];

// date = [2022, 10, 10, 'john'];

// let time: [number, number, number] = [1221, 1998, 59];

// let [year, date, phone] = time;

// let tpl: [string, string, ...number[]];

// tpl = ['a', 'b', 1, 2, 3, 4, 5, 100];

// let tpl: [number, boolean, ...string[]];

// tpl = [11, false, 'b', 'a']

// /////////////////////////////////////////////// ENUM

// enum Season {
//   Winter,
//   Spring,
//   Summer,
//   Autumn,
// }

// let current: string = Season[0];
// console.log(current); Winter

// let idx: number = Season.Spring;

// console.log(idx); //1

// let current: Season = Season.Winter;
// console.log(current); //0

// let current: Season = 3;

// let current: Season = 'str'; // error

// let current: Season = 3;
// console.log(typeof current); //number

// enum Season {
//   Winter = 1,
//   Spring = 2,
//   Summer = 3,
//   Autumn = 4,
// }

// let current: Season = Season.Winter;
// console.log(current); //1

// enum Season {
//   Winter = 5,
//   Spring,
//   Summer,
//   Autumn,
// }

// let current: Season = Season.Summer;
// console.log(current); //7

// enum Season {
//   Winter = 'winter',
//   Spring = 'spring',
//   Summer = 'summer',
//   Autumn = 'autumn',
// }

// let current: Season = Season.Summer;
// console.log(current); //summer

// enum DaysOfTheWeek {
//   Sunday,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }

// //////////////////////////////////////////////ANY

// let test: any;

// test = '123';

// test = 123;

// let test1: number = 123;
// let test2: string = 'abc';
// let test3: any;

// test3 = test1;
// console.log(test3);

// test3 = test2;
// console.log(test3);

// let arr: any[] = [1, '2', '3', 4, 5];
// console.log(arr);

// //////////////////////////////////COMBINE TYPE

// let test: string | number;

// test = 'fdwfewfew';

// test = 122121;

// test = {}; //Type '{}' is not assignable to type 'string | number'.

// let phone: number | null;

// phone = 3233213213211;

// phone = null;

// phone = []; //Type 'never[]' is not assignable to type 'number'.

// let test: string | number | boolean;

// test = true;
// test = 3231321;
// test = '231321321';
// test = {}; // Type '{}' is not assignable to type 'string | number | boolean'.

// ///////////////////////////////Type aliases

// type str = string;

// const test: str = 'feerggrebtbe';

// type stumber = string | number;

// let test: stumber;
// test = 132321213132;
// test = 'rereewrewrewr';

// type bolull = boolean | null;

// let test: bolull;

// test = true;
// test = null;
// test = 32341324123; //Type '32341324123' is not assignable to type 'bolull'.

// type nullUndefined = null | undefined;

// let test: nullUndefined;

// test = null;
// test = undefined;
// test = '32312213213132' //Type '"32312213213132"' is not assignable to type 'nullUndefined'

// /////////////////////String literal type

// let str: 'success' | 'error';

// str = 'success';

// str = 'error';

// str='321312321321' // Type '"321312321321"' is not assignable to type '"success" | "error"'.

// let alertText: 'success' | 'error' | 'warning';

// alertText = 'warning';

// type message = 'success' | 'error';

// let str: message;

// str = 'success';
// str = 'error';

// type alert = 'success' | 'error' | 'warning';

// ///////////////////////////////// Built-in object types in TypeScript

// let date: Date = new Date(2030, 11, 31);

// let reg: RegExp = /.+?/;

// let elem: HTMLElement;

// let elem: HTMLElement | null = document.querySelector('div');
// console.log(elem);

// <div></div>
// <div></div>
// <div></div>

// let lst: NodeList = document.querySelectorAll('div');

// let currenDate: Date = new Date();

// console.log(currenDate);

// const promise = new Promise<string>((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve('32321132132321');
//   } else {
//     reject('error');
//   }
// });

// promise
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// const arr: number[] = [1, 2, 3, 4];

// const collection: number[] = arr.map(el => el + 1);
// console.log(collection);

// const mySet = new Set<string>();

// mySet.add('3232');

// ////////////////////////////Object Structure

// let user: { name: string; age: number };

// user = { name: 'john', age: 30 };

// let user: { name: string; age: number } = { name: 'john', age: 30 };

// let user: { name: string; age?: number };

// user = { name: 'john' };

// let date : { year: number, month: number, day?: number } = { year: 2025, month: 12 }

// /////////////////////////////////////INTERFACE

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = { name: 'john', age: 30 };

// interface Employee {
//   name: string;
//   age: number;
//   salaryday: number;
// }

// let first: Employee = {name: 'John', age: 22, salaryday: 2000}
// let second: Employee = { name: 'Ban', age: 32, salaryday: 1000 }

// interface Time {
//   hour: number;
//   minute: number;
//   second?: number;
// }

// let currenDate: Time = {
//     hour: 22,
//     minute: 32,
// }

// let Date1: Time = {
//   hour: 22,
//     minute: 32,
//   second: 32
// };

// /////////////////////////////////////////////////////////Arrays in objects

// let product: {
//   name: string;
//   colors: string[];
// };

// product = {
//   name: 'notebook',
//   colors: ['red', 'black', 'gray'],
// };

// interface Product {
//   name: string;
//   colors: string[];
// }

// let prod: Product = {
//   name: 'notebook',
//   colors: ['red', 'black', 'gray'],
// };

// interface Country {
//   capital: string;
//   city: string[];
//   population?: number;
// }

// let ukraine: Country = {
//   capital: 'Kiev',
//   city: ['Dnipro', 'Lviv'],
// };

// /////////////////////////////////////Complex objects in TypeScript

// interface User {
//   name: string;
//   age: number;
//   parents: {
//     mother: string;
//     father: string;
//   };
// }

// let user: User = {
//   name: 'john',
//   age: 30,
//   parents: {
//     mother: 'jane',
//     father: 'eric',
//   },
// };

// interface NewEvent {
//   name: string;
//   time: {
//     start: string;
//     finish: string;
//     phone?: number;
//   };
// }
// let ev: NewEvent = {
//   name: 'my new event',
//   time: {
//     start: '2025-11-01',
//     finish: '2025-12-31',
//     phone: 33213223112,
//   },
// };

// interface Employee {
//   name: string;
//   position: {
//     name: string;
//     salary: number;
//   };
//   addr: {
//     country: string;
//     city: string;
//   };
// }

// let andrew: Employee = {
//   name: 'andrew',
//   position: {
//     name: 'feefef',
//     salary: 3232321,
//   },
//   addr: {
//     country: '32332',
//     city: '321321213',
//   },
// };

// ///////////////////////Objects in Objects in TypeScript

// interface Period {
//   date1: Date;
//   date2: Date;
// }

// let period: Period = {
//   date1: new Date(2030, 11, 31),
//   date2: new Date(2020, 11, 31),
// };

// interface City {
//   name: string;
// }

// interface User {
//   name: string;
//   age: number;
//   city: City;
// }

// let user: User = {
//   name: 'john',
//   age: 30,
//   city: { name: 'london' },
// };

// ///////////////////////////INTERFACE IN INTERFACE 1 example

// interface Position {
//     name: string;
//     salary: number;
// }

// interface Addr {
//     country: string;
//     city: string;
// }
// interface Employee{
//     name: string;
//     position: Position;
//     addr: Addr;
// }

// let andrew: Employee = {
// 	name: 'andrew',
//     position: {
//         name: 'dewfewfw',
//         salary: 32323232
//     },
//     addr: {
//         country: 'dfsfsfsds',
//     city: '3321321',
//     }
// };
// ///////////////////////////INTERFACE IN INTERFACE 2 example

// interface Father {
//   name: string;
//   age: number;
//   parents?: null;
// }
// interface Mother {
//   name: string;
//   age: number;
//   parents?: null;
// }
// interface Parents {
//   mother: Mother;
//   father: Father;
// }

// interface User {
//   name: string;
//   age: number;
//   parents: Parents;
// }

// let user: User = {
//   name: 'john',
//   age: 30,
//   parents: {
//     mother: {
//       name: 'jane',
//       age: 30,
//       parents: null,
//     },
//     father: {
//       name: 'eric',
//       age: 30,
//       parents: null,
//     },
//   },
// };

// ////////////////////////////////////////Arrays of objects in TypeScript

// interface User {
//   name: string;
//   age: number;
// }

// let arr: User[] = [];

// arr.push({ name: 'lol', age: 232 });

// console.log(arr);

// let arr: Date[] = [];

// arr.push(new Date(2030, 11, 31));
// arr.push(new Date(2020, 11, 31));

// console.log(arr);

// let arr: HTMLElement[] = [];

// let lst: NodeList = document.querySelectorAll('div');
// let arr: HTMLElement[] = Array.from(lst);

// /////////////////////
// interface Worker {
//   name: string;
//   salary: number;
// }

// let employeers: Worker[] = [];

// employeers.push({ name: 'john', salary: 2222 });

// ////////////////

// interface TrueOrNot {
//   promise: Promise<string>;
// }

// let promises: TrueOrNot[] = [];

// const newPromise = new Promise<string>((resolve, rejected) => {
//   if (Math.random() > 0.5) {
//     resolve('ok');
//   } else {
//     rejected('err');
//   }
// });

// promises.push({ promise: newPromise });
// console.log(promises);

// /////////////////////////////////Function paramaters

// function func(first: string, last: string) {
//   return first + ' ' + last;
// }

// func('john'); //Expected 2 arguments, but got 1.
// func('john', 'smit', 'xx'); // Expected 2 arguments, but got 3.
// func('john', 'smit');

// function func(a: number, b: number) {
//   return a + b;
// }

// func(1); //Expected 2 arguments, but got 1.
// func(1, 2, 3); //Expected 2 arguments, but got 3.

// ////////////////////////////////////Optional Function Parameters in TypeScript

// function func(first: string, last?: string) {
//   if (last) {
//     return first + ' ' + last;
//   } else {
//     return first;
//   }
// }

// console.log(func('john', 'smit'));
// console.log(func('john'));

// const date = (year?: number, month?: number, day?: number): number => {
//   if (!year) {
//     year = new Date().getFullYear();
//   }
//   if (!month) {
//     month = new Date().getMonth() + 1;
//   }
//   if (!day) {
//     day = new Date().getDate();
//   }

//   let fullData: string = `${year}.${month}.${day}`;

//   let dayOfTheWeek = new Date(fullData).getDay();

//   return dayOfTheWeek;
// };

// date();

// /////////////////////////////////////////////Default parameter values in TypeScript

// function func(first: string, last: string = 'snow') {
//   return first + ' ' + last;
// }

// func('john', 'smit'); //  'john smit'

// func('john');

// function pow(first: number, last: number = 2): number {
//   return Math.pow(first, last);
// }

// console.log(pow(22));
// console.log(pow(22, 23));

// ///////////////////////////////////////////////Rest function parameters in TypeScript

// function func(...rest: number[]): number[] {
//  return rest;
// }

// func(1, 2, 3);

// function sum(...rest: number[]): number {
//   return rest.reduce((acc, el) => acc + el);
// }

// sum(1, 2, 3, 4, 5);

// /////////////////////////////////////////////////////Function type in TypeScript

// let func: (x: number, y: number) => number;

// func = function (a: number, b: number): number {
//   return a + b;
// };

// type Func = (x: number, y: number) => number;

// let func1: Func = function (a: number, b: number): number {
//   return a + b;
// };

// let func2: Func = function (a: number, b: number): number {
//   return a * b;
// };

// let func: (x: string) => void;

// func = function (text: string): void {
//   alert(text);
// };

// /////////////////////////////////////////////////Callback functions in TypeScript

// function make(num: number, func: (num: number) => number): number {
//   return func(num);
// }

// make(3, function (num: number): number {
//   return num ** 2;
// });

// make(3, function (num: number): number {
//   return num ** 3;
// });
// //////////
// type Func = (num: number) => number;

// function make(arr: number[], func: Func): number[] {
//   return arr.map(function (elem: number) {
//     return func(elem);
//   });
// }

// let res: number[] = make([1, 2, 3], function (num: number): number {
//   return num ** 2;
// });

// console.log(res);

// ///////////////////////////////////////////////
// type Func = (num: number) => number;

// function make(arr: number[], func: Func): number {
//   let sum = 0;

//   for (let elem of arr) {
//     sum += func(elem);
//   }

//   return sum;
// }

// let res: number = make([1, 2, 3], function (num): number {
//   return num ** 2;
// });

// console.log(res);

// ///////////////////////////////////////// => function

// let func = (num: number): number => num ** 2;

// let func = (num1: number, num2: number): number => num1 + num2;

// let func =  (str: string): string[] =>  str.split('');

// let arr: number[] = [1, 2, 3];
// let res: number[] = arr.map(num => num ** 2);

// console.log(res);
