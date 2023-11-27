// Require express
const express = require('express');

//Express Server handling requests and responses
const app = express();

//Make everything inside of the public folder available
app.use(express.static('public'));


//index route
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));

app.listen(3000, () => console.log('Start server'));
