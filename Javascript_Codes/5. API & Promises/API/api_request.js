document.body.style.backgroundColor = "black";
document.body.style.color = "white";

const xml = new XMLHttpRequest();
xml.open("GET", "https://api.github.com/users/Jasim-ansari-23");
xml.onreadystatechange = () => {
  console.log(xml.readyState); // Track ready states continuously

  if (xml.readyState === 4) {
    console.log(xml.responseText); // To see the user's all data
    const userData = JSON.parse(xml.responseText);
    console.log(`Followers: ${userData.followers}`); //to print particular data from user's API
    console.log(`Following: ${userData.following}`);
  }
};

xml.send();