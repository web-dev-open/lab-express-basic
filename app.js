const express = require('express');
const app = express();
const port = 3000;

//configure the statis folder
app.use(express.static(__dirname + '/public'));

//add port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});

//configure route for home page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/views/home.html');
});

//configure route for about page
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/public/views/about.html');
});

//consfigure route for works page
app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/public/views/works.html');
});

//consfigure route for works page
app.get('/photos', (request, response) => {
    response.sendFile(__dirname + '/public/views/photos.html');
});
