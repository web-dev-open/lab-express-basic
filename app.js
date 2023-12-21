const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.post('/works', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'works.html'));
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
