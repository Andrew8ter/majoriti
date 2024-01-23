const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); 

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

// Export the app for use in server.js
module.exports = app;
