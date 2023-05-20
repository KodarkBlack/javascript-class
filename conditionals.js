// let isRaining = true

// if (isRaining)(
//     console.log("get a raincoat")
// ) 
// else if (isRaining === false)(
//     console.log("enjoy")
// )

// let age = 18

// if (age === 18)(
//     console.log("Page allowed")
// ) 
// else if (age < 18)(
//     console.log("Can't access page")
// )
// else if(age > 18)(
//     console.log("Enjoy")
// )

//........................................................................................................................
//........................................................................................................................
//........................................................................................................................
//........................................................................................................................
//........................................................................................................................
//........................................................................................................................
//........................................................................................................................
//........................................................................................................................

//.............ASSIGNMENT

// Get user input using prompt(“Enter your age:”). If user is 18 or older , 
//give feedback:'You are old enough to drive' but if not 18 give another feedback stating
// to wait for the number of years he needs to turn 18.

//.............SOLUTION

// Get user input
const age = parseInt(prompt("Enter your age:")); 

// Check if the user is 18 or older
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsToWait = 18 - age;
  console.log("You are not old enough to drive. Please wait for " + yearsToWait + " more year(s) until you turn 18.");
}

// Get user input for your age
const yourAge = parseInt(prompt("Enter your age:"));

// Set myAge to a specific value
const myAge = 24;

// Compare myAge and yourAge
if (yourAge > myAge) {
  console.log("You are older than me.");
} else if (yourAge < myAge) {
  console.log("I am older than you.");
} else {
  console.log("We are the same age.");
}
 

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//Using the if else
let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} 
else {
  console.log("a is less than b");
}

//using the ternary operator

const result = (a > b) ? "a is greater than b": "a is less than b";
console.log(result);

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = 4;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//........................................................................................................................
//Write a code which can give grades to students according to their scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

// Get the student's score
const score = parseInt(prompt("Enter the student's score:"));

// Assign grades based on the score
let grade;

if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score < 80) {
  grade = "B";
} else if (score >= 60 && score < 70) {
  grade = "C";
} else if (score >= 50 && score < 60) {
  grade = "D";
} else if (score >= 0 && score < 50) {
  grade = "F";
} else {
  console.log("Invalid score entered.");
}

// Print the grade
if (grade) {
  console.log("Grade: " + grade);
}


//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

// Get the user input
const month = prompt('What is your month')

// Convert the input to lowercase for case-insensitive comparison
const lowercaseMonth = month.toLowerCase();

// Check the season based on the month
let season;

if (lowercaseMonth === "september" || lowercaseMonth === "october" || lowercaseMonth === "november") {
  season = "Autumn";
} else if (lowercaseMonth === "december" || lowercaseMonth === "january" || lowercaseMonth === "february") {
  season = "Winter";
} else if (lowercaseMonth === "march" || lowercaseMonth === "april" || lowercaseMonth === "may") {
  season = "Spring";
} else if (lowercaseMonth === "june" || lowercaseMonth === "july" || lowercaseMonth === "august") {
  season = "Summer";
} else {
  console.log("Invalid month entered.");
}

// Print the season
if (season) {
  console.log("Season: " + season);
}


// Check if a day is weekend day or a working day. Your script will take day as an input.

// Get the user input
let day = prompt("What is the day today?");


// Convert the input to lowercase for case-insensitive comparison
const lowercaseDay = day.toLowerCase();

// Check if the day is a weekend day or a working day
let dayType;

if (lowercaseDay === "saturday" || lowercaseDay === "sunday") {
  dayType = "weekend";
} else if (lowercaseDay === "monday" || lowercaseDay === "tuesday" || lowercaseDay === "wednesday" || lowercaseDay === "thursday" || lowercaseDay === "friday") {
  dayType = "working day";
} else {
  console.log("Invalid day entered.");
}

// Print the day type
if (dayType) {
  console.log(day + " is a " + dayType + ".");
}





