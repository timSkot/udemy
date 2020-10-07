'use strict';

let a = 5,
    b = a;

b = b+ 5;
console.log(b, a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);