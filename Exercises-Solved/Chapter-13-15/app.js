// ========================== Assignment # 13-15 ==========================

// 1. 2. Declare an empty array using JS literal notation to store student names in future

var studentNames = [];

// 3. Declare and initialize a strings array.

var stringArray = ["Hello","World"]

// 4. Declare and initialize a numbers array.

var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false]

// 6. Declare and initialize a mixed array.

var mixedArray = ["JavaScript", 100, true]

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser like:

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.write("<h1>Qualifications:</h1>");
document.write(
  "1) " +
    qualifications[0] +
    "<br/>" +
    "2) " +
    qualifications[1] +
    "<br/>" +
    "3) " +
    qualifications[2] +
    "<br/>" +
    "4) " +
    qualifications[3] +
    "<br/>" +
    "5) " +
    qualifications[4] +
    "<br/>" +
    "6) " +
    qualifications[5] +
    "<br/>" +
    "7) " +
    qualifications[6] +
    "<br/>" +
    "8) " +
    qualifications[7] +
    "<br/>"
);

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

var percentages = [];

var percentage = (scores[0] / 500) * 100;
percentages.push(percentage);
var percentage = (scores[1] / 500) * 100;
percentages.push(percentage);
var percentage = (scores[2] / 500) * 100;
percentages.push(percentage);


document.write("Score of " + studentNames[0] + " is " + scores[0] + ". Percentage: " + percentages[0] + "%<br>");
document.write("Score of " + studentNames[1] + " is " + scores[1] + ". Percentage: " + percentages[1] + "%<br>");
document.write("Score of " + studentNames[2] + " is " + scores[2] + ". Percentage: " + percentages[2]);

// 9. Initialize an array with color names. Display the arrayelements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var colors = ["Red", "Green", "Blue"];
document.write("Orignal Array: " + colors + "<br>");

// A

var colorToAdd = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAdd);
document.write("Updated array after adding color at the beginning: " + colors + "<br>");

// B

var colorToAdd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAdd);
document.write("Updated array after adding color at the end: " + colors + "<br>");

// C

colors.unshift("White", "Black");
document.write("Updated array after adding two colors at the beginning: " + colors + "<br>");

// D

colors.shift();
document.write("Updated array after deleting the first color: " + colors + "<br>");

// E

colors.pop();
document.write("Updated array after deleting the last color: " + colors + "<br>");

// F

var indexToAdd = prompt("Enter the index at which you want to add a color:");
var colorToAdd = prompt("Enter a color to add at the specified index:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("Updated array after adding color at index " + indexToAdd + ": " + colors + "<br>");

// G

var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("Updated array after deleting color(s) from index " + indexToDelete + ": " + colors + "<br>");


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.


var studentsScores = [320, 230, 480, 120]

var sortedArray = studentsScores.sort()

document.write("Scores of Students: " + studentsScores)
document.write("<br/>Ordered Scores of Students: " + sortedArray)

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cites = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

document.write("Cites List: <br/>" + cites)
document.write("<br/>")
document.write("<br/>Selected cites List: <br/>" + cites.splice(2, 2))


// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"]

document.write("Array: <br/>" + arr)
document.write("<br/>")
document.write("<br/>String: <br/>" + arr.join(" "))

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]

document.write("Devices <br/>" + devices + "<br/>")
document.write("<br/>Out: <br/>" + devices.shift())
document.write("<br/>Out: <br/>" + devices.shift())
document.write("<br/>Out: <br/>" + devices.shift())
document.write("<br/>Out: <br/>" + devices.shift())


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]

document.write("Devices <br/>" + devices + "<br/>")
document.write("<br/>Out: <br/>" + devices.pop())
document.write("<br/>Out: <br/>" + devices.pop())
document.write("<br/>Out: <br/>" + devices.pop())
document.write("<br/>Out: <br/>" + devices.pop())

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");
document.write("<option>" + manufacturers[5] + "</option>");
document.write("</select>");
