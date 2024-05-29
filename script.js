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
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const backgroundImage = document.querySelector('.background-image');
    const modeIcon = document.getElementById('toggleModeIcon').firstElementChild;
    if (body.classList.contains('dark-mode')) {
        backgroundImage.classList.remove('light-mode-bg');
        backgroundImage.classList.add('dark-mode-bg');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        backgroundImage.classList.remove('dark-mode-bg');
        backgroundImage.classList.add('light-mode-bg');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
}

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'flex';
    } else {
        searchBar.style.display = 'none';
    }
}