# Reflection on useEffect

## When should you use useEffect instead of handling logic inside event handlers?

Use useEffect when the logic should run automatically after render (like fetching data when a component loads, or setting up a subscription). Event handlers are for user-triggered actions, while useEffect is for lifecycle-related side effects.

## What happens if you don’t provide a dependency array?

The effect runs after every render, which can cause unnecessary re-runs and performance issues. With an empty array [], it runs only once on mount.

## How can improper use of useEffect cause performance issues?

- Forgetting the dependency array can cause infinite loops.
- Adding too many dependencies can trigger frequent re-renders.
- Not cleaning up (like leaving event listeners active) can cause memory leaks.

# Reflection on useCallback

## What problem does useCallback solve?

- In React, functions are recreated on every render. When passed as props, this can trigger unnecessary re‑renders in child components. useCallback memoizes the function reference so it stays stable between renders unless its dependencies change.

## How does useCallback work differently from useMemo?

- useCallback returns a **memoized function**, while useMemo returns a **memoized value**. Both use dependency arrays, but useCallback is specifically for optimizing function references.

## When would useCallback not be useful?

- If the function isn’t passed to child components or doesn’t cause re‑renders, useCallback adds unnecessary complexity. It’s most useful when optimizing performance in components that rely on stable function props.

# Reflection on useMemo

## How does useMemo improve performance?

- It prevents expensive calculations from running on every render by caching their results until dependencies change.

## When should you avoid using useMemo?

- When the computation is cheap or the component rarely re-renders. Overusing it adds unnecessary complexity.

## What happens if you remove useMemo?

- The calculation runs on every render, even when inputs haven’t changed, which can slow down the app.
