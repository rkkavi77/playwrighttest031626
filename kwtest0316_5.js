// Challenge 5 of 5 - Hard
// Reusable Step Runner with Callback
//
// We need to write a function called runStep that:
// 1. Takes a step name and another function (called a callback)
// 2. Logs that the step is starting
// 3. Runs the callback function
// 4. If it works  → return { stepName, passed: true,  message: result }
// 5. If it crashes → return { stepName, passed: false, message: error }
//
// A "callback" is just a function you pass INTO another function
// Like saying "hey, run THIS for me and tell me what happened"

function runStep(stepName, actionFn) {

  // Step 1: Log that we are starting this step
  console.log("Starting step: " + stepName);

  // Step 2: Try to run the callback function
  // We use try/catch because the callback MIGHT crash
  // try  = "attempt to do this"
  // catch = "if it crashes, do THIS instead"
  try {

    // Step 3: Run the callback and save whatever it returns
    // actionFn() just means "run the function that was passed in"
    let result = actionFn();

    // Step 4: It worked! Build a success result object
    let successResult = {
      stepName: stepName,
      passed:   true,
      message:  result
    };

    // Print it so we can see it
    console.log("Step PASSED:", successResult);

    // Send it back to whoever called runStep
    return successResult;

  } catch (error) {

    // Step 5: It crashed! Build a failure result object
    // error.message is the description of what went wrong
    let failResult = {
      stepName: stepName,
      passed:   false,
      message:  error.message
    };

    // Print it so we can see it
    console.log("Step FAILED:", failResult);

    // Send it back to whoever called runStep
    return failResult;
  }
}

// -----------------------------------------------
// TEST 1: Callback works perfectly fine
// -----------------------------------------------
console.log("--- Test 1: Passing step ---");

let test1 = runStep("open dashboard", function() {
  return "Page loaded";
});

console.log("Result:", test1);

// -----------------------------------------------
// TEST 2: Callback crashes with an error
// -----------------------------------------------
console.log("");
console.log("--- Test 2: Failing step ---");

let test2 = runStep("click login button", function() {
  // This throws an error on purpose to simulate a crash
  throw new Error("Button not found on page");
});

console.log("Result:", test2);

// -----------------------------------------------
// TEST 3: Callback does some math and returns it
// -----------------------------------------------
console.log("");
console.log("--- Test 3: Step with calculation ---");

let test3 = runStep("calculate total price", function() {
  let price = 100 + 50;
  return "Total is " + price;
});

console.log("Result:", test3);

// -----------------------------------------------
// TEST 4: Run multiple steps like a real test suite
// -----------------------------------------------
console.log("");
console.log("--- Test 4: Full test suite simulation ---");

let steps = [
  runStep("open browser",    function() { return "Browser opened";      }),
  runStep("go to login",     function() { return "Login page loaded";   }),
  runStep("fill in form",    function() { throw new Error("Form not found"); }),
  runStep("click submit",    function() { return "Form submitted";      }),
];

// Print a summary at the end
console.log("");
console.log("======= FINAL SUMMARY =======");
for (let i = 0; i < steps.length; i++) {
  let step   = steps[i];
  let status = step.passed ? "✅ PASSED" : "❌ FAILED";
  console.log(status + " | " + step.stepName + " | " + step.message);
}