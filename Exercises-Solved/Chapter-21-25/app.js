// ================= Assignment # 21-25 =================


// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = firstName + " " + lastName

// alert("Welcome! " + fullName)


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var favoriteMobile = prompt("What is your favorite mobile name and modal");

// document.write("My favorite phone is: " + favoriteMobile)
// document.write("<br/>Length of string: " + favoriteMobile.length)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// var str = "Pakistani"

// var index = str.indexOf("n")

// document.write("String: " + str)
// document.write("<br/>Index of 'n': " + index)


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var str = "Hello World"

// var index = str.lastIndexOf("l")

// document.write("String: " + str)
// document.write("<br/>Last index of 'l': " + index)


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "Pakistani"

// var index = str.charAt(3)

// document.write("String: " + str)
// document.write("<br/>Character at index 3: " + index)

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = firstName.concat(" " + lastName)

// alert("Welcome! " + fullName)

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var repl = city.replace("Hyder", "Islam");

// document.write("City: " + city);
// document.write("<br/>After replacement: " + repl);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replAll = message.replace(/and/g, "&");
// document.write("Original message: " + message);
// document.write("<br/>After replacement: " + replAll);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// var num = Number(str)

// document.write("Value: " + str);
// document.write("<br/>Type: " + typeof str);
// document.write("<br/>Value: " + num);
// document.write("<br/>Type: " + typeof num);


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var userInput = prompt("Enter a word that convert to Uppercase")
// var convertToUpper = userInput.toUpperCase()

// document.write("User Input: " + userInput)
// document.write("<br/>Upper case: " + convertToUpper)

// 11. Write a program that takes user input. Convert and show the input in title case.

// var userInput = prompt("Enter a word that convert to Title Case");
// var convertToTitleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("User Input: " + userInput);
// document.write("<br/>Title Case: " + convertToTitleCase);


// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString().replace(".", "");

// document.write("Number: " + num);
// document.write("<br/>Result: " + str);


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var userName = prompt("Enter your userName");

if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
    alert("Please enter a valid userName without special symbols [@ . , !]");
} else {
    alert("Welcome: " + userName);
}