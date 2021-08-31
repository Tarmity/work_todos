// DEPENDENICES 
// Series of npm packages that will be used to give the server functionality 
const express = require('express');

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
const app = express();

// Sets the initial PORT
const PORT = process.env.PORT || 4000;

// The below code starts the server
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))