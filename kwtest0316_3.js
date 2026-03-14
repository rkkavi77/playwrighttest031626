// Challenge 3 of 5 - Easy
// Normalize Locator Error Messages
//
// We get a messy error message like:
// "  Locator  not found  after TIMEOUT  "
//
// We need to:
// 1. Trim extra spaces from start and end
// 2. Convert everything to lowercase
// 3. Collapse multiple spaces into one space
// 4. Figure out the category: TIMEOUT, LOCATOR, or GENERAL

function normalizeErrorMessage(rawMessage) {

  // Step 1: Trim spaces from the start and end
  // "  hello world  " --> "hello world"
  let step1 = rawMessage.trim();

  // Step 2: Convert everything to lowercase
  // "Hello World" --> "hello world"
  let step2 = step1.toLowerCase();

  // Step 3: Collapse multiple spaces into one space
  // "hello   world" --> "hello world"
  // /\s+/g means "find ALL groups of spaces"
  // and replace them with a single space " "
  let normalized = step2.replace(/\s+/g, " ");

  // Step 4: Figure out the category
  // We check TIMEOUT first because it has priority!
  let category = "";

  if (normalized.includes("timeout")) {
    // Message has the word "timeout" in it
    category = "TIMEOUT";

  } else if (normalized.includes("locator")) {
    // Message has the word "locator" in it
    category = "LOCATOR";

  } else {
    // Message has neither word
    category = "GENERAL";
  }

  // Step 5: Print the final result
  console.log("Normalized: " + normalized);
  console.log("Category: " + category);
}

// ---- Test 1: Has both timeout and locator (TIMEOUT wins) ----
console.log("--- Test 1 ---");
normalizeErrorMessage("  Locator  not found  after TIMEOUT  ");

// ---- Test 2: Only has locator ----
console.log("--- Test 2 ---");
normalizeErrorMessage("  LOCATOR   was not visible  ");

// ---- Test 3: Neither word ----
console.log("--- Test 3 ---");
normalizeErrorMessage("  Something   went   WRONG  ");