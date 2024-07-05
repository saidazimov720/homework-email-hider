var text = prompt("Enter the text");
var find = prompt("Find the word");
var rep = prompt("Word for replace");

if (text && find) {
    var newtext = text.replace(new RegExp(find, 'g'), rep);
    alert("Updated text:", newtext);
} else {
    alert("Invalid value");
}