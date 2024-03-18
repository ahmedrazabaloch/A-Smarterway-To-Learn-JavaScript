// ================== Assignment # 17-20 =================


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var arr = [[], []]

// 2. Declare and initialize a multidimensional array representing the following matrix:

arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

document.write(arr[0], "<br/>", arr[1], "<br/>", arr[2], "<br/>")

// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    document.write(i, "<br/>")
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var num = +prompt("Enter a number to show its multiplication table");
var leng = +prompt("Enter length of multiplication table");

document.write("Multiplication table of " + num);
document.write("<br/>Length: " + leng + "<br/>" + "<br/>");

for (var i = 1; i <= leng; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br/>");
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " " + fruits[i] + "<br/>")
}


// 6 . Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



document.write("<h3>Counting</h3>");

for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}

document.write("<h3>Reverse counting</h3>");

for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}

document.write("<h3>Even counting</h3>");

for (var i = 0; i <= 20; i += 2) {
    document.write(i + ",");
}

document.write("<h3>Odd counting</h3>");

for (var i = 1; i <= 20; i += 2) {
    document.write(i + ",");
}

document.write("<h3>Series</h3>");

for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k,");
}


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in anarray.After searching, prompt the user whether the given item is found in the list or not. Example:

var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"]

var item = prompt("Welcome to ABC bakery. What do you want to order Sir|Ma'am?")

var found = false;

for (var i = 0; i < bakeryItem.length; i++) {
    if (item === bakeryItem[i]) {
        document.write(bakeryItem[i] + " is <b>available</b> at index " + i + " in our bakery");
        found = true;
        break;
    }
}

if (!found) {
    document.write("We are sorry. " + item + " is <b>not available</b> in our bakery");
}


// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].


var arr = [24, 53, 78, 91, 12];
var largest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

document.write("Array items: " + arr)
document.write("<br/>The largest number is: " + largest)


// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]


var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i]
    }
}


document.write("Array items: " + arr)
document.write("<br/>The smallest number is: " + smallest)

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ")
}