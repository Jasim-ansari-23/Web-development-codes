//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n
// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

let mobNo = 7292946521n //it's an big int data type, for larger integers
console.log(mobNo);
console.log(typeof mobNo);

let bio = {
    name: "Jasim ansari",
    age: 21,
    color: "White"
}
console.log(bio);
console.log(typeof bio); //It's an object