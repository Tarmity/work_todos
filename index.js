// bring in the express framework and storing it in a constant
const express = require('express');

//Initialize the express framework and saving ito into a constant
const app = express();

// Saving the PORT of server into a constant
const PORT = process.env.PORT || 4000;

// App listening and logging to the console that the server is runnning on PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))