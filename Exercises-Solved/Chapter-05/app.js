// ===================== Assignment # 5 ===================

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = +prompt("Enter a first number", "5")
var num2 = +prompt("Enter a second number", "10")

document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var num3 = +prompt("Enter a first number", "10")
var num4 = +prompt("Enter a second number", "5")

document.write("Subtraction of " + num3 + " and " + num4 + " is " + (num3 - num4) + "<br>")

document.write("Multiplication of " + num3 + " and " + num4 + " is " + (num3 * num4) + "<br>")

document.write("Division of " + num3 + " and " + num4 + " is " + (num3 / num4) + "<br>")

document.write("Modulus of " + num3 + " and " + num4 + " is " + (num3 % num4))


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var num;

document.write("Value after variable declaration is: " + num)

num = 5;

document.write("<br/> Initial value: " + num)

num = num + 1

document.write("<br/> Value after increment is: " + num)

num = num + 7

document.write("<br/> Value after addition is: " + num)

num = num - 1

document.write("<br/> Value after decrement is: " + num)

num = num % 3

document.write("<br/> The remainder is: " + num)


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Example output:

var ticket = 600;

var buying = 5;

var totalAmount = ticket * buying

document.write("Total cost of buy " + buying + " ticket to a movie is " + totalAmount + "PKR")


// 5. Write a script to display multiplication table of any number in your browser. E.g

var tablePrint = 4;

document.write("Table of " + tablePrint)
document.write("<br/> " + tablePrint + " x 1 = " + tablePrint * 1);
document.write("<br/> " + tablePrint + " x 2 = " + tablePrint * 2);
document.write("<br/> " + tablePrint + " x 3 = " + tablePrint * 3);
document.write("<br/> " + tablePrint + " x 4 = " + tablePrint * 4);
document.write("<br/> " + tablePrint + " x 5 = " + tablePrint * 5);
document.write("<br/> " + tablePrint + " x 6 = " + tablePrint * 6);
document.write("<br/> " + tablePrint + " x 7 = " + tablePrint * 7);
document.write("<br/> " + tablePrint + " x 8 = " + tablePrint * 8);
document.write("<br/> " + tablePrint + " x 9 = " + tablePrint * 9);
document.write("<br/> " + tablePrint + " x 10 = " + tablePrint * 10);


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// C = ( F - 32 ) x 5 / 9
// F = ( C x 9 / 5 ) + 32

var fahrenheit = 70;

var celsius = 25;

document.write(celsius, "<sup>o</sup>C is ", (celsius * 9 / 5) + 32, "<sup>o</sup>F <br/>")
document.write(fahrenheit, "<sup>o</sup>F is ", (fahrenheit - 32) * 5 / 9, "<sup>o</sup>C")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceOfItem1 = 650;

var quantityOfItem1 = 3;

var priceOfItem2 = 100;

var quantityOfItem2 = 7;

var shippingCharges = 100;

var totalAmount = (quantityOfItem1 * priceOfItem1) + (quantityOfItem2 * priceOfItem2) + shippingCharges

document.write("<h1>Shopping Cart<br/></h1>")

document.write("Price of item 1 is ", priceOfItem1)

document.write("<br/>Ordered quantity of item 1 is ", quantityOfItem1)

document.write("<br/>Price of item 2 is ", priceOfItem2)

document.write("<br/>Ordered quantity of item 2 is ", quantityOfItem2)

document.write("<br/>Shipping charges ", shippingCharges)

document.write("<br/><br/>Total cost of your order is ", totalAmount)


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMark = 980;
var obtainedMark = 804;
var percentage = (obtainedMark / totalMark) * 100;

document.write("<h1>Marks Sheet<br/></h1>")

document.write("Total marks: ", totalMark)
document.write("<br/>Marks obtained: ", obtainedMark)
document.write("<br/>Percentage: ", percentage, "%")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var usDollar = 10;

var saudiRiyal = 25;

var usConversionRate = 104.80;

var srConversionRate = 28;

var totalRupees = (usDollar * usConversionRate) + (saudiRiyal * srConversionRate);

document.write("<h1>Curreny in PKR<br/></h1>");

document.write("Total Currency in PKR: " + totalRupees);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 10;
var result = (((number + 5) * 10) / 2);
document.write(result)

// 11. The Age Calculator: Forgot how old someone is ?
//     Calculate it!
//     a.Store the current year in a variable.
//     b.Store their birth year in a variable.
//     c.Calculate their 2 possible ages based on the stored values.
//     Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = 2016;
var birthYear = 1992;

var age = currentYear - birthYear;

document.write("<h1>Age Calculator<br/></h1>");
document.write("Current Year: ", currentYear);
document.write("<br/>Birth Year: ", birthYear);
document.write("<br/>Your age is: ", age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;

var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer<br/></h1>");

document.write("Radius if a circle: " + radius);
document.write("<br/>The circumference is: " + circumference);
document.write("<br/>The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;

var yearsRemaining = maximumAge - currentAge;
var totalAmount = yearsRemaining * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator<br/></h1>")
document.write("Favourite Snack: ", favoriteSnack)
document.write("<br/>Current age: ", currentAge)
document.write("<br/>Estimated Maximum Age: ", maximumAge)
document.write("<br/>Amount of snack per day: ", amountPerDay)
document.write("<br/>You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);