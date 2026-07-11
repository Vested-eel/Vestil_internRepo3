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

Why is breaking down functions beneficial?

  Long Complex Function: 
    function processOrder(order) {
  // validate order
  if (!order || !order.items || order.items.length === 0) {
    throw new Error("Invalid order");
  }

  // calculate total
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }

  // apply discount
  if (order.discountCode === "SAVE10") {
    total = total * 0.9;
  }

  // log order
  console.log("Order processed:", order.id, "Total:", total);

  return total;
}

Prompt Validation, Calculation are mixed altogether.

Refactored Smaller Functions:

  function validateOrder(order) {
  if (!order || !order.items || order.items.length === 0) {
    throw new Error("Invalid order");
  }
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyDiscount(total, code) {
  if (code === "SAVE10") {
    return total * 0.9;
  }
  return total;
}

function processOrder(order) {
  validateOrder(order);
  let total = calculateTotal(order.items);
  total = applyDiscount(total, order.discountCode);
  console.log("Order processed:", order.id, "Total:", total);
  return total;
}

All functions and its validation or calculation are easier are available to test independently.

  - It is essential to breakdown function for to be easier to read, which is then easier to test/debug and ultimately to maintain.

How did refactoring improve the structure of the code?

  - The pre-refactored code has a mix of every function that essentially is holding one another, making it difficult to test/maintain/debug. The refactored version has separated every function to its designed role making it easier to read.



---------------------------------------
What were the issues with duplicated code?

  - While in my test case repo I did not have a any working code to use as an example, I asked Gemini to give me an example:

  Duplicated Code Example:

  function addTwoNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

function addThreeNumbers(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b + c;
}

Refactored DRY Code:

function validateNumbers(...args) {
  if (!args.every(n => typeof n === 'number')) {
    throw new Error("Inputs must be numbers");
  }
}

function addTwoNumbers(a, b) {
  validateNumbers(a, b);
  return a + b;
}

function addThreeNumbers(a, b, c) {
  validateNumbers(a, b, c);
  return a + b + c;
}

-  The duplicated code made it hard to read/maintain, the validation process appeared on multiple function, meaning the developer have to look into every function to correct it, wasting time and more chances for bugs/errors to slip through.

How did refactoring improve maintainability?

  - By refactoring repeated logic from repeating functions, the code is simpler to read/maintain.

---------------------------------------

What made the original code complex?

Example of an overly Complicated Code:

  function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

Refactored Code:

function isEven(num) {
  return num % 2 === 0;
}

  - isEven function has an if/else statement to return a boolean. It added more lines of code which clutters the code. Overall it made the non-refactored code hard to read even though it is only of boolean outcome.

How did refactoring improve it?

  - It simplifies the code whilst functioning the same, less lines of code, shorter but easy to maintain, and removed redundancy without changing how the code works.

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