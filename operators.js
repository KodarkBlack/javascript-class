//Declare variables and check data types:

let firstName = 'Israel';
let lastName = 'Olufisayo';
let country = 'Nigeria';
let city = 'Lagos';
let age = 24;
let isMarried = false;
let year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number


//Check if type of '10' is equal to 10:
console.log(typeof '10' === typeof 10); // false

//Check if parseInt('9.8') is equal to 10:
console.log(parseInt('9.8') === 10); // true


//truthy
console.log(10); // Number
console.log('Hello'); // String
console.log(true); // Boolean

//falsey
console.log(0); // Number
console.log(''); // Empty String
console.log(false); // Boolean


//Comparison expressions:
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log('python'.length === 'jargon'.length); // true


//logical expression

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true


//date object

const now = new Date();

console.log(now.getFullYear()); // Year
console.log(now.getMonth() + 1); // Month (January is 0-based)
console.log(now.getDate()); // Date
console.log(now.getDay()); // Day of the week (Sunday is 0)
console.log(now.getHours()); // Hours
console.log(now.getMinutes()); // Minutes

const secondsElapsed = Math.floor(now.getTime() / 1000);
console.log(secondsElapsed); // Seconds elapsed since January 1, 1970



