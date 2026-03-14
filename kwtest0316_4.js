// Challenge 4 of 5 - Medium
// Browser Execution Planner
//
// We get two lists:
// allBrowsers     = ["chromium", "firefox", "webkit"]
// blockedBrowsers = ["firefox"]
//
// We need to return:
// {
//   runnable: ["chromium", "webkit"],
//   blocked:  ["firefox"],
//   plan:     "Run on: chromium, webkit | Skip: firefox"
// }

function browserExecutionPlanner(allBrowsers, blockedBrowsers) {

  // Step 1: Find the RUNNABLE browsers
  // These are browsers that are NOT in the blocked list
  // .filter() goes through every browser and keeps only the ones we want
  let runnable = allBrowsers.filter(function(browser) {

    // .includes() checks if this browser is in the blocked list
    // If it IS blocked → return false → remove it
    // If it is NOT blocked → return true → keep it
    let isBlocked = blockedBrowsers.includes(browser);
    return isBlocked === false;
  });

  // Step 2: Find the BLOCKED browsers
  // These are browsers that ARE in the blocked list
  let blocked = allBrowsers.filter(function(browser) {

    // opposite of above
    // If it IS blocked → return true → keep it
    let isBlocked = blockedBrowsers.includes(browser);
    return isBlocked === true;
  });

  // Step 3: Build the plan string
  // "Run on: chromium, webkit | Skip: firefox"
  //
  // .join(", ") turns an array into a comma separated string
  // ["chromium", "webkit"] --> "chromium, webkit"
  let runnableString = runnable.join(", ");
  let blockedString  = blocked.join(", ");

  // Glue it all together into one sentence
  let plan = "Run on: " + runnableString + " | Skip: " + blockedString;

  // Step 4: Build the final result object and return it
  let result = {
    runnable: runnable,
    blocked: blocked,
    plan: plan
  };

  return result;
}

// ---- Test 1: Example from the challenge ----
console.log("--- Test 1 ---");
let allBrowsers     = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];

let output = browserExecutionPlanner(allBrowsers, blockedBrowsers);

console.log("Runnable:", output.runnable);
console.log("Blocked: ", output.blocked);
console.log("Plan:    ", output.plan);

// ---- Test 2: Multiple blocked browsers ----
console.log("--- Test 2 ---");
let allBrowsers2     = ["chromium", "firefox", "webkit", "edge"];
let blockedBrowsers2 = ["firefox", "edge"];

let output2 = browserExecutionPlanner(allBrowsers2, blockedBrowsers2);

console.log("Runnable:", output2.runnable);
console.log("Blocked: ", output2.blocked);
console.log("Plan:    ", output2.plan);

// ---- Test 3: Nothing is blocked ----
console.log("--- Test 3 ---");
let allBrowsers3     = ["chromium", "firefox", "webkit"];
let blockedBrowsers3 = [];

let output3 = browserExecutionPlanner(allBrowsers3, blockedBrowsers3);

console.log("Runnable:", output3.runnable);
console.log("Blocked: ", output3.blocked);
console.log("Plan:    ", output3.plan);