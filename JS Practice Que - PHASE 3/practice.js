//! Part 1: Variables, Functions & Conditions

//? 1 Create a function that returns the sum of two numbers.

function sum(a,b)
{
 return a+b;
}
// console.log(sum(2,3));

//? 2.  Create a function that returns the square of a number.

function square(num)
{
    return num * num;
}
// console.log(square(5))

//? 3. Create a function that checks whether a number is Even or Odd.

function Checknum(num)
{
    if(num%2===0)
    {
        return "Even"
    }
    else{
        return "Odd"
    }
}

// console.log(Checknum(10));

//?4.Create a function that returns the larger number among two numbers.

function Maxnum(a,b)
{
    if(a>b)
    {
        return `Max number:${a}`
    }
    else{
        return `Max number:${b}`
    }
}
// console.log(Maxnum(100,20));

//? 5.Create a function that checks if a person is eligible to vote.

function isEligible(age)
{
    if(age>18)
    {
        return "Eligible to vote"
    }
    else{
        return "Not eligible to vote"
    }
}
// console.log(isEligible(20));

//! Part 2: Loops

//? 6. Print numbers from 1 to 50 using a loop.

// for(let i=1;i<=50;i++)
// {
//     console.log(i);
// }

//? 7. Print all even numbers between 1 and 100.

// for(let i=1;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
// }

//? 8. Find the sum of numbers from 1 to 100.

// var sum =0;
// for(let i=1;i<=100;i++)
// {
//    sum+=i
// }
// console.log(sum);

//? 9. Print the multiplication table of a number.

function table(num)
{
    for(let i=1;i<=10;i++)
        {
            console.log(`${num} * ${i} = ${num*i}`);
        }
}
// console.log(table(5));

//? 10. Count how many digits are present in a number.
function countDigits(num)
{
    let count =0;
    while(num>0)
    {
        num = Math.floor(num/10);
        count++;
    }
    return count;
}
// console.log(countDigits(1234567));

//! Part 3: Strings

//? 11. Reverse a string.
function reverseString(str)
{
    let reversed = "";
    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseString("Hello World"));

//? 12. Count vowels in a string.
function countVowels(str)
{
    let count =0;
    for(let i=0;i<str.length;i++)
    {
        if("aeiouAEIOU".includes(str[i]))
        {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("Hello World"));

//? 13. Check whether a string is a palindrome.
function isPalindrome(str)
{    let reversed = "";
    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str[i];
    }
    return str === reversed;
}
// console.log(isPalindrome("madam"));

//? 14. Convert the first letter of every word to uppercase.

function capitalizeFirstLetter(str){
    let words = str.split(" ");
    for(let i=0;i<words.length;i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
// console.log(capitalizeFirstLetter("hello world"));

//? 15. Count how many times a character appears in a string.

function countCharacter(str, char)
{
    let count =0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === char)
        {
            count++;
        }
    }
    return count;
}
// console.log(countCharacter("hello world", "l"));

//! Part 4: Arrays

//? 16.  Find the largest number in an array.

let arr = [1, 5, 3, 99, 2,2];

// console.log(`Largest number: ${Math.max(...arr)}`);

//? 17. Find the smallest number in an array.

// console.log(`Smallest number: ${Math.min(...arr)}`);

//? 18. Find the sum of all array elements.

let sumArr = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(`Sum of array elements: ${sumArr}`);

//? 19. Return only even numbers from an array.

let evenNumbers = arr.filter(num => num % 2 === 0);

// console.log(`Even numbers: ${evenNumbers}`);

//? 20.Remove duplicate values from an array.

let uniqueArr = [...new Set(arr)];

// console.log(`Unique values: ${uniqueArr}`);

//! ### 🎯 Bonus Task (For Fast Learners)

// Build a **Student Marks Calculator**.

// Input:

// ```jsx
// [50, 60, 70, 80, 90]
// ```

// Output:

// ```jsx
// Highest Marks: 90
// Lowest Marks: 50
// Average Marks: 70
// Total Marks: 350
// ```

function studentMarksCalculator(marks)
{
    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);
    let total = marks.reduce((acc, curr) => acc + curr, 0);
    let average = total / marks.length;

    return `Highest Marks: ${highest}\nLowest Marks: ${lowest}\nAverage Marks: ${average}\nTotal Marks: ${total}`;
}

// console.log(studentMarksCalculator([50, 60, 70, 80, 90]));