// YOUR CODE BELOW
function countVowels(str) {
  if (str === "") return 0;
  const vowels = "aeiouAEIOU";
  const currentChar = str[0];

  const isVowel = vowels.includes(currentChar) ? 1 : 0;

  return isVowel + countVowels(str.slice(1));
}

countVowels("Four score and seven years"); // => 9
