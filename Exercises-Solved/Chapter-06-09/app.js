// ================== Assignment # 6 to 9 =====================


// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10;

document.write("Result: ")
document.write("<br/>The value of a is: ", a)
document.write("<br/>............................")
document.write("<br/>")
document.write("<br/>The value of ++a is: ", ++a)
document.write("<br/>Now the value of a is: ", a)
document.write("<br/>")
document.write("<br/>The value of a++ is: ", a++)
document.write("<br/>Now the value of a is: ", a)
document.write("<br/>")
document.write("<br/>The value of --a is: ", --a)
document.write("<br/>Now the value of a is: ", a)
document.write("<br/>")
document.write("<br/>The value of a-- is: ", a--)
document.write("<br/>Now the value of a is: ", a)

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

// // --a; // pre decrement the value of a is 1 
// // --a - --b; // pre decrement and subtract of a and b the result is 0 on both variable
// // --a - --b + ++b; // pre decrement and subtract of a and b the then pre increment of variable b the result of a is -1 and b 0
// // --a - --b + ++b + b--; // pre decrement and subtract of a and b the then pre increment of variable b also post decrement of variable b the result of a is -2 and b -1

document.write("The value of a is: ", a);
document.write("<br/>The value of b is: ", b);
document.write("<br/>The value of result is: ", result);

// 3. Write a program that takes input a name from user & greet the user.

var name = prompt("Enter your name:");
document.write("Hello, " + name + "! Welcome to our website.");

// 4.
// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default.

var number = +prompt("Enter a number:", 5);

document.write("<h2>Multiplication Table of ", number, "</h2>");

document.write(number, " x 1 = ", number * 1, "<br>");
document.write(number, " x 2 = ", number * 2, "<br>");
document.write(number, " x 3 = ", number * 3, "<br>");
document.write(number, " x 4 = ", number * 4, "<br>");
document.write(number, " x 5 = ", number * 5, "<br>");
document.write(number, " x 6 = ", number * 6, "<br>");
document.write(number, " x 7 = ", number * 7, "<br>");
document.write(number, " x 8 = ", number * 8, "<br>");
document.write(number, " x 9 = ", number * 9, "<br>");
document.write(number, " x 10 = ", number * 10);


// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var obtainedMarks1 = +prompt("Enter the obtained marks for " + subject1 + ":");
var obtainedMarks2 = +prompt("Enter the obtained marks for " + subject2 + ":");
var obtainedMarks3 = +prompt("Enter the obtained marks for " + subject3 + ":");

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var subject1Percentage = (obtainedMarks1 / totalMarks) * 100;
var subject2Percentage = (obtainedMarks2 / totalMarks) * 100;
var subject3Percentage = (obtainedMarks3 / totalMarks) * 100;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + subject1Percentage + "%" + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + subject2Percentage + "%" + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + subject3Percentage + "%" + "</td></tr>");
document.write("<tr><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th><td>" + percentage + "%" + "</td></tr>");
document.write("</table>");

