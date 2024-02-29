// Let's create a new promises inside the variable which hold it
const myPromises = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve(); // must call it before calling the ( (then)--> which directly connected to resolve )
  }, 1000);
});

myPromises.then(() => {
  console.log("Promise is completed");
});

// Let's create promises directly
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 is completed");
});

// Let's create another promises to add some data inside the resolve()
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      username: "Jasim",
      email: "mrjasim87@gmail.com",
      age: 21,
    });
  }, 1000);
}).then((user) => {
  console.log(user);
});

// Again create the another promises to through the error and solved it
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // false it, got an error
    if (!error) {
      resolve({
        username: "Jasim ansari",
        password: "1235",
      });
    } else {
      reject("Error, something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// Again create the another promises to use ( async await which will wait until the work has been competed )
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "javascript",
        password: "1235",
      });
    } else {
      reject("Error, js went wrong");
    }
  }, 1000);
});

async function consumePromises() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromises();

// Creating a new promises to fetch user's data via api
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers();

// Now do it in another way
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error));