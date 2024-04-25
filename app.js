const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/views/work.html');
});
app.get('/photo-galary', (req, res) => {
    res.sendFile(__dirname + '/views/photo-galary.html');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});