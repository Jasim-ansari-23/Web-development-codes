//Whatever functions used in this function will only accessible in browser

// console.log("Hello js world");
// alert("This is first js code by me")
// console.dir(document); // it prints the spacial object of DOM only in browser
// console.dir(document.body);
// console.log(document.body);

// Now it's time to select html elements by using (DOM) --> (getElement.selector)

document.body.style.background = "black"; //it'll change the background
// let head = document.getElementById('name'); //print heading into console
// console.log(head);
// let para = document.getElementsByTagName("p");
// console.log(para);

// Another way to select html elements by using (DOM) --> (Query selector)

// let element = document.querySelector('h2');
// console.dir(element);

//select by class
// let element2 = document.querySelector('.name2');
// console.dir(element2);
//now select via id
// let element3 = document.querySelector('#name');
// console.dir('name');

// What is tags & how to use it
// tagName : returns tag for element nodes
// let para2 = document.getElementsByTagName("p");
// console.log(para2);

// innerText : returns the text content of the element and all its children
// let inner = document.querySelector('div').innerText;
// console.dir(inner);

// innerHTML : returns the plain text or HTML contents in the element
// let ht = document.querySelector('div').innerHTML;
// console.dir(ht);
// let namu = document.querySelector("name");
//nam2.innerText = "Hello ji kaise ho";

// textContent : returns textual content even for hidden elements
// let diva = document.querySelector("div");
// console.dir(diva);
// name.innerHTML;
// name.textContent; --> it'll help you to show hidden text

// Let's see how we can change element's values in two ways

// let divs = document.querySelectorAll(".box");;
// console.log(divs);

// 1st way

// divs[0].innerText = "This is the 1st div";
// divs[1].innerText = "This is the 2nd div";
// divs[2].innerText = "This is the 3rd div";

// 2nd way

// let ind = 1;
// for(div of divs){
//     div.innerText = `This is the ${ind} div ever`;
//     ind++;
// }

// Now it's time to study Attributes

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = document.querySelector('h3');
// console.log(name.getAttribute('class'));

// To set attribute
// console.log(div.setAttribute('id', 'box2'));

// To change it's style
// div.style.backgroundColor = "red";

let heading = document.querySelector(".name");
heading.style.fontSize = "15px";
heading.style.padding = "10px";
heading.innerText = "MD Jasim";

// Now it's time to study how we can insert something inside the elements

let bx = document.querySelector("#box");
bx.style.backgroundColor = 'red';

// Create button at last inside the div
let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
console.log(newbtn);
bx.append(newbtn);

// Create text at first inside the div
let txt = document.createElement('h2');
console.log(txt);
txt.innerText = "Hii this is first title";
bx.prepend(txt);
txt.style.fontSize = "14px";

// Add some element before the div
let txt1 = document.createElement('h2');
txt1.innerText = "It was added on outer div";
bx.before(txt1);

// Add some element after the div
let newbtn2 = document.createElement("button");
newbtn2.innerText = "Click me!";
bx.after(newbtn2);

//let's delete the element
let p = document.createElement('p');
p.innerText = 'Hello ji kaise ho saare';
bx.append(p);
p.remove(); // used to remove elements

// Let's see how we can add multiple classes and remove it from the element's
let tit = document.querySelector('.old-class');
tit.classList.add('new-class');
tit.classList.remove('new-class');