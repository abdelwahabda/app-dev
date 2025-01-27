const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const express = require('express');
const app = express();
const port = process.env.PORT || 10000;  // Use the Render-defined port or fallback to 10000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
