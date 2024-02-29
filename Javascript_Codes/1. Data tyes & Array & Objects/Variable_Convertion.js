let num = 33;
console.log(typeof num); //Number

let str = "33";
console.log(typeof str); //String

let str2 = Number(num); //It's converted the string values into number, either it has string or number value
console.log(typeof str2); //Number

//Another example
let n = "33abc";
console.log(typeof n); //String

let value_of_n = Number(n);  //Converted into number
console.log(typeof value_of_n); //Will Number, if it is string
console.log(value_of_n); //But it won't show number, instead of will show (NaN) means, Not a Number but the type of Nan is number, as usual

let Snum = 729;
let strNum = String(Snum); //Number Converted into String
console.log(strNum); 
console.log(typeof strNum); //even though it's showing 729 but it is string

//Start the some operation

let ngValue = 3;
let negValue = -ngValue;
console.log(negValue);

let str3 = "Hello "
let str4 = "Jasim ansari"
let str5 = str3 + str4; //We have concatenated the two string
console.log(str5);  