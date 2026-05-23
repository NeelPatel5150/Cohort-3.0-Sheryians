//! Project 1 : Simple Calculator

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");
// let result;

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error: Division by zero is not allowed.";
//     }
// } else {
//     result = "Error: Invalid operator.";
// }

// alert("The result is: " + result);

//! Project 2 : ### FizzBuzz (the classic interview question)

//* Print numbers 1 to 50. But:

//* - For multiples of 3, print "Fizz"
//* - For multiples of 5, print "Buzz"
//* - For multiples of both, print "FizzBuzz"

// for(let i=1;i<=50;i++)
// {
//     if(i%3===0 && i%5===0)
//     {
//         console.log("FizzBuzz");
//     }
//     else if(i%3===0)
//     {
//         console.log("Fizz");
//     }
//     else if(i%5===0)
//     {
//         console.log("Buzz");
//     }
//     else
//     {
//         console.log(i);
//     }
// }

//! Project 3 :  Number Guessing Game

// let secret = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// let guess;

// do{
//     guess = Number(prompt("Guess the number between 1 and 100:"));
//     attempts++;

//     if(guess < secret)
//     {
//         alert("Too low! Try again.");
//     }
//     else if(guess > secret)
//     {
//         alert("Too high! Try again.");
//     }
// }while(guess !== secret)

// console.log(`Congratulations! You've guessed the number ${secret} in ${attempts} attempts!`);

//! Project 4 :  Temperature Converter

// let temp = Number(prompt("Enter the temperature:"));
// let unit = prompt("Is this in Celsius (C) or Fahrenheit (F)?").toUpperCase();

// if(unit === "C")
// {
//     let fahrenheit = (temp * 9/5) + 32;
//     alert(`${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`);
// }
// else if(unit === "F")
// {
//     let celsius = (temp - 32) * 5/9;
//     alert(`${temp}°F is equal to ${celsius.toFixed(2)}°C`);
// }
// else
// {
//     alert("Invalid unit! Please enter C for Celsius or F for Fahrenheit.");
// }

//! Project 5 :  Count Vowels in a String

// let str = prompt("Enter a string:").toLocaleLowerCase();
// let vowelCount = 0;
// let vowels = "aeiou";

// for(let char of str)
// {
//     if(vowels.includes(char))
//     {
//         vowelCount++;
//     }
// }
// console.log(`The number of vowels in the string is: ${vowelCount}`);