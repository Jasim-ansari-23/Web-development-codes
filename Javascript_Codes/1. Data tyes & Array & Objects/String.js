let name = "Jasim ansari";
let age = 21;

console.log(`Hii my name is ${name} and my age is ${age}`); //To write a string into backtick (``), it's called String inter position & it's a modern way to write 

//Writing a string in object

let full_name = new String("Jasim ansari"); //it's a string but also an object
console.log(full_name);

console.log(name.length); //check string length 
console.log(name.toUpperCase()); //convert it into capital
console.log(name.toLowerCase()); //convert it into small latter 

let index = 4;
console.log(`The character at index ${index} is ${name.charAt(index)}`); //check which index at which string

let search = "ansari";
console.log(`${search} is at index ${name.indexOf(search)}`); //check which character at which index

console.log(name.substring(0, 5)); //check the smallest part of the string
console.log(name.slice(-0, 5)); 
console.log(name.slice(-6, -6)); //it can show the string both smallest part of the string and negative

let newName = "    Jasim   ";
console.log(newName); //it'll show the string along with unnecessary spaces
console.log(newName.trim()); //it'll trim the spaces

console.log(name.replace("Jasim", "Jibrail")); //it'll replace the string
console.log(name.includes("Jasim")); //check particular strings exist or not
console.log(name.split("m")); //it shows which strings are in front and behind it, whatever string you've added


// <-------------------Let practice---------------------->

// let name = "Jasim ansari";
// let age = 21;
// let qualification = "BCA";
// let University = "MUJ";
// let location = "Bihar";
// let full_details = `Hii this is ${name}, and I'm ${age} years old. My Qualification is ${qualification} at ${University} and I'm from ${location}, India`;

// // console.log(`Hii this is ${name}, and I'm ${age} years old. My Qualification is ${qualification} at ${University} and I'm from ${location}, India`);

// console.log(name.length);
// console.log(full_details);
// console.log(full_details.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(full_details.charAt(20));

// let index = 4;
// console.log(`The character at index ${index} is ${name.charAt(index)}`);

// let search = "ansari";
// console.log(`${search} is at index ${name.indexOf(search)}`);

// console.log(name.substring(6,12));
// console.log(name.slice(-6, -6));

// let uname = " Jasim";
// console.log(uname.trim());

// let uname2 = " Jasim";
// console.log(uname2.replace("Jasim", "Jibrail"));

// console.log(name.includes("Jibrail"));
// console.log(name.split(' '));