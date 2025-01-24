document.getElementById("farmer-registration-form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
 
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();     }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        event.preventDefault();
    }
});
