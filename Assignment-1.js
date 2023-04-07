// Question No 1: Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console
const number1 = prompt("Enter the first number:");
const number2 = prompt("Enter the second number:");

if (num1 > num2) {
  console.log(`The larger number is: ${number1}`);
} else if (num2 > num1) {
  console.log(`The larger number is: ${number2}`);
} else {
  console.log("The numbers are equal.");
}



// Question No 2: Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
const num = prompt("Enter a number:");
if (num >= 0) {
  alert("The sign is +");
} else if (num < 0) {
  alert("The sign is -");
}


// Question No 3: . Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console
const num1 = prompt("Enter number 1:");
const num2 = prompt("Enter number 2:");
const num3 = prompt("Enter number 3:");
const num4 = prompt("Enter number 4:");
const num5 = prompt("Enter number 5:");

const maxNum = Math.max(num1, num2, num3, num4, num5);

console.log("The largest number is: " + maxNum);

// Question No 4: Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    document.write(`${i} is even `);
  } else {
    document.write(`${i} is odd `);
  }
}


// QUESTION NO 5: . Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

const average = prompt("Enter a number:");

if (average < 60) {
  document.write(`Your Grade is F`)
    grade = "F";
} else if (average < 70) {
    document.write(`Your Grade is D`)
} else if (average < 80) {
    document.write(`Your Grade is C`)
} else if (average < 90) {
    document.write(`Your Grade is B`)
} else {
    document.write(`Your Grade is A`)
}


// Question No 6: Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }

  else if (i % 3 === 0) {
    console.log("Fizz");
  }

  else if (i % 5 === 0) {
    console.log("Buzz");
  }

  else {
    console.log(i);
  }
}



// Question No 7: Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
const rows = 5;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br>");
}
