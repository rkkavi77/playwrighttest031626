// Challenge 2 of 5 - Easy
// Build Test Users from Arrays
//
// We get two lists:
// - names = ["Amit Kumar", "Neha Singh"]
// - roles = ["admin", "viewer"]
//
// We need to combine them into user objects like:
// { username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }

function buildTestUsers(names, roles) {

  // Step 1: Create an empty box to store our users
  let users = [];

  // Step 2: Loop through each name one by one
  // We use "i" as a counter so we can grab the matching role
  for (let i = 0; i < names.length; i++) {

    // Step 3: Grab the current name and role
    let currentName = names[i];
    let currentRole = roles[i];
    // Step 4: Turn the name into a username
    // "Amit Kumar" --> lowercase --> "amit kumar" --> replace space --> "amit_kumar"
    let username = currentName.toLowerCase().replace(" ", "_");

    // Step 5: Build the email using the username
    // "amit_kumar" + "@playwrightbatch.com" = "amit_kumar@playwrightbatch.com"
    let email = username + "@playwrightbatch.com";

    // Step 6: Create the user object with all 3 pieces
    let userObject = {
      username: username,
      email: email,
      role: currentRole
    };

    // Step 7: Push (add) the user object into our users list
    users.push(userObject);
  }

  // Step 8: Return the final list of users
  return users;
}

// ---- Test it with the example ----
let names = ["Amit Kumar", "Neha Singh"];
let roles  = ["admin", "viewer"];

let result = buildTestUsers(names, roles);

// Print the result
console.log(result);