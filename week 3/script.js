// Function to validate the form inputs
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let errorMsg = "";

    // Validate name
    if (name === "") {
        errorMsg += "Please enter your name.\n";
    }

    // Validate email (basic validation)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        errorMsg += "Please enter your email.\n";
    } else if (!emailPattern.test(email)) {
        errorMsg += "Please enter a valid email address.\n";
    }

    // Validate message
    if (message === "") {
        errorMsg += "Please enter your message.\n";
    }

    // If there are errors, display the error message
    if (errorMsg !== "") {
        document.getElementById('error-msg').textContent = errorMsg;
    } else {
        // No errors - submit form (you can handle the actual submission here)
        document.getElementById('error-msg').textContent = "";
        alert("Form submitted successfully!");
        // Optionally, you can submit the form with the line below:
        this.submit();
    }
});
