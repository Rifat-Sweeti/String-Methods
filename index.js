// Q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome to our website.");

// Q2
var favoriteModel = prompt("What is your favorite mobile phone model?");
var lengthOfInput = favoriteModel.length;
document.write("<h1>" + 'Phone Model' + "</h1>");
document.write("Length of your favorite mobile phone model input is: " + lengthOfInput);

// Q3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("<h1>" + 'Index of Letter' + "</h1>");
document.write("The index of 'n' in the word 'Pakistani' is: " + index);

// Q4
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("<h1>" + 'Last Index of Letter' + "</h1>");
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);

// Q5
var word = "Pakistani";
var index = word.indexOf("i");
document.write("<h1>" + 'Index of Letter' + "</h1>");
document.write("The index of 'i' in the word 'Pakistani' is: " + index);

// Q6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome to our website.");

// Q7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("<h1>" + 'Replacement' + "</h1>");
document.write("Original city name: " + city + "<br>");
document.write("After replacement: " + newCity);

// Q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMessage = message.replace(/and/g, "&");
document.write("<h1>" + 'Replacement' + "</h1>");
document.write("Original Message: " + message + "<br>");
document.write("Modified Message: " + modifiedMessage);

// Q9
var str = "472";
var num = parseInt(str); 
document.write("<h1>" + 'Converts String' + "</h1>");
document.write("String value: " + str + "<br>");
document.write("Number value: " + num);

// 10
var userInput = prompt("Enter your input:");
var uppercaseInput = userInput.toUpperCase();
document.write("<h1>" + 'Converts lowercase' + "</h1>");
document.write("Original input: " + userInput + "<br>");
document.write("Input in uppercase: " + uppercaseInput);

// Q11
var userInput = prompt("Enter text:");
if (userInput) {
    var firstChar = userInput[0].toUpperCase();
    var restOfString = userInput.slice(1).toLowerCase();
    var titleCase = firstChar + restOfString;
    console.log("Title case: " + titleCase);
    alert("Title case: " + titleCase);
} else {
    console.log("No input provided.");
}

// Q12
var num = 35.36;
var numStr = num.toString().replace('.', '');
console.log("Result: " + numStr);
alert("Result: " + numStr);

// Q13
var username = prompt("Enter your username:");

if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
    alert("Invalid username. Please enter a valid username without @, ., ,, or !");
} else {
    console.log("Username is valid: " + username);
    alert("Username is valid: " + username);
}

// Q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var lowerCaseInput = userInput.toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowerCaseInput) {
        found = true;
        break;
    }
}
if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}

// Q15
var password = prompt("Enter your password:");
var hasLetter = /[a-zA-Z]/.test(password);
var hasNumber = /[0-9]/.test(password);
var startsWithLetter = /^[a-zA-Z]/.test(password);
var isLengthValid = password.length >= 6;
if (hasLetter && hasNumber && startsWithLetter && isLengthValid) {
    alert("Password is valid.");
} else {
    alert("Invalid password. Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
}

// Q16
document.write("<h1>" + 'String to Array' + "</h1>");
var university = "University of Karachi";
var charArray = university.split('');
for (var i = 0; i < charArray.length; i++) {
    if (charArray[i] === ' ') {
        document.write('<br>');
    } else {
        document.write(charArray[i] + '<br>'); 
    }
}

// Q17
var userInput = prompt("Enter a string:");
if (userInput && userInput.length > 0) {
    var lastChar = userInput[userInput.length - 1];
    alert("Last character: " + lastChar);
} else {
    alert("Invalid input. Please enter a non-empty string.");
}

// Q18
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var lowerCaseSentence = sentence.toLowerCase();
var lowerCaseWord = wordToSearch.toLowerCase();
var words = lowerCaseSentence.split(' ');
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === lowerCaseWord) {
        count++;
    }
}
console.log("Number of occurrences of '" + wordToSearch + "': " + count);
alert("Number of occurrences of '" + wordToSearch + "': " + count);