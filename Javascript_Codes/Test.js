const money = 1000000;
console.log(money.toLocaleString());

console.log(Math.abs(-45));
console.log(Math.floor(6.5));
console.log(Math.ceil(5.9));
console.log(Math.floor(Math.random() * 10) + 1);

const num = new Map();
num.set('Jasim', 7292946521);
num.set('Jibrail', 7488466942);

for(const [key, value] of num){
    console.log(`Key: ${key} and it's value: ${value}`);
}

// Array's practice
const arr = [1,2,3,4,5,6,7,8,9,10];
arr.unshift(0,);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.includes(11));
const arr2 = [11,12,13,14,15,16,17,18,19,20];
const bindingArr = arr.concat(arr2);
console.log(bindingArr);
console.log(arr.slice(5));
let week = ['Mon', 'Tue', 'Wed', 'Thur', 'Sat'];
week.splice(0,0, 'Sun');
week.splice(5,0, 'Fri');
// console.log(week);

let n = 200, n2 = 300, n3 = 400;
console.log(Array.of(n, n2, n3));