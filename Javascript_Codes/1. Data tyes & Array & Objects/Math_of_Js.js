let age = 21;
console.log(age);

let newAge = new Number(age); //define variable type explicitly means manually like I want only integer value
console.log(newAge);
console.log(newAge.toString()); //converted into string

const num = 2.0000;
console.log(num.toFixed(2)); //want to show only 2 decimal values so use it, coz sometime it shows large values that's why you should consider it

const anotherNum = 123.896;
console.log(anotherNum.toPrecision(3)); //Want to show any decimal number in integer value into round figure ex.12.33 --> to --> 12.3 

const money = 100000
console.log(money.toLocaleString()); //show the long integer along with comas(,)
console.log(money.toLocaleString('en-IN')); //for indian standards

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.abs(-4)); //change the negative integers into positive, it can only convert positive not negative
console.log(Math.round(5.2)); //show the value into fully round figure
console.log(Math.ceil(5.1)); //show the value into round figure but only upper bound even though it has 5.1 will print 6
console.log(Math.floor(5.2)); //show the value into round figure but only lowest value even though it has 5.9 will print 5
console.log(Math.max(4, 3, 6, 8, 7)); //print the Max value inside the numbers
console.log(Math.min(4, 3, 6, 8, 7)); //print the min value inside the numbers
console.log(Math.floor(Math.random() * 10) + 1); //generate the random numbers between 1 to 10