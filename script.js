document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    // In a real-world application, here you would send a request to the server to authenticate the user.
    // For demonstration, we'll just check if the username is 'user' and password is 'password'.
    if (username === 'user' && password === 'password') {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login successful!';
        // Redirect or perform further actions upon successful login
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
