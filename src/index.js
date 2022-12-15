var test = 'world';
alert(test);
var text = 'abc';
var phone = 323213213;
var ok = true;
var text;
text = 'abc';
console.log(text);
//////////////////////// OPERATION
var test1 = 123;
var test2 = 456;
console.log(test1 + test2);
var test1 = '123';
var test2 = '456';
var test3 = test1 + test2;
console.log(test3);
var test1 = 123;
var test2 = 456;
var test3 = test1 + ' ' + test2;
console.log(test3);
var test1 = 123;
var test2 = 456;
var test3 = '!';
var test4 = test1 + test2 + test3;
console.log(test4);
579;
var test1 = +'123';
var test2 = +'456';
console.log(test1 + test2);
579;
/////////////////////////////////////ARRAY TYPESCRIPT
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr = ['a', 'b', 'c'];
console.log(arr);
/////////////////////////////////////OBJECT TYPESCRIPT
var user = { name: 'john', age: 30 };
user = '123'; //error
user = { name: 'eric', age: 40, salary: 300 };
error;
user = { name: 'eric', age: 40 };
var date = { year: 2025, month: 12, day: 31 };
date.isLeap = true;
Property;
'isLeap';
does;
not;
exist;
on;
type;
console.log(date);
var date = { year: 2025, month: 12, day: 31 };
date = { year: 2025, month: 12 };
Property;
'day';
is;
missing in type;
var date = { year: 2025, month: 12, day: 31 };
date = { year: 2025, month: 12, date: 7 };
Type;
'{ year: number; month: number; date: number; }';
is;
not;
assignable;
to;
type;
'{ year: number; month: number; day: number; }'[
/////////////////////////////////////typescript LOOPS
"for"](let, i, number = 0);
i <= 10;
i++;
{
    console.log(i);
}
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elem_1 = arr_1[_i];
    console.log(elem_1);
}
var obj = { a: 1, b: 2, c: 3 };
for (var key in obj) {
    console.log(key);
}
refactoring;
var res = 0;
for (var i_1 = 0; i_1 < 100; i_1++) {
    res += i_1;
}
console.log(res);
var i = 0;
var res = 0;
while (i < 100) {
    res += i;
    i++;
}
console.log(res);
var arr = [1, 2, 3, 4, 5];
var res = 0;
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var elem_2 = arr_2[_a];
    res += elem_2;
}
console.log(res);
var obj = { a: 1, b: 2, c: 3 };
var res = 0;
for (var key in obj) {
    var elem_3 = obj[key];
    res += elem_3;
}
console.log(res);
/////////////////////////////////////FUNCTION TS
function sum(x, y) {
    return x + y;
}
function sum(arr) {
    var res = 0;
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var num = arr_3[_i];
        res += num;
    }
    return res;
}
/////////////////////////////////////VOID TYPE TS
function func(elem, text) {
    elem.textContent = text;
}
/////////////////TUPLES in TypeScript
var arr = [1998, 24];
var arr = [1998, 'September'];
var arr = [1998, 5, 22, 'JOHN'];
var time = [12, 59, 59];
time[0] = 13;
console.log(time);
var time = [12, 59, 59];
time[0] = '01';
Type;
'string';
is;
not;
assignable;
to;
type;
'number'.
    console.log(time);
var time = [12, 59, 59];
time[0] = 13;
Cannot;
assign;
to;
'0';
because;
it;
is;
a;
read - only;
property.
    console.log(time);
var date = [2022, 10, 10];
date = [2022, 10, 10, 'john'];
var time = [1221, 1998, 59];
var year = time[0], date = time[1], phone = time[2];
var tpl;
tpl = ['a', 'b', 1, 2, 3, 4, 5, 100];
var tpl;
tpl = [11, false, 'b', 'a'];
/////////////////////////////////////////////// ENUM
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
var current = Season[0];
console.log(current);
Winter;
var idx = Season.Spring;
console.log(idx); //1
var current = Season.Winter;
console.log(current); //0
var current = 3;
var current = 'str'; // error
var current = 3;
console.log(typeof current); //number
(function (Season) {
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
    Season[Season["Autumn"] = 4] = "Autumn";
})(Season || (Season = {}));
var current = Season.Winter;
console.log(current); //1
(function (Season) {
    Season[Season["Winter"] = 5] = "Winter";
    Season[Season["Spring"] = 6] = "Spring";
    Season[Season["Summer"] = 7] = "Summer";
    Season[Season["Autumn"] = 8] = "Autumn";
})(Season || (Season = {}));
var current = Season.Summer;
console.log(current); //7
(function (Season) {
    Season["Winter"] = "winter";
    Season["Spring"] = "spring";
    Season["Summer"] = "summer";
    Season["Autumn"] = "autumn";
})(Season || (Season = {}));
var current = Season.Summer;
console.log(current); //summer
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 0] = "Sunday";
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
    DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
    DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
//////////////////////////////////////////////ANY
var test;
test = '123';
test = 123;
var test1 = 123;
var test2 = 'abc';
var test3;
test3 = test1;
console.log(test3);
test3 = test2;
console.log(test3);
var arr = [1, '2', '3', 4, 5];
console.log(arr);
//////////////////////////////////COMBINE TYPE
var test;
test = 'fdwfewfew';
test = 122121;
test = {}; //Type '{}' is not assignable to type 'string | number'.
var phone;
phone = 3233213213211;
phone = null;
phone = []; //Type 'never[]' is not assignable to type 'number'.
var test;
test = true;
test = 3231321;
test = '231321321';
test = {}; // Type '{}' is not assignable to type 'string | number | boolean'.
var test = 'feerggrebtbe';
var test;
test = 132321213132;
test = 'rereewrewrewr';
var test;
test = true;
test = null;
test = 32341324123; //Type '32341324123' is not assignable to type 'bolull'.
var test;
test = null;
test = undefined;
test = '32312213213132'; //Type '"32312213213132"' is not assignable to type 'nullUndefined'
/////////////////////String literal type
var str;
str = 'success';
str = 'error';
str = '321312321321'; // Type '"321312321321"' is not assignable to type '"success" | "error"'.
var alertText;
alertText = 'warning';
var str;
str = 'success';
str = 'error';
///////////////////////////////// Built-in object types in TypeScript
var date = new Date(2030, 11, 31);
var reg = /.+?/;
var elem;
var elem = document.querySelector('div');
console.log(elem);

var lst = document.querySelectorAll('div');
var currenDate = new Date();
console.log(currenDate);
var promise = new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
        resolve('32321132132321');
    }
    else {
        reject('error');
    }
});
promise
    .then(function (result) { return console.log(result); })["catch"](function (err) { return console.log(err); });
var arr = [1, 2, 3, 4];
var collection = arr.map(function (el) { return el + 1; });
console.log(collection);
var mySet = new Set();
mySet.add('3232');
////////////////////////////Object Structure
var user;
user = { name: 'john', age: 30 };
var user = { name: 'john', age: 30 };
var user;
user = { name: 'john' };
var date = { year: 2025, month: 12 };
var user = { name: 'john', age: 30 };
var first = { name: 'John', age: 22, salaryday: 2000 };
var second = { name: 'Ban', age: 32, salaryday: 1000 };
var currenDate = {
    hour: 22,
    minute: 32
};
var Date1 = {
    hour: 22,
    minute: 32,
    second: 32
};
/////////////////////////////////////////////////////////Arrays in objects
var product;
product = {
    name: 'notebook',
    colors: ['red', 'black', 'gray']
};
var prod = {
    name: 'notebook',
    colors: ['red', 'black', 'gray']
};
var ukraine = {
    capital: 'Kiev',
    city: ['Dnipro', 'Lviv']
};
var user = {
    name: 'john',
    age: 30,
    parents: {
        mother: 'jane',
        father: 'eric'
    }
};
var ev = {
    name: 'my new event',
    time: {
        start: '2025-11-01',
        finish: '2025-12-31',
        phone: 33213223112
    }
};
var andrew = {
    name: 'andrew',
    position: {
        name: 'feefef',
        salary: 3232321
    },
    addr: {
        country: '32332',
        city: '321321213'
    }
};
var period = {
    date1: new Date(2030, 11, 31),
    date2: new Date(2020, 11, 31)
};
var user = {
    name: 'john',
    age: 30,
    city: { name: 'london' }
};
var andrew = {
    name: 'andrew',
    position: {
        name: 'dewfewfw',
        salary: 32323232
    },
    addr: {
        country: 'dfsfsfsds',
        city: '3321321'
    }
};
var user = {
    name: 'john',
    age: 30,
    parents: {
        mother: {
            name: 'jane',
            age: 30,
            parents: null
        },
        father: {
            name: 'eric',
            age: 30,
            parents: null
        }
    }
};
var arr = [];
arr.push({ name: 'lol', age: 232 });
console.log(arr);
var arr = [];
arr.push(new Date(2030, 11, 31));
arr.push(new Date(2020, 11, 31));
console.log(arr);
var arr = [];
var lst = document.querySelectorAll('div');
var arr = Array.from(lst);
var employeers = [];
employeers.push({ name: 'john', salary: 2222 });
var promises = [];
var newPromise = new Promise(function (resolve, rejected) {
    if (Math.random() > 0.5) {
        resolve('ok');
    }
    else {
        rejected('err');
    }
});
promises.push({ promise: newPromise });
console.log(promises);
/////////////////////////////////Function paramaters
function func(first, last) {
    return first + ' ' + last;
}
func('john'); //Expected 2 arguments, but got 1.
func('john', 'smit', 'xx'); // Expected 2 arguments, but got 3.
func('john', 'smit');
function func(a, b) {
    return a + b;
}
func(1); //Expected 2 arguments, but got 1.
func(1, 2, 3); //Expected 2 arguments, but got 3.
////////////////////////////////////Optional Function Parameters in TypeScript
function func(first, last) {
    if (last) {
        return first + ' ' + last;
    }
    else {
        return first;
    }
}
console.log(func('john', 'smit'));
console.log(func('john'));
var date = function (year, month, day) {
    if (!year) {
        year = new Date().getFullYear();
    }
    if (!month) {
        month = new Date().getMonth() + 1;
    }
    if (!day) {
        day = new Date().getDate();
    }
    var fullData = "".concat(year, ".").concat(month, ".").concat(day);
    var dayOfTheWeek = new Date(fullData).getDay();
    return dayOfTheWeek;
};
date();
/////////////////////////////////////////////Default parameter values in TypeScript
function func(first, last) {
    if (last === void 0) { last = 'snow'; }
    return first + ' ' + last;
}
func('john', 'smit'); //  'john smit'
func('john');
function pow(first, last) {
    if (last === void 0) { last = 2; }
    return Math.pow(first, last);
}
console.log(pow(22));
console.log(pow(22, 23));
///////////////////////////////////////////////Rest function parameters in TypeScript
function func() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest;
}
func(1, 2, 3);
function sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (acc, el) { return acc + el; });
}
sum(1, 2, 3, 4, 5);
/////////////////////////////////////////////////////Function type in TypeScript
var func;
func = function (a, b) {
    return a + b;
};
var func1 = function (a, b) {
    return a + b;
};
var func2 = function (a, b) {
    return a * b;
};
var func;
func = function (text) {
    alert(text);
};
/////////////////////////////////////////////////Callback functions in TypeScript
function make(num, func) {
    return func(num);
}
make(3, function (num) {
    return Math.pow(num, 2);
});
make(3, function (num) {
    return Math.pow(num, 3);
});
function make(arr, func) {
    return arr.map(function (elem) {
        return func(elem);
    });
}
var res = make([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res);
function make(arr, func) {
    var sum = 0;
    for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
        var elem_4 = arr_4[_i];
        sum += func(elem_4);
    }
    return sum;
}
var res = make([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res);
///////////////////////////////////////// => function
var func = function (num) { return Math.pow(num, 2); };
var func = function (num1, num2) { return num1 + num2; };
var func = function (str) { return str.split(''); };
var arr = [1, 2, 3];
var res = arr.map(function (num) { return Math.pow(num, 2); });
console.log(res);
