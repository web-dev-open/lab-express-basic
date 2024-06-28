const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Route for the works page
app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'works.html'));
});

// Route for the gallery page
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
