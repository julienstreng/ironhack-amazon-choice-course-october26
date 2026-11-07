const API_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

  async function fetchUsers () {
    try{
        const response = await fetch(API_URL); // Fetch data from the API
        const users = await response.json(); // Parse the response as JSON
        console.log("Users:", users);
        const  userList = document.getElementById('user-list');
        users.forEach(user => {
            const li = `<li class="user-item">
                            <div>
                                <h3>${user.name}</h3>
                                <p>${user.email}</p>
                                <p> Address : ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                                <p> Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                            </div>
                        </li>`;
            userList.innerHTML += li;
        });
    }
    catch(error){
        console.error('Error:', error);
    }
  }

  async function fetchPosts() {
    try {
        const response = await fetch(POST_URL); // Fetch data from the API
        const data = await response.json(); // Parse the response as JSON
        console.log('Data:', data);
        const postList = document.getElementById('post-list'); // Get the element to display the posts
                data.forEach(post => {
                    const li = `<li class="post-item">
                                    <div>
                                        <h3>${post.title}</h3>
                                        <p>${post.body}</p>
                                    </div>
                                </li>`;
                                // Append the post to the list
                    postList.innerHTML += li; // postList.innerHTML = postList.innerHTML + li; // Append the post to the list
                });
    } catch (error) {
        console.error('Error:', error);
    }
}

 fetchPosts() 
 fetchUsers()
 

// fetch(API_URL)
//   .then((response) => {
//     // Convert the response to JSON
//     return response.json();
//   })
//   .then((users) => {
//     // Display the users
//     console.log("Users:", users);
//     const  userList = document.getElementById('user-list');
//     users.forEach(user => {
//         const li = `<li class="user-item">
//                         <div>
//                             <h3>${user.name}</h3>
//                             <p>${user.email}</p>
//                             <p> Address : ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
//                             <p> Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
//                         </div>
//                     </li>`;
//         userList.innerHTML += li;
//     });
//   })
// .catch((error) => {
//     // Handle errors
//     console.error("Error:", error); 
//   });


// fetch(API_URL)
//   .then((response) => {
//     // Convert the response to JSON
//     return response.json();
//   })
//   .then((users) => {
//     // Display the users
//     console.log("Users:", users); // list of users
//      const emailAddresses = users.map(user => user.address);
//     console.log("Email Addresses:", emailAddresses);
//     const userList = document.querySelector('#user-list');
//      const userIdFive = users.find(user => user.id === 5);
//     console.log("User with ID 5:", userIdFive);
//       const usersWithA = users.filter(user => user.name.toLowerCase().includes('a'));
//     console.log("Users with 'a' in their name:", usersWithA);
    
//     users.map(user => {
//         const li = document.createElement('li');
//         li.textContent = user.name;
//         userList.appendChild(li);
//     });

//   })


// fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 console.log('Response:', response);
//                 return response.json()
//             })
//             .then(data => {
//                 console.log('Data:', data);

//                 const postList = document.getElementById('post-list');
//                 data.forEach(post => {
//                     // const li = document.createElement('li');
//                     // li.textContent = post.title;
//                     const li = `<li class="post-item">
//                                     <div>
//                                         <h3>${post.title}</h3>
//                                         <p>${post.body}</p>
//                                     </div>
//                                 </li>`;
//                     postList.innerHTML += li;
//                 });
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
