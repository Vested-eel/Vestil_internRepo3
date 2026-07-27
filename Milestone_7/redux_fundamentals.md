# Redux Fundamentals Reflection

**When should you use Redux instead of useState?**

- I prefer useState for local component state, especially when the data is only relevant to one component. Redux becomes useful when state needs to be shared across multiple components, when the app grows larger, or when managing complex state transitions. Redux Toolkit simplifies setup and makes global state management more predictable and easier to debug. In short, useState is best for simple, isolated state, while Redux is best for global, shared, or complex state.

# Redux Selectors Reflection

**What are the benefits of using selectors instead of directly accessing state?**

- Selectors make state access cleaner and reusable. Instead of repeating state.counter.value everywhere, I can define a selector once and use it across components. This improves readability, reduces errors, and makes it easier to refactor or compute derived data later. In large apps, selectors help keep state logic organized and consistent.
