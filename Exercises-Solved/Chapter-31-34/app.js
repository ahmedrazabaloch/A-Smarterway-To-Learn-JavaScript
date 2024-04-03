// =================== Assignment # 31-34 ==================


// 1. Write a program that displays current date and time in your browser.

// var date = new Date()

// document.write(date)

// 2. Write a program that alerts the current month in words. For example December.

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var currentMonth = new Date().getMonth()

// document.write("Current month: ", months[currentMonth])

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var currentDate = new Date().toString().slice(0, 3);

// document.write("Today is: " + currentDate);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentDate = new Date().getDay();

// if (days[currentDate] === "Saturday" || days[currentDate] === "Sunday") {
//     document.write("It's Fun day");
// } else {
//     document.write("Busy day");
// }

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date().getDay()

// if (date < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }


// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var currentDate = new Date();
// var oldDate = new Date('Jan 1, 1970');
// var minutes = (currentDate - oldDate) / (1000 * 60);

// document.write(`Current Date: ${currentDate} <br/> Minutes since midnight, Jan. 1, 1970: ${minutes}`);


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var date = new Date().getHours()

// if (date < 12) {
//     alert("It's AM")
// } else {
//     alert("It's PM")
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date("2020, 12, 31");

// document.write("Later Date: ", laterDate)

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDateTime = new Date();

// var getHours = currentDateTime.getHours();

// currentDateTime.setHours(getHours - 1);

// document.write(`Current date : ${new Date()} <br/> 1 hour ago, it was ${currentDateTime}`);











