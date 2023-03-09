// Import the required modules
const express = require('express');
const morgan = require('morgan');

// Create an Express app instance
const app = express();

// Log all requests to the console using Morgan middleware
app.use(morgan('combined'));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for /movies endpoint
app.get('/movies', (req, res) => {
    const topMovies = [
        { title: 'The Godfather', year: 1972 },
        { title: 'Shutter Island', year: 2010 },
        { title: 'The Dark Knight', year: 2008 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Silence of the Lambs', year: 1991 }
    ];

    res.json(topMovies);
});

// Route for / endpoint
app.get('/', (req, res) => {
    res.send('Hello, this is my myFlix API!');
});

// Create a route that will throw an error
app.get('/error', (req, res) => {
    throw new Error('This is a simulated error!');
});

// Create an error-handling middleware function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
