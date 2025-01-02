// YOUR CODE BELOW
function cacheSavings(callback) {
  const cache = {};

  return function (arg) {
    if (cache.hasOwnProperty(arg)) {
      console.log("Returning from cache...");
      return cache[arg];
    } else {
      console.log("Calculating result...");
      const result = callback(arg);
      cache[arg] = result;
      return result;
    }
  };
}
