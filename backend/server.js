const express = require('express');
const path = require('path');
const Tailor = require('node-tailor')

// Create a new instance of Tailor
const tailor = new Tailor({
  templatesPath: path.join(__dirname, 'public')
});

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files for the navbar
// @ts-ignore
app.use('/navbar', express.static(path.join(__dirname, '/public/navbar')));
// @ts-ignore
app.use('/sidebar', express.static(path.join(__dirname, '/public/sidebar')));
// @ts-ignore
app.use('/monitoring', express.static(path.join(__dirname, '/public/monitoring')));
// @ts-ignore
app.use('/dashboard', express.static(path.join(__dirname, '/public/dashboard')));

// Serve the main page with the layout and fragments
// @ts-ignore
app.get('/', (req, res) => {
  console.log(path.join(__dirname, '/public/main.html'));
  res.sendFile(path.join(__dirname, '/public/main.html'));
});

// Tailor will serve fragments
// @ts-ignore
app.get('/fragment', (req, res) => {
  tailor.requestHandler(req, res);
});

// @ts-ignore
app.listen(PORT, () => {
  console.log(`Tailor server running on http://localhost:${PORT}`);
});
