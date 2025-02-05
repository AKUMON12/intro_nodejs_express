const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Serve static files from the "public" folder
app.use(express.static('public'));


// Add a new route to handle a GET request
app.get('/about', (req, res) => {
    res.send('About Us');
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// Add middleware to log incoming requests
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// Add a new route to display a list of items
const items = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});
  

  

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
