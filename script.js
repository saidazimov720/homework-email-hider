var email = prompt("Enter the e-mail");

if (email.length >= 3) {
    email.padEnd(email.length + (email.length < 3 ? 3  - email.length : 0), "*");
    alert(email);
} else {
    alert("it is invalid e-mail");
}