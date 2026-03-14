/**
 * Challenge 1 of 5 - Easy
 * Playwright Result Summary Generator
 * 
 * Given an array of Playwright step result objects { name, status, durationMs },
 * print a summary report of the test results.
 */

function generatePlaywrightSummary(results) {
  // Initialize counters
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let totalDuration = 0;
  let failedSteps = [];

  // Loop through each result object
  for (const step of results) {
    // Add duration regardless of status
    totalDuration += step.durationMs;

    // Count by status
    if (step.status === "passed") {
      passed++;
    } else if (step.status === "failed") {
      failed++;
      failedSteps.push(step.name); // Collect failed step names
    } else if (step.status === "skipped") {
      skipped++;
    }
  }

  // Print the summary report
  console.log(`Total Steps: ${results.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total Duration: ${totalDuration}ms`);
  console.log(`Failed Steps: ${failedSteps.join(", ")}`);
}

// ---- Example Test ----
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form",  status: "failed", durationMs: 700 },
  { name: "submit",     status: "skipped", durationMs: 0   }
];

generatePlaywrightSummary(results);