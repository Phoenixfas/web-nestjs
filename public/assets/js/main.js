document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('errorMessage').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '') {
        showError('Name is required.');
        return;
    }
    
    if (email === '') {
        showError('Email is required.');
        return;
    } else if (!validateEmail(email)) {
        showError('Please enter a valid email address.');
        return;
    }
    
    if (message === '') {
        showError('Message is required.');
        return;
    }

    alert('Form submitted successfully!');

});

function showError(message) {
    document.getElementById('errorMessage').textContent = message;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}