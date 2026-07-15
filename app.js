const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});


app.get('/works', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'works.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running smoothly on http://localhost:${PORT}`);
});