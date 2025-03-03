const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));
app.get('/works', (req, res) => res.sendFile(__dirname + '/views/works.html'));
app.get('/gallery', (req, res) => res.sendFile(__dirname + '/views/gallery.html'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
