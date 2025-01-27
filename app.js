document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        authenticateUser(username, password);
    } else {
        document.getElementById("loginResult").innerText = "Both fields are required!";
    }
});

function authenticateUser(username, password) {
    // Mock CIA-style authentication
    const CIA_CREDENTIALS = { username: 'agent001', password: 'topsecret' };

    if (username === CIA_CREDENTIALS.username && password === CIA_CREDENTIALS.password) {
        document.getElementById("loginResult").innerText = "Login successful. Access granted!";
        document.getElementById("loginResult").style.color = "green";
        document.getElementById("output").innerHTML = `
            <p>Welcome, ${CIA_CREDENTIALS.username}!</p>
            <p>You have full access to the system.</p>
        `;
    } else {
        document.getElementById("loginResult").innerText = "Invalid username or password.";
        document.getElementById("loginResult").style.color = "red";
    }
}
