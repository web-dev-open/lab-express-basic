const express = require('express');
const path = require('path');

const app = express();

// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/works', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/works.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/gallery.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
