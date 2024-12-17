// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  // Loop through the source string starting at startIdx
  for (let i = startIdx; i < source.length; i++) {
    // Check if searchValue matches at the current position
    let match = true; // Assume it's a match at first

    for (let j = 0; j < searchValue.length; j++) {
      if (source[i + j] !== searchValue[j]) {
        match = false; // Not a match
        break; // Stop checking further
      }
    }

    if (match) {
      return i; // Return the index where the match starts
    }
  }

  return -1; // If no match is found, return -1
}

// Test cases
console.log(myIndexOf("hello", "h")); // => 0
console.log(myIndexOf("hello", "e")); // => 1
console.log(myIndexOf("hello", "l")); // => 2
console.log(myIndexOf("hello", "o")); // => 4
console.log(myIndexOf("twice twice", "ice")); // => 2
console.log(myIndexOf("twice twice", "ice", 5)); // => 8
console.log(myIndexOf("happy string", "sad")); // => -1
