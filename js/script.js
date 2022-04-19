// Task 1

const a = -3; // 1, 0, -3

if (a !== 0) {
    console.log("You are right!");
} else {
    console.log("You aren't right!");
}

// Task 2

const time = -4; // від 0 - 59

if (time >= 0 && time <= 15) {
    console.log('In the first part of the hour.');
} else if (time > 15 && time <= 30) {
    console.log('In the second part of the hour.')
} else if (time > 30 && time <= 45) {
    console.log('In the third part of the hour.')
} else if (time > 45 && time < 60) {
    console.log('In the fourth part of the hour.')
} else {
    console.log('Not a valid number');
}

// Task 3

const day = 11; // від 1 - 31

if (day >= 0 && day <= 10) {
    console.log('First decade');
} else if (day > 10 && day <= 20) {
    console.log('Second decade');
} else if (day > 20 && day <= 31) {
    console.log('Third decade');
} else {
    console.log('Not a valid number');
}

// Task 4

const days = 4;

switch (days) {
    case 1:
        console.log("Monday: meeting with a friend");
        break;
    case 2:
        console.log("Tuesday: to do homework");
        break;
    case 3:
        console.log("Wednesday: clean my room");
        break;
    case 4:
        console.log("Thursday: byu something sweet");
        break;
    case 5:
        console.log("Friday: learn english");
        break;
    case 6:
        console.log("Saturday: learn how to make music");
        break;
    case 7:
        console.log("Sunday: Relax");
        break;
    default:
        console.log("Your day is not correct");
}

// Task 5

const firstNumber = +prompt("Enter first number", "");
const secondNumber = +prompt("Enter second number", "");

if (firstNumber > secondNumber) {
    console.log(`The most biggest number is ${firstNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`The most biggest number is ${secondNumber}`);
} else if (firstNumber === secondNumber) {
    console.log(`Your numbers are equal ${firstNumber} = ${secondNumber}`);
} else {
    console.log('Error!');
}