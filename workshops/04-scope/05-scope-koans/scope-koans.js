// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = "test failing";
testOneMessage = "test succeeding";

function testOne() {
  return testOneMessage;
}

// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = "test failing";

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc() {
  testTwoMessage = "test succeeding";
  return testTwoMessage;
}

// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = "test failing";

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = "test succeeding";
  }

  let msg = getMessage();
  return msg;

  function getMessage(value) {
    return testThreeMessage;
  }
}

// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = "test succeeding";

function testFour(msg) {
  function innerFunc(msg) {
    function doubleInner(msg) {
      testFourMessage = msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner("test failing");
  }

  innerFunc(testFourMessage);

  testFourMessage = "test succeeding";
  return testFourMessage;
}
