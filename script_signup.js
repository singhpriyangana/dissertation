document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (fullname === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Here you would send the form data to the server to create the account
    // For demonstration, we'll just show a success message
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Signup successful!';
    // Redirect or perform further actions upon successful signup
});
