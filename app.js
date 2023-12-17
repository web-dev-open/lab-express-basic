// Require Express
const favicon = require('serve-favicon');
const express = require('express');

// Express server handling requests and responses
const app = express();

const port = 3000;
const url = ('http://localhost:3000/home');

// Make everything inside of public/ available
app.use(express.static('public/..'));
app.use(favicon(__dirname + '/orion-favicon.png'));

// Orion Home Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));
// console.log(__dirname);

// Orion Works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Orion About Us Route
app.get('/aboutus', (request, response, next) => response.sendFile(__dirname + '/views/aboutus.html'));

// Orion Gallery Route
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

// Server Started
app.listen(port, () => console.log(`Express app listening on port ${port}!`) + console.log(url));