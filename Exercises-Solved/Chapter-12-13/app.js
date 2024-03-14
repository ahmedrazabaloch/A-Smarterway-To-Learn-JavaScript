// ====================== Assignment # 12 to 13 ========================

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var userInput = prompt("Enter a value and check its case");

if (userInput.charCodeAt() >= 65 && userInput.charCodeAt() <= 90) {
    alert(userInput + " is an uppercase letter");
} else if (userInput.charCodeAt() >= 97 && userInput.charCodeAt() <= 122) {
    alert(userInput + " is a lowercase letter");
} else {
    alert(userInput + " is not a letter");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var num1 = +prompt("Please enter first number")
var num2 = +prompt("Please enter second number")

if (num1 > num2) {
    alert(num1 + " is greather then " + num2)
} else if (num1 < num2) {
    alert(num2 + " is greather then " + num1)
} else if (num1 === num2) {
    alert(num1 + " and " + num2 + " are equal")
} else {
    alert("invalid operation")
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var userInput = +prompt("Enter a number");

if (userInput > 0) {
    alert(userInput + " is a positive number");
} else if (userInput < 0) {
    alert(userInput + " is a negative number");
} else {
    alert("The number is zero");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter a character and check its a vowels or not");

var vowels = ['a', 'e', 'i', 'o', 'u'];

if (character.toLowerCase() == "a" || character.toLowerCase() == "e" || character.toLowerCase() == "i" || character.toLowerCase() == "o" || character.toLowerCase() == "u") {
    alert(character + " is a vowels letter")
} else {
    alert("try another word")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password ”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
// Show “Incorrect password” otherwise.

var pass = prompt("Enter your password");

if (!pass) {
    alert("Please enter your password ");
} else if (pass) {
    var confPass = prompt("Reconfirm your passowrd");
    if (pass === confPass) {
        alert("Correct! The password you entered matches the original password");
    } else {
        alert("Incorrect password");
    }
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements

var time = +prompt("Please Enter current time like 2100", 1800);

if (time >= 0000 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
