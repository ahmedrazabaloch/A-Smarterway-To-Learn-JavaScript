// =============== Assignment # 26-30 ===================

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = +prompt("Enter a positive floating integer")

var roundOf = Math.round(userInput)

var floorOf = Math.floor(userInput)

var ceilOf = Math.ceil(userInput)

document.write(`Number: ${userInput} <br/> round off value: ${roundOf} <br/> floor value: ${floorOf} <br/> ceil value: ${ceilOf}`)

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = +prompt("Enter a negative floating integer")

var roundOf = Math.round(userInput)

var floorOf = Math.floor(userInput)

var ceilOf = Math.ceil(userInput)

document.write(`Number: ${userInput} <br/> round off value: ${roundOf} <br/> floor value: ${floorOf} <br/> ceil value: ${ceilOf}`)

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var userInput = +prompt("Enter a number");

var absoluteValue = Math.abs(userInput);

document.write(`The absolute value of ${userInput} is ${absoluteValue}`);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var randomNumber = Math.floor(Math.random() * 10)

document.write(`random dice value: ${randomNumber}`)

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var randomNumber = Math.ceil(Math.random() * 2)

if (randomNumber === 1) {
    document.write(`${randomNumber} <br/> random coin value: Heads`)
} else {
    document.write(`${randomNumber} <br/> random coin value: Tails`)
}

// 6. Write a program that shows a random number between 1 and 100 in your browser.

var randomNumber = Math.ceil(Math.random() * 100)

document.write(`Random number Between 1 and 100: ${randomNumber}`)

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userInput = prompt("Enter your weight")

var userWeight = parseFloat(userInput)

document.write(`The weight of user is: ${userWeight} kilograms`)

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.

var userInput = +prompt("Enter a number between 1 and 10")

var randomNumber = Math.ceil(Math.random() * 10)

if (userInput === randomNumber) {
    alert("Congrates you guess the right number")
} else {
    alert(`try again and the secret number was ${randomNumber}`)
}