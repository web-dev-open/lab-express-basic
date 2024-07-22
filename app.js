const express = require('express');
const path = require('path');

const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));


app.listen(3000,(req,res)=>{
    console.log("it works")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'works.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});