//! ## 1. Array

// ### Intermediate

// Create an array of 5 favorite movies and print all values.
// **Hint:** Use indexing
const favoriteMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump"];
console.log(favoriteMovies[0]);
console.log(favoriteMovies[1]);
console.log(favoriteMovies[2]);
console.log(favoriteMovies[3]);
console.log(favoriteMovies[4]);


// ### Hard

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
// **Hint:** Mixed data types + nested indexing

const mixedArray = [42, "Hello", true, [1, 2, 3]];
console.log(mixedArray[3]); // This will print the nested array [1, 2, 3]

//! 2. Indexing in Array

//? ### Intermediate

// Print the first and last element of an array.

// **Hint:** Use `0` and `length - 1`

const sampleArray = ["first", "middle", "last"];
console.log(sampleArray[0]);
console.log(sampleArray[sampleArray.length - 1]);

//? ### Hard

// Swap the second and second-last element using indexing.

// **Hint:** Use temporary variable

const swapArray = ["first", "second", "third", "fourth", "fifth"];
const temp = swapArray[1];
swapArray[1] = swapArray[swapArray.length - 2];
swapArray[swapArray.length - 2] = temp;
console.log(swapArray); // This will show the swapped array

//! 3. Multi-Dimensional Arrays

//? ### Intermediate
// Create a 2D array and print all first elements of inner arrays.
// **Hint:** Double indexing
const twoDArray = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < twoDArray.length; i++) {
  console.log(twoDArray[i][0]);
}

//? ### Hard
// Find the sum of all diagonal elements in a 3x3 matrix.
// **Hint:** Same row and column index

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
    [7, 8, 9]
];
let diagonalSum = 0;
for (let i = 0; i < matrix.length; i++) {
  diagonalSum += matrix[i][i];
}
console.log(diagonalSum); // This will print the sum of diagonal elements (1 + 5 + 9 = 15)

//! 4. length

//? ### Intermediate
// Find total elements in an array without counting manually.
// **Hint:** Use `.length`
const countArray = [1, 2, 3, 4, 5];
console.log(countArray.length);

//? ### Hard
// Create a function that checks whether array length is even or odd.
// **Hint:** Use modulus operator
function checkEvenOddLength(arr) {
  if (arr.length % 2 === 0) {
    return "Even length";
  } else {
    return "Odd length";
    }
}

console.log(checkEvenOddLength([1, 2, 3])); // This will print "Odd length"
console.log(checkEvenOddLength([1, 2, 3, 4])); // This will print "Even length"

//! 5. push() 

//? ### Intermediate
// Add 3 new elements at the end of array.
// **Hint:** Use `push()`
const pushArray = [1, 2, 3];
pushArray.push(4, 5, 6);
console.log(pushArray); // This will print [1, 2, 3, 4, 5, 6]

//? ### Hard
// Add elements dynamically inside loop from another array.
// **Hint:** Loop + push
const sourceArray = [7, 8, 9];
const targetArray = [1, 2, 3];
for (let i = 0; i < sourceArray.length; i++) {
  targetArray.push(sourceArray[i]);
}
console.log(targetArray); // This will print [1, 2, 3, 7, 8, 9]

//! 6. pop()

//? ### Intermediate
// Remove last element and print removed value.
// **Hint:** Store `pop()` result

const popArray = [1, 2, 3, 4];
const removedElement = popArray.pop();
console.log(removedElement);

//? ### Hard
// Keep removing elements until array becomes empty.
// **Hint:** Use `while` loop

const emptyArray = [1, 2, 3, 4];
while (emptyArray.length > 0) {
  emptyArray.pop();
}
console.log(emptyArray); // This will print [] (empty array)

//! 7. unshift()

//? ### Intermediate

// Add one username at beginning of array.
// **Hint:** Use `unshift()`
const usernames = ["user2", "user3"];
usernames.unshift("user1");
console.log(usernames); // This will print ["user1", "user2", "user3"]

//? ### Hard

// Insert multiple elements at beginning without replacing existing ones.
// **Hint:** Multiple arguments
const moreUsernames = ["user4", "user5"];
usernames.unshift(...moreUsernames);
console.log(usernames); // This will print ["user4", "user5", "user1", "user2", "user3"]

//! 8. shift()

//? ### Intermediate

// Remove first element from array.
// **Hint:** Use `shift()`

const shiftArray = ["first", "second", "third"];
const removedFirst = shiftArray.shift();
console.log(removedFirst); // This will print "first"

//? ### Hard

// Remove first element repeatedly until only 2 elements remain.
// **Hint:** Loop + length check
const shiftArray2 = ["first", "second", "third", "fourth", "fifth"];
while (shiftArray2.length > 2) {
  shiftArray2.shift();
}
console.log(shiftArray2); // This will print ["fourth", "fifth"]

//! 9. splice()

//? ### Intermediate

// Remove 2 elements from middle of array.
// **Hint:** `splice(start, deleteCount)`
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(1, 2);
console.log(spliceArray); // This will print [1, 4, 5]

//? ### Hard
// Replace 3 middle elements with 5 new values.
// **Hint:** Use insertion with splice
const spliceArray2 = [1, 2, 3, 4, 5];
spliceArray2.splice(1, 3, 6, 7, 8);
console.log(spliceArray2); // This will print [1, 6, 7, 8, 5]

//! 10. reverse()

//? ### Intermediate

// Reverse an array using method.
// **Hint:** Use `reverse()`
const reverseArray = [1, 2, 3, 4];
reverseArray.reverse();
console.log(reverseArray); // This will print [4, 3, 2, 1]

//? ### Hard

// Reverse only first half of array.
// **Hint:** Manual swapping
const reverseHalfArray = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < reverseHalfArray.length / 2; i++) {
  const temp = reverseHalfArray[i];
    reverseHalfArray[i] = reverseHalfArray[reverseHalfArray.length - 1 - i];
    reverseHalfArray[reverseHalfArray.length - 1 - i] = temp;
}
console.log(reverseHalfArray); // This will print [3, 2, 1, 4, 5, 6]

//! 11. sort()

//? ### Intermediate

// Sort numbers in ascending order.
// **Hint:** Compare function
const sortArray = [5, 2, 9, 1];
sortArray.sort((a, b) => a - b);
console.log(sortArray); // This will print [1, 2, 5, 9]

//? ### Hard

// Sort array so even numbers come first and odd later.
// **Hint:** Custom compare logic
const evenOddArray = [5, 2, 9, 1, 4];
evenOddArray.sort((a, b) => {
  if (a % 2 === 0 && b % 2 !== 0) {
    return -1; // a is even, b is odd
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return 1; // a is odd, b is even
  } else {
    return 0; // both are even or both are odd
  }
});
console.log(evenOddArray); // This will print [2, 4, 5, 9, 1]

//! 12. slice()

//? ### Intermediate

// Extract first 4 elements into new array.
// **Hint:** Use `slice()`
const sliceArray = [1, 2, 3, 4, 5, 6];
const firstFour = sliceArray.slice(0, 4);
console.log(firstFour); // This will print [1, 2, 3, 4]

//? ### Hard

// Create a copy excluding first and last element.
// **Hint:** Use start and end indexes
const sliceArray2 = [1, 2, 3, 4, 5];
const middleElements = sliceArray2.slice(1, sliceArray2.length - 1);
console.log(middleElements); // This will print [2, 3, 4]

//! 13.  concat()

//? ### Intermediate

// Merge two arrays.
// **Hint:** Use `concat()`

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray); // This will print [1, 2, 3, 4, 5, 6]

//? ### Hard

// Merge 3 arrays and remove duplicate values.
// **Hint:** Combine + loop/includes
const arrayA = [1, 2, 3];
const arrayB = [3, 4, 5];
const arrayC = [5, 6, 7];
const combinedArray = arrayA.concat(arrayB, arrayC);
const uniqueArray = [];
for (const value of combinedArray) {
  if (!uniqueArray.includes(value)) {
    uniqueArray.push(value);
  }
}
console.log(uniqueArray); // This will print [1, 2, 3, 4, 5, 6, 7]

//! 14. includes()

//? ### Intermediate

// Check whether `"apple"` exists in array.
// **Hint:** Use boolean result
const fruits = ["banana", "orange", "apple", "grape"];
console.log(fruits.includes("apple")); // This will print true

//? ### Hard

// Check if all elements of one array exist inside another.
// **Hint:** Loop + includes
const arrayX = [1, 2];
const arrayY = [1, 2, 3, 4];
let allExist = true;
for (const value of arrayX) {
  if (!arrayY.includes(value)) {
    allExist = false;
    break;
  }
}
console.log(allExist); // This will print true

//! 15. indexOf()

//? ### Intermediate

// Find index of `"Rahul"` in array.
// **Hint:** Use `indexOf()`
const names = ["Alice", "Bob", "Rahul", "Charlie"];
console.log(names.indexOf("Rahul")); // This will print 2

//? ### Hard

// Find all positions of repeated number `5`.
// **Hint:** Loop through entire array
const numbers = [5, 1, 5, 3, 5, 4];
const positions = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    positions.push(i);
  }
}
console.log(positions); // This will print [0, 2, 4] (indexes of all 5s)

//! 16.  join()

//? ### Intermediate

// Convert array into comma separated string.
// **Hint:** Use `join(",")`
const joinArray = ["Hello", "World"];
const joinedString = joinArray.join(", ");
console.log(joinedString); // This will print "Hello, World"

//? ### Hard

// Convert array into sentence format.
// **Hint:** Join with spaces
const sentenceArray = ["JavaScript", "is", "fun"];
const sentence = sentenceArray.join(" ");
console.log(sentence); // This will print "JavaScript is fun"

//17 . for loop

//? ### Intermediate

// Print all array elements using loop.
// **Hint:** Loop through indexes
const loopArray = [1, 2, 3, 4];
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}

//? ### Hard

// Print elements at only even indexes.
// **Hint:** Increase loop smartly
const evenIndexArray = ["a", "b", "c", "d", "e"];
for (let i = 0; i < evenIndexArray.length; i += 2) {
  console.log(evenIndexArray[i]);
}

//! 18.  for...of

//? ### Intermediate

// Print all values using `for...of`.
// **Hint:** Direct value iteration

const forOfArray = [1, 2, 3, 4];
for (const value of forOfArray) {
  console.log(value);
}

//? ### Hard

// Count vowels from array of characters.
// **Hint:** Use conditions inside loop

const charArray = ['a', 'b', 'c', 'e', 'i', 'o', 'u'];
let vowelCount = 0;
for (const char of charArray) {
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
    vowelCount++;
  }
}
console.log(vowelCount); // This will print 5

//! 19. Reference Behaviour of Array

//? ### Intermediate

// Assign one array to another variable and modify second one.
// **Hint:** Observe original array
const originalArray = [1, 2, 3];
const referenceArray = originalArray;
referenceArray.push(4);
console.log(originalArray); // This will print [1, 2, 3, 4] (original array is modified)

//? ### Hard

// Create true copy so original array does not change.
// **Hint:** Use spread operator

const originalArray2 = [1, 2, 3];
const copyArray = [...originalArray2];
copyArray.push(4);
console.log(originalArray2); // This will print [1, 2, 3] (original array is unchanged)

//! 20. Spread Operator

//? ### Intermediate

// Copy array into new array.
// **Hint:** Use `...`
const spreadArray = [1, 2, 3];
const copiedArray = [...spreadArray];
console.log(copiedArray); // This will print [1, 2, 3]

//? ### Hard

// Merge arrays and add extra values in between.
// **Hint:** Combine spread carefully
const arrayOne = [1, 2];
const arrayTwo = [5, 6];
const mergedWithExtra = [...arrayOne, 3, 4, ...arrayTwo];
console.log(mergedWithExtra); // This will print [1, 2, 3, 4, 5, 6]

