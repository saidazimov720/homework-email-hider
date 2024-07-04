var email = prompt("Enter the e-mail");

function detect(email) {
    var atIndex = email.indexOf("@");

    if (atIndex > 4) {
        var detectedpart = "*".repeat(atIndex - 2);
        email = email.substring(0, 2) + detectedpart + email.substring(atIndex)
    }
}

if (email.length >= 3) {
    email.padEnd(email.length + (email.length < 3 ? 3  - email.length : 0), "*");
    alert(email);
} else {
    alert("it is invalid e-mail");
}