// Get the login button
var loginButton = document.getElementById('loginButton');
var loginForm = document.getElementById('loginForm');

// Set the initial position of the button
var initialLeft = (window.innerWidth - loginButton.offsetWidth) / 2; // Centered horizontally
var initialTop = loginForm.getBoundingClientRect().bottom + 20; // 20px below the form
loginButton.style.left = initialLeft + 'px';
loginButton.style.top = initialTop + 'px';

// Function to calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Function to handle mousemove and touchmove events for login button
function handleMove(event, button) {
    var clientX, clientY;

    if (event.type === 'mousemove') {
        clientX = event.clientX;
        clientY = event.clientY;
    } else if (event.type === 'touchmove') {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
    }

    var buttonX = button.getBoundingClientRect().left + button.offsetWidth / 2;
    var buttonY = button.getBoundingClientRect().top + button.offsetHeight / 2;
    var dist = distance(clientX, clientY, buttonX, buttonY);

    if (dist < 100) {
        var angle = Math.atan2(clientY - buttonY, clientX - buttonX);
        var newX = buttonX - 100 * Math.cos(angle);
        var newY = buttonY - 100 * Math.sin(angle);
        button.style.left = newX - button.offsetWidth / 2 + 'px';
        button.style.top = newY - button.offsetHeight / 2 + 'px';
    } else {
        button.style.left = initialLeft + 'px';
        button.style.top = initialTop + 'px';
    }
}

// Add event listeners for mousemove and touchmove events for login button
document.addEventListener('mousemove', function(event) {
    handleMove(event, loginButton);
});

document.addEventListener('touchmove', function(event) {
    handleMove(event, loginButton);
});

// Add event listener to handle click event for document
document.addEventListener('click', function(event) {
    handleMove(event, loginButton);
});

// Add event listener to handle touchstart event for login button
loginButton.addEventListener('touchstart', function(event) {
    handleMove(event, loginButton);
});

// Login function
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For demonstration purposes, just log the values to the console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // You can add your authentication logic here
}
