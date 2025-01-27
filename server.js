const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Get the port from environment variable PORT (default to 10000 if not set)
const port = process.env.PORT || 10000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.static('public'));

// CIA Authentication example
const CIA_CREDENTIALS = { username: 'agent001', password: 'topsecret' };

app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;
    
    // Check credentials
    if (username === CIA_CREDENTIALS.username && password === CIA_CREDENTIALS.password) {
        res.status(200).json({ message: "Login successful. Access granted!" });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
});

// Start the server and listen on the appropriate port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
