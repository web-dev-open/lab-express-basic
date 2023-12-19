const express  = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/views/work.html');
})


app.listen(3000, () => console.log('My first app listening on port 3000!'));