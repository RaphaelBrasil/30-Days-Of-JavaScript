console.log("Exercises: Level 1, 1");

let ageInput = prompt("Enter your age: ");

ageInput >= 18
  ? console.log("You are old enough to drive.")
  : console.log(`You are left with ${18 - ageInput} years to drive.`);

console.log("Exercises: Level 1, 2");

let myAge = 26;
let yourAge = prompt("Enter your age: ");

if (myAge > yourAge) {
  console.log(`I'm ${myAge - yourAge} years older than you!`);
} else {
  console.log(`You are ${myAge - yourAge} years older than me!`);
}

console.log("Exercises: Level 1, 3");

let a = 5;
let b = prompt('Enter the value for "b": ');

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

console.log("Exercises: Level 1, 4");

let number = prompt("Enter a number: ");

number % 2 === 0
  ? console.log(`${number} is Even`)
  : console.log(`${number} is Odd`);

console.log("Exercises: Level 2, 1");

let score = prompt("Give the value of the Score: ");

switch (true) {
  case score >= 80 && score <= 100:
    console.log("A");
    break;
  case score >= 70 && score <= 79:
    console.log("B");
    break;
  case score >= 60 && score <= 69:
    console.log("C");
    break;
  case score >= 50 && score <= 59:
    console.log("D");
    break;
  case score >= 0 && score <= 49:
    console.log("F");
  default:
    console.log("Entered value was not a valid score!");
}

console.log("Exercises: Level 2, 2");

let month = prompt("Enter the month: ");

switch (true) {
  case month === "September" || month === "October" || month === "November":
    console.log("Autumn");
    break;
  case month === "December" || month === "January" || month === "February":
    console.log("Winter");
    break;
  case month === "March" || month === "April" || month === "May":
    console.log("Spring");
    break;
  case month === "June" || month === "July" || month === "August":
    console.log("Summer");
    break;
  default:
    console.log("Entered value was not a valid month");
}

console.log("Exercises: Level 2, 3");

let day = prompt("What is the day  today? ").toLowerCase();

switch (true) {
  case day === "saturday" || day === "sunday":
    console.log(`${day} is a weekend`);
    break;
  case day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday":
    console.log(`${day} is a working day`);
    break;
  default:
    console.log("Entered value was not a valid day");
}

console.log("Exercises: Level 3, 1");

let vYear = prompt("Give the Year: ");
let vMonth = prompt("Give the Month: ").toLowerCase();
let nMonth = -1;
switch (vMonth) {
  case "january":
    nMonth = 1;
    break;
  case "february":
    nMonth = 2;
    break;
  case "march":
    nMonth = 3;
    break;
  case "april":
    nMonth = 4;
    break;
  case "may":
    nMonth = 5;
    break;
  case "june":
    nMonth = 6;
    break;
  case "july":
    nMonth = 7;
    break;
  case "august":
    nMonth = 8;
    break;
  case "september":
    nMonth = 9;
    break;
  case "october":
    nMonth = 10;
    break;
  case "november":
    nMonth = 11;
    break;
  case "december":
    nMonth = 12;
    break;
  default:
    console.log("Entered value was not a valid month");
}

let nDays = new Date(vYear, nMonth, 0).getDate(); //Ano, mês, dia

console.log(`${vMonth} has ${nDays} days`);
