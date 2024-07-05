var text = prompt("Enter the text");
var find = prompt("Find the word");
var rep = prompt("Word to replace with");

if (text && find) {
    var startIndex = 0;
    var newText = '';

    for (var i = 0; i < text.length; i++) {
        if (text.substring(i, i + find.length) === find) {
            newText += text.substring(startIndex, i) + rep;
            i += find.length - 1;
            startIndex = i + 1;
        }
    }

    newText += text.substring(startIndex);
    alert("Updated text: " + newText);
} else {
    alert("Please enter both the text and the word to find.");
}
