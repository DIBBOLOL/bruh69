// Function to calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Function to handle mousemove event
function handleMousemove(event, button) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var buttonX = button.getBoundingClientRect().left + button.offsetWidth / 2;
    var buttonY = button.getBoundingClientRect().top + button.offsetHeight / 2;
    var dist = distance(mouseX, mouseY, buttonX, buttonY);

    // Adjust the fleeing factor
    var fleeingFactor = 100; // You can change this value to control how far the button moves away

    // Default position of the login button
    var defaultPositionX = (window.innerWidth - button.offsetWidth) / 2; // Centered horizontally
    var defaultPositionY = document.getElementById('loginForm').getBoundingClientRect().bottom + 20; // 20px below the form

    // If mouse is too close to the button, move it away
    if (dist < fleeingFactor) {
        var angle = Math.atan2(mouseY - buttonY, mouseX - buttonX);
        var newX = buttonX - fleeingFactor * Math.cos(angle);
        var newY = buttonY - fleeingFactor * Math.sin(angle);

        // Check if the new position is within the window boundaries
        var maxX = window.innerWidth - button.offsetWidth / 2;
        var maxY = window.innerHeight - button.offsetHeight / 2;

        // Adjust the new position if it's outside the window boundaries
        newX = Math.max(Math.min(newX, maxX), button.offsetWidth / 2);
        newY = Math.max(Math.min(newY, maxY), button.offsetHeight / 2);

        button.style.left = newX - button.offsetWidth / 2 + 'px';
        button.style.top = newY - button.offsetHeight / 2 + 'px';
    } else {
        // Return button to default position below the form
        button.style.left = defaultPositionX + 'px';
        button.style.top = defaultPositionY + 'px';
    }
}

// Get the login button
var loginButton = document.getElementById('loginButton');

// Set the initial position of the button
var initialLeft = (window.innerWidth - loginButton.offsetWidth) / 2; // Centered horizontally
var initialTop = document.getElementById('loginForm').getBoundingClientRect().bottom + 20; // 20px below the form
loginButton.style.left = initialLeft + 'px';
loginButton.style.top = initialTop + 'px';

// Add event listener to handle mousemove event for login button
document.addEventListener('mousemove', function(event) {
    handleMousemove(event, loginButton);
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
