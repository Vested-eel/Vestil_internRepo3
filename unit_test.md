unit_tests.md

# Unit Testing with Jest

**Why is automated testing important in software development?**  
Automated testing ensures that code changes don’t break existing features. It prevents regressions, improves reliability, and gives developers confidence when adding new functionality. It also saves time compared to manual testing.

**What did you find challenging when writing your first Jest test?**  
The challenge was understanding the test structure (test, expect, toBe) and where to place test files. Once I saw the pattern, it became easier. The hardest part was remembering that tests should be small and focused on one piece of functionality.

# Testing React Components with Jest & React Testing Library

**Benefits of using React Testing Library instead of testing implementation details**  
RTL focuses on testing from the user’s perspective. I check what the user sees and interacts with, not the internal state. This makes tests more reliable and less fragile when code changes.

**Challenges when simulating user interaction**  
The challenge was learning how to use fireEvent and queries like getByText. Once I understood that tests should mimic user behavior (clicking buttons, reading text), it felt natural.

# Testing Redux with Jest

**Most challenging part of testing Redux**  
The challenge was realizing reducers are pure functions and don’t need a UI or Provider. Once I understood that, writing tests felt simple.

**How Redux tests differ from React component tests**  
Redux tests focus on state changes and actions, while React component tests focus on rendering and user interaction. Redux tests are logic-driven, React tests are behavior-driven.

# Mocking API Calls in Jest

**Why is it important to mock API calls in tests?**  
Mocking ensures tests run quickly and reliably without depending on real servers. It allows me to simulate different responses and error cases, making tests predictable.

**Common pitfalls when testing asynchronous code**  
The challenge was remembering to mock fetch correctly and to wait for promises to resolve. Without using waitFor or async/await, tests may fail because the component hasn’t updated yet.
