const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
    // res.send('Hello, Node.js!');
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/binary-search', (req, res) => {
    // res.send('Hello, Node.js!');
    res.sendFile(__dirname + '/views/binary-search.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
