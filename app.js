const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
