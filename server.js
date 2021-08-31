// DEPENDENICES 
// Series of npm packages that will be used to give the server functionality. 
const express = require('express');
const axios = require('axios')
const fetch = require('node-fetch');
const { response } = require('express');

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server.
const app = express();

// Sets the initial PORT
const PORT = process.env.PORT || 4000;

//Sets up the Express app to handle data parsing and serving.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The below code starts the server.
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))

const url = 'https://jsonplaceholder.typicode.com/users'

// fetch call for the todo's 
// let todos;
async function catchTodos() {
    const response = await fetch (url);
    const todos = await response.json();
    document.getElementById('data').src = todos
    return todos
}

 const todoList = catchTodos()

console.log(todoList)

// const todos = fetch(url)
// .then(response => {
//     console.log(response)
//     return response.json()
// })
// .then(response => {
//   console.log(response)
//   todoList = response
// })
// // .then(data => todos = data)
// // .then(todos.json)
// let todoList = todos;
// let userList;
// console.log(`This is the ${todoList}`)
// console.log(`WELL THIS IS THE TODOLIST ${userList}`)
