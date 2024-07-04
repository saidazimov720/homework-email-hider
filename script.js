var email = prompt("Enter the e-mail");

function detect(email) {
    var atIndex = email.indexOf("@");

    
}

if (email.length >= 3) {
    email.padEnd(email.length + (email.length < 3 ? 3  - email.length : 0), "*");
    alert(email);
} else {
    alert("it is invalid e-mail");
}