// object literals

const my_Symbol = Symbol("Key1") 
const user = {
    name: "Jasim ansari",
    age: 21,
    university: "MUJ",
    P_Language: "Java",
    [my_Symbol]: "Netflix" //it a right way to initialize the symbol data into object
}

console.log(user);
console.log(user["name"]); //it is a right Way to access object's element, it's called Square notation
console.log(user.name); //it is a also right way to access object's elements, but it can't accept the string, it's called Dot(.) notation
// console.log(user[secret]);  //it is a right way to print Symbol data via object

// Object.freeze(user); //while using this it'll stop the object for changing it's value
// user.name = "Jibrail Ansari"; // Throws an error in strict mode, means can't be modify

user.greeting = function(){
    console.log(`Hello there ${this.name}`);
}
console.log(user.greeting());

// Singleton objects 

const travelApp = new Object(); //it is a singleton objects
const travelApp2 = {}; //it is a non singleton objects 

travelApp2.id = "123abc";
travelApp2.size = "30MB";
travelApp2.location = "Play_store";
travelApp2.user = "1 Million Users";

console.log(travelApp2);

// Let's create object nesting

let regularUser = {
    userEmail: "mrjasim87@gmail.com",
    userDetail: {
        full_name: "Jasim ansari",
        age: 21,
        location: "Bihar"
    }
}

console.log(regularUser.userDetail.full_name); //in this way, we can print the object nesting elements
console.log(regularUser.userDetail.fullName?.age); //print if element exist or not inside the object

const obj1 = {1: "a", 2: "b", 3:"c"};
const obj2 = {3: "d", 4: "e", 5: "f"};

const obj3 = Object.assign({}, obj1, obj2); //Bind two objects & print it one line
console.log(obj3);

const obj4 = {...obj1, ...obj2}; //it's primarily used, coz it's easy, 90% you'll use it
console.log(obj4);

console.log(travelApp2.hasOwnProperty('name')); //ask whatever element you're looking for, it answer in boolean

// Let's discuss about object destructuring

const course = {
    course_name: "Js with Jasim",
    price: "Free",
    courseInstructor: "Jasim ansari"
}

const {course_name} = course;  //best way to print object's element, it's called destructuring
console.log(course_name); 