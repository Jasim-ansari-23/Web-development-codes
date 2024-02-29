// Let's start events journey in js

// document.getElementById('river').addEventListener('click', function(e){
//     console.log(e);
//     alert('Clicked on river'); // add alert message while clicking on image
// });

// Let's convert into dark mode
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "#414141";
  document.body.style.color = "white";
  document.querySelector(".mode").innerHTML = "Dark mode";
});

// Convert it to default mode, which is white mode
// it'll work only when you click double times on the button
button.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.querySelector(".mode").innerHTML = "White mode";
});

// it'll work only when you right click
button.addEventListener("auxclick", () => {
  document.querySelector(".mode").innerHTML = "You have right clicked";
});

// it'll work only when you click random key via keyboard
button.addEventListener("keydown", (e) => {
  document.querySelector(".mode").innerHTML =
    "Just pressed random key via keyboard";
  console.log(e.key, e.keyCode); // Print what you've pressed on keyboard and also key code
});

// Lets start event bubbling in js
// Meaning to say it'll stop spreading the elements
document.querySelector(".container2").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Container was clicked");
});

document.querySelector(".child-container").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child Container was clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked");
});

// Let's generate a random color generator
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

// it'll run continuously over again and again
// let a = setInterval(() => {
//   document.querySelector(".child-container").style.backgroundColor =
//     getRandomColor();
// }, 1000);
// console.log(a);
// clearInterval(2); --> to stop the setinterval

// it'll run only one time
setTimeout(() => {
  document.querySelector(".child-container").style.backgroundColor =
    getRandomColor();
}, 1000);
console.log(a);
// clearTimeout(2); --> to stop the setTimeout