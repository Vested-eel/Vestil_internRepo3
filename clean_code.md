How unit tests help keep code clean

  - Catch errors early: Unit tests immediately flag when a function breaks, so bugs don’t pile up unnoticed.

  - Prevent regressions: Once a test passes, it acts like a guardrail — if future changes break it.

  - Encourage small, focused functions: Writing tests pushes I to design functions that are easier to test, which usually means cleaner, more modular code.

  - Improve confidence: The ability to refactor or add features without fear, because tests confirm the code still works.

Issues you found while testing

  - Version mismatch: Jest v30 didn’t work with my setup, had to downgrade to v29.

  - OneDrive interference: Sync prompts made dependency changes confusing, since npm installs looked like mass deletions.

  - Test detection errors: Even with code written, Jest initially reported “no tests found” until, I reset the file and ensured the test block was properly recognized.

  - Export mismatch: At first, only add was exported from utils.js, so I had to expand exports to include subtract for testing.

  ---------------------------------------

  What was the issue with the original code?

  Weak Function: 

      function add(a, b) {
    return a + b;
  }

  Refactored with Error Handling: 

      function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

- The "add" function present does not properly validate the inputs, Anything and everything can be passed through.

How does handling errors improve reliability?

  - Adding guard clauses / Input Validation, it makes the function fail when given inputs that is not suited to receive. It makes the code more predictable and prevents silent bugs, increasing overall reliability.

---------------------------------------

When should you add comments?

  - Comments should be added when code is complex, elaborating design decisions and when documenting how to use a function. Essentially, explaining how something does.

When should you avoid comments and instead improve the code?

  - When stating something obvious, cases like pointing the something so self-explanatory should be avoided as it clutters the code.

  Bad Example: 

  // add function
function add(a, b) {
  // adds a and b
  return a + b; // return result
}

  Good Example:

  /**
 * Adds two numbers together.
 * @param {number} a - First number to add
 * @param {number} b - Second number to add
 * @returns {number} Sum of a and b
 * @throws {Error} If inputs are not numbers
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

---------------------------------------