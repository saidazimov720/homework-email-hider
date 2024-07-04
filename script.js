var email = prompt("Enter the e-mail");

if (email.length >= 3) {
    email.padEnd(3 , "*");
    alert(email);
} else {
    alert("it is invalid e-mail");
}