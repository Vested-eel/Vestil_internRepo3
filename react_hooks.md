# Reflection on useEffect

## When should you use useEffect instead of handling logic inside event handlers?

Use useEffect when the logic should run automatically after render (like fetching data when a component loads, or setting up a subscription). Event handlers are for user-triggered actions, while useEffect is for lifecycle-related side effects.

## What happens if you don’t provide a dependency array?

The effect runs after every render, which can cause unnecessary re-runs and performance issues. With an empty array [], it runs only once on mount.

## How can improper use of useEffect cause performance issues?

- Forgetting the dependency array can cause infinite loops.
- Adding too many dependencies can trigger frequent re-renders.
- Not cleaning up (like leaving event listeners active) can cause memory leaks.
