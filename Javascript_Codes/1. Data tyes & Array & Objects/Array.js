let number = [1,2,3,4,5];
console.log(number);

let heros = ["Baalvir", "Shaktiman", "Naagin"];
console.log(heros);
console.log(heros[1]);

number.push(6); //Add something in an array
console.log(number);

number.pop(); //remove something in an array
console.log(number);

number.unshift(6) //shift something on a starting index in an array
console.log(number);

number.shift(); //will remove the 1st element of the array
console.log(number);

console.log(number.includes(6)); //check element exist at any index 
console.log(number.indexOf(5)); //check which element available at which index

let number2 = [6,7,8,9,10]
number = number2.join(); //Bind the any array and convert it into string
console.log(number);
console.log(typeof number); //It's an string

let newarr2 = [7,2,9,2,9];
console.log(newarr2.slice(2)); //it returns how many elements after the index, along with index element

// <-- splice example --> array.splice(startIndex, deleteCount, item1, item2, ...); 
let week = ["Mon", "Wed", "Thur", "Fri", "Sun"];
week.splice(1, 0, 'Tue'); //it will and & delete the elements  
console.log(week);
week.splice(5,1,"Sat"); //remove 5th index's value
console.log(week);
week.splice(0, 0, "Sun");
console.log(week); //add (sun) at 0th index

// Use of toSpliced()
let week1 = ["Mon", "Wed", "Thur", "Fri", "Sat"]; //it's start from 0 indexing
let week2 = week1.toSpliced(0,0,"Sun");
console.log(week2);
let week3 = week2.toSpliced(2,0,"Tue");
console.log(week3);

// Another example of an array 
const marvel_heros = ['Thor', 'loki', 'Spiderman'];
const dc_heroes = ['Black adam', 'Flash', 'Batman'];

marvel_heros.push(dc_heroes); //Bind two array, it returns existing array
console.log(marvel_heros);

let all_heros = marvel_heros.concat(dc_heroes); //Bind two array 2nd methods, but it returns new array
console.log(all_heros);

let allHeros = {...marvel_heros, ...dc_heroes}; //Bind two array via 3rd methods, but now it's not an array, converted itself into individual elements
console.log(allHeros);

let confusing_array = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13,14,15,16,[17,18]]],19,20];
console.log(confusing_array.flat(Infinity)); //it'll print the multiple kind of array in one line or multiple line 

let score = 200;
let score2 = 300;
let score3 = 400;
console.log(Array.of(score, score2, score3)); //convert multiple data types into Array