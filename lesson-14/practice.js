// Exercise 1

// Create a function called greetUser that:
// 1. Accepts two parameters: name and callback.
// 2. Uses setTimeout() to simulate a two-second delay.
// 3. Calls the callback after the delay, passing the name.
// 4. Displays a greeting using the callback.
// Bonus challenge: Modify greetUser so it accepts a third parameter, delay
// to control the waiting time.

function greetUser(name, callback) {
  // Your code here
}

function displayGreeting(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice", displayGreeting);


// Exercise 2 

// Create a function called checkAge(age) that:
// - Returns a new Promise.
// - Waits two seconds.
// - Resolves with "Access granted" if the user is 18 or older.
// - Rejects with "Access denied" otherwise.

function checkAge(age) {
  return new Promise((resolve, reject) => {
    // Your code here
  });
}

checkAge(21)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });


  // Exercise 3

  // Complete the function to retrieve data from an external API, parse JSON, 
  // and manipulate the returned data.

// Using array methods from earlier lessons: 
// 1. Display only the names of the users.
// 2. Create an array containing only their email addresses.
// 3. Find the user whose id is 5.
// 4. Filter users whose names contain the letter "a" (case-insensitive).

  const API_URL =
  "https://jsonplaceholder.typicode.com/users";

// fetch(API_URL)
//   .then((response) => {
//     // Convert the response to JSON
//     return response.json();
//   })
//   .then((users) => {
//     // Display the users
//     console.log("Users:", users); // list of users
//     const userList = document.querySelector('#user-list');
    
//     users.map(user => {
//         const li = document.createElement('li');
//         li.textContent = user.name;
//         userList.appendChild(li);
//     });

//   })
fetch(API_URL)
  .then((response) => {
    // Convert the response to JSON
    return response.json();
  })
  .then((users) => {
    // Display the users
    console.log("Users:", users); // list of users
    // 2. Create an array containing only their email addresses.
    // const emailAddresses = users.map(user => user.email);
    // console.log("Email Addresses:", emailAddresses);
    // const userIdFive = users.filter(user => user.id === 5);
    // console.log("User with ID 5:", userIdFive);
    // A !=== a 
    // Albert --> albert 
    const usersWithA = users.filter(user => user.name.toLowerCase().includes('a'));
    console.log("Users with 'a' in their name:", usersWithA);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error); 
  });