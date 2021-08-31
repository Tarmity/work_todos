// DEPENDENICES 
// // Series of npm packages that will be used to give the server functionality. 
// const express = require('express');
// const axios = require('axios')
const fetch = require('node-fetch');

// fetch call for the users and there id 
const userUrl = 'https://jsonplaceholder.typicode.com/users'
const todosUrl = 'https://jsonplaceholder.typicode.com/todos'

async function getUsers() {
    const response = await fetch (userUrl);
    const users = await response.json();
    return users
}

async function getTodos() {
    const response = await fetch (todosUrl);
    const todos = await response.json();
    return todos
}

//  fetch call for the todos 
async function getUsersTodos(username) {
    try {
        let users = await getUsers();
        const user = users.find(u => u.username === username)
        if (!user) {
            throw new Error(`User with username of ${username} was not found in users list`)
        }
        
        const todos = await getTodos();

        let outstanding = 0;
        let total = 0
        todos.forEach(todo => {
            if (todo.userId === user.id) {
                total++
            
                if((todo.completed === false)){
                    outstanding++
                }
            }
        })

        console.log(`${username} has ${total} tasks of which ${outstanding} are uncompleted`)
    } catch (err) {
        console.error(err)
    }
}


const input = process.argv[2]
if (!input) {
    console.error("A username argument is required")
} else {
    getUsersTodos(input)
}


