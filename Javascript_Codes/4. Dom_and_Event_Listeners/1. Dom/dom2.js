document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML); // to print first element
// console.log(parent.firstElementChild); // to print first element via another way
// console.log(parent.lastElementChild); // print last element
const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// Print using loop
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

console.log('Nodes: ', parent.childNodes); // to check how many elements inside this

// create the element inside the div, with the help of Node & Child
let div = document.querySelector('.parent');
console.log(div.innerHTML);

// Creating text element using, (createTextNode)
let addtxt = document.createTextNode('Friday');
div.appendChild(addtxt);

// Let's add list items inside the ul using function
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
};
addLanguage('C++');
addLanguage('C programming');

// Let's add languages in optimized manner
function add_Language(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
};
add_Language('Java');

// Let's add another names inside the name container div
function nameContainer(addName){
    const second_name = document.createElement('h3');
    second_name.innerHTML = `${addName}`;
    document.querySelector('.name-container').appendChild(second_name);
};
nameContainer('Jibrail ansari');

// Replace with h3 tag
const name_Container2 = document.querySelector('h3:nth-child(2)');
const name3 = document.createElement('h3');
name3.textContent = "Guddu ansari";
name_Container2.replaceWith(name3);

// Let's add element in optimized manner
function name_Container(addName){
    const third_heading = document.createElement('h4');
    third_heading.appendChild(document.createTextNode(addName));
    document.querySelector('.name-container').appendChild(third_heading);
};
name_Container('Faizan Raza');

// Let's edit and replace the elements
const langName2 = document.querySelector('li:nth-child(3)');
const newli = document.createElement('li');
newli.textContent = "MySql";
langName2.replaceWith(newli);