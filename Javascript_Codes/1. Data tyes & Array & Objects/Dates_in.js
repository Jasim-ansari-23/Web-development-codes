let newDate = new Date();
console.log(newDate.toString()); //print the date into proper manner
console.log(newDate.toISOString()) //show date first then falana dhimkana
console.log(newDate.toTimeString()); //show time and zone
console.log(newDate.toDateString()); //show date only
console.log(newDate.toLocaleTimeString()); //show time into 24hrs formate 
console.log(newDate.toLocaleDateString()); //show date only
console.log(newDate.toLocaleString()); //show date and time only

let createNewDate = new Date(2023, 0, 23);
console.log(createNewDate.toDateString()); //it'll print the date into your manner whatever you've added 

let createNewDate2 = new Date(2023, 0, 23, 5, 3);
console.log(createNewDate2.toLocaleString()); //it'll print the date and time into your manner whatever you've added 

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //Print the exact value of time
// console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    Date: "long",
})