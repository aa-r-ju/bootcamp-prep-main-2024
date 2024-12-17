// YOUR CODE BELOW
function mostVowels(str) {
  // Step 1: Split the string into words
  const words = str.split(" ");

  // Step 2: Initialize variables to track the word with the most vowels
  let maxVowels = 0;
  let wordWithMostVowels = "";

  // Step 3: Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Remove punctuation from the word
    const word = words[i].replace(/[^a-zA-Z]/g, ""); // Keep only letters

    let vowelCount = 0;

    // Step 4: Loop through each character of the word to count vowels
    for (let j = 0; j < word.length; j++) {
      const letter = word[j].toLowerCase(); // Convert to lowercase to make it case-insensitive

      // Check if the letter is a vowel
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        vowelCount++;
      }
    }

    // Step 5: If this word has more vowels than the current one, update the result
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      wordWithMostVowels = word;
    }
  }

  // Step 6: Return the word with the most vowels or an empty string if none
  return wordWithMostVowels;
}
