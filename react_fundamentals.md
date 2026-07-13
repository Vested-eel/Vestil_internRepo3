## Reflection (react_fundamentals.md at repo root)

Here’s a draft you can drop in:

```markdown
# Reflection on Tailwind Setup

## Challenges Faced

- Initially tried to use Tailwind v4 with Create React App (CRA).
- CRA was not fully compatible with Tailwind v4’s new PostCSS plugin (`@tailwindcss/postcss`), which caused persistent build errors.
- Multiple versions of Tailwind (v3 via `react-scripts` and v4 via direct install) conflicted inside `node_modules`.
- Debugging was confusing because the error messages pointed to PostCSS parsing issues.

## Resolution

- Decided to use Tailwind v3 for stability with CRA.
- Corrected `postcss.config.js` to use `tailwindcss: {}` instead of `@tailwindcss/postcss`.
- Removed duplicate `package.json` and `package-lock.json` files to avoid nested dependency issues.
- Cleaned `node_modules` and reinstalled dependencies to ensure only Tailwind v3 was active.

## Key Learning

- Tailwind v4 requires modern bundlers like Vite or Next.js for smooth integration.
- CRA works best with Tailwind v3, so choosing the right version for the environment is critical.
- Debugging build errors often comes down to checking dependency versions and configuration files line‑by‑line.
```

# Reflection on Components & Props

## Why are components important in React?

- Components are the building blocks of React. They let developers break the user interface into smaller, reusable pieces instead of writing one large file. Each component can handle its own logic and styling, making the code easier to read and maintain.

- Props (short for properties) allow components to receive data from their parent. This makes components flexible, the same component can display different content depending on the props passed to it. Examples are, the `HelloWorld` component can greet “Focus Bear,” “Hello,” or anyone else just by changing the `name` prop.

## Challenges Faced

- I initially ran `npm start` in the wrong folder, which caused an error saying `package.json` couldn’t be found.
- I also learned that you shouldn’t wrap a component that already returns an `<h1>` inside another `<h1>` tag.
- Understanding how props work helped me see how React passes data between components.

## Key Learning

- React components make development modular and organized. Props make those components dynamic and reusable, which is one of the reasons React is so powerful.

# Reflection on State & User Input

## What happens if we modify state directly instead of using setState?

- In React, state is managed internally by the component. If we try to change the state variable directly (for example, `count = count + 1`), React won’t notice the change. The value might update in memory, but the component won’t re‑render, so the screen won’t show the new count.

Using the setter function (`setCount`) tells React that the state has changed. React then re‑renders the component and updates the UI automatically. This is why we always use `setState` (or `setCount` in this case) instead of modifying the variable directly.

# Reflection on Lists & User Input

## What are some common issues when working with lists in React?

- Forgetting to include a **unique key** for each item when using `.map()` can cause rendering warnings or unexpected behavior.

- Directly modifying the list instead of using the setter function (`setItems`) prevents React from updating the UI correctly.

- Adding empty or duplicate items can make the list look messy if not handled properly.

- Managing state correctly ensures the list updates smoothly and React re-renders as expected.
