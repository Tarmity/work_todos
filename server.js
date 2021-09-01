// DEPENDENICES
// // Series of npm packages that will be used to give the server functionality.

const fetch = require("node-fetch");

// JSONPlaceholder API urls
const userUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";

// fetch call for the users and there id
async function getUsers() {
  const response = await fetch(userUrl);
  const users = await response.json();
  return users;
}
// export the getUsers function for unit test
exports.getUsers = getUsers;

// async function to fetch todos
async function getTodos() {
  const response = await fetch(todosUrl);
  const todos = await response.json();
  return todos;
}

//export.getTodos function for unit testing purposes
exports.getTodos = getTodos;

// async function to get User Todos
async function getUsersTodos(username) {

 //Try statement to procced with the function
  try {
    let users = await getUsers();
    const user = users.find((u) => u.username === username);
    if (!user) {
      throw new Error(
        `User with username of ${username} was not found in users list`
      );
    }

    // Put the getTodos data into a variable to use 
    const todos = await getTodos();

    // Variables for the loop to update
    let outstanding = 0;
    let total = 0;
    let jobTitle = [];

    // loop to match userid to the user and return total jobs, outstanding jobs and push the job tile to array
    todos.forEach((todo) => {
      if (todo.userId === user.id) {
        total++;

        if (todo.completed === false) {
          outstanding++;
          jobTitle.push(todo.title);
        }
      }
    });
    //Print the user, total number of jobs and outstanding jobs
    console.log(
      `${username} has ${total} tasks of which ${outstanding} are uncompleted, \n Current outstanding jobs are:`
    );
    //Loop to print the outstanding jobs to the console
    jobTitle.forEach((job) => {
      let jobs = `- ${job}`;
      console.log(jobs);
    });

    // catch statment to catch any errors 
  } catch (err) {
    console.error(err);
  }
}

// Command Line arguement for the Terminal
const input = process.argv[2];
if (!input) {
  console.error("A username argument is required");
} else {
  getUsersTodos(input);
}
