function sayMyName(){
    console.log("Hello this is Jasim ansari");
}

sayMyName(); //easiest way to call the function

function plus(num1 = 2, num2 = 2){
    // console.log(num1 + num2);
    // let result = num1 + num2;
    // return result; // after the returns, if you've added any datatype which contains something will not execute 
    return num1 + num2;
}
// plus();
const result = plus();
console.log(`Result: ${result}`);

function userloggedIN(user){
    return `${user} just logged in`;
}

console.log(userloggedIN("Jasim,"));

function username(user = "Jibrail"){
    if(user == undefined){
        console.log(`Once log in to your dashboard`);
        return;
    }
    return `${user}, just logged in`;
}

console.log(username("Jasim"));

// Let's see how to (Rest operator or Dot(.) operator) works, we can call anything between of these

function call_Multiple_value(val1, val2, ...num1){
    return num1;
}
// console.log(call_Multiple_value(200, 300, 400));
console.log(call_Multiple_value(400, 400, 400, 400));

// Now create an object and access it using function

const user = {
    username: "Jasim ansari",
    age: 21
}

function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} & his age is: ${anyobject.age}`);
}

handleObject(user);

// Now create an Array and access it using function

const arr = [400, 500, 600];

function handleArray(getArray){
    return getArray[1];
}

console.log(handleArray(arr));

// Now let's see how arrow function works

const name = () => {
    console.log(`Hello this is a arrow function`);
} // It's called arrow function, (this) keyword, which represent itself works only with objects
name();

// Let's learn about implicit return, where you can use single function in one line
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(2, 5));

const obj = () => {{username: "Jasim"}}; //for objects

// Let's see ifee function, and don't forget to add semicolon(;) after execution

(function newfun(){ //it's called name ifee function 
    console.log(`Hii this is ifi function`);
})();

// let's see ifee function using arrow function

( (name) => { //it's called uname ifee function
    console.log(`Hii my name is: ${name}`);
} )('Jasim');

// Let's see --> in loop example this loop can also be considered for objects printing coZ (of loop won't print object)

const obj1 = {
    name: 'Jasim ansari',
    age: 21,
    Graduate: "BCA"
};

for(const index in obj1){
    console.log(`${index} is: ${obj1[index]}`);
};