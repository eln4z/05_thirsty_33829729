// Setup express and ejs
const express = require('express');

// Create the express application object
const app = express();
const port = process.env.PORT || 8000;

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from /public if you add any later
app.use(express.static('public'));

// ===== Add this middleware so POST form data (req.body) works =====
app.use(express.urlencoded({ extended: true }));

// Load the route handlers
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Thirsty Student app listening on port ${port}!`));
