// Let's see callback function in js, this function exclude function name, means you don't have to define any function name while using it
// ForEach -->

const coding = ['Java', 'C', 'Javascript', 'C++', 'MySql'];

coding.forEach(function (value){ 
    console.log(value); //it'll print the array items
});
coding.forEach(function_name);

coding.forEach( function(val, index, arr) {
    console.log(val, index, arr); //it'll print the array along with it's index & array
} )

// Let's see in arrow function

coding.forEach( (value2) => {
    console.log(value2);
} );

function function_name(){
    console.log(`Hi this function will execute using call back function`);
};

// Now let's do how you can get access from array's object

const my_arr = [
    {
        language_name: 'Javascript',
        file_name: 'Js'
    },
    {
        language_name: 'Python',
        file_name: 'Py'
    },
    {
        language_name: 'Mysql',
        file_name: 'Sql'
    }
];

my_arr.forEach( (item) =>{
    console.log(item.file_name);
} );

// Now it's time see another callback functions called (filter)
// filer -->

const number = [1.2,3,4,5,6,7,8,9,10];
const newCallBack = number.filter( (num) => num > 4 );
console.log(newCallBack);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (book) => book.genre === 'Fiction');
userBooks = books.filter( (book) => book.edition <= 2000 && book.genre === 'Non-Fiction');
console.log(userBooks);

// Append something after the element

const number2 = [1.2,3,4,5,6,7,8,9,10];

const newnums = number2.map( (num) => num + 10);
console.log(newnums);

// Let's see chaining function 
// Keep in mind you can use multiple chaining in a call back function

const newNums2 = number2.map( (num) => num * 10 ).map( (num) => num + 1 );
console.log(newNums2); 

// Let's see (reduce function) in js

// <------------------ Example ------------------>
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );

const rduce = [1,2,3];
const newrdce = rduce.reduce( function(acc, currval) {
    console.log(`accumulator: ${acc} and current value ${currval}`);
    return acc + currval;
}, 0 );

console.log(newrdce);

const new2 = rduce.reduce( (acc, currvalue) => acc+currvalue, 0);
console.log(new2);

// Now count all courses price and how many items you're going to pay
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// const pay_all = shoppingCart.reduce( (items, total_price) => items + total_price, 0);
// console.log(pay_all);

const { items, totalPrice } = shoppingCart.reduce((acc, currentItem) => {
    return {
        items: acc.items + 1,
        totalPrice: acc.totalPrice + currentItem.price
    };
}, { items: 0, totalPrice: 0 });

console.log(`Items in your cart: ${items} and total price is: ${totalPrice}`);