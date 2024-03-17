// ================== Assignment # 17-20 =================


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var arr = [[], []]

// 2. Declare and initialize a multidimensional array representing the following matrix:

// arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

// document.write(arr[0], "<br/>", arr[1], "<br/>", arr[2], "<br/>")

// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//     document.write(i, "<br/>")
// }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var num = +prompt("Enter a number to show its multiplication table");
// var leng = +prompt("Enter length of multiplication table");

// document.write("Multiplication table of " + num);
// document.write("<br/>Length: " + leng + "<br/>" + "<br/>");

// for (var i = 1; i <= leng; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br/>");
// }

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " " + fruits[i] + "<br/>")
// }


// 6 . Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// document.write("<h3>Counting</h3>");

// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }

// document.write("<h3>Reverse counting</h3>");

// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }

// document.write("<h3>Even counting</h3>");

// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ",");
// }

// document.write("<h3>Odd counting</h3>");

// for (var i = 1; i <= 20; i += 2) {
//     document.write(i + ",");
// }

// document.write("<h3>Series</h3>");

// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k,");
// }


