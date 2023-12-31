const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.use(express.static('public/..'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('../about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
  });
  
  app.get('../contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
