// YOUR CODE BELOW
function isPalindrome(str) {
  str = str.toLowerCase();
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("Kayak")); // Output: true
console.log(isPalindrome("NEVERODDOREVEN")); // Output: true
console.log(isPalindrome("Tacocat")); // Output: true
console.log(isPalindrome("SELFLESS")); // Output: false
