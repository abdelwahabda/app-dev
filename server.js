const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use the environment variable PORT, or fall back to 10000 if it's not set (Render defines PORT for you)
const port = process.env.PORT || 10000;

// Your existing setup...
app.use(bodyParser.json());
app.use(express.static('public'));

const CIA_CREDENTIALS = { username: 'agent001', password: 'topsecret' };

app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;
    
    if (username === CIA_CREDENTIALS.username && password === CIA_CREDENTIALS.password) {
        res.status(200).json({ message: "Login successful. Access granted!" });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
});

// Make sure the app listens on the correct port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
