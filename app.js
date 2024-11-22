const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/works', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'works.html'));
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});