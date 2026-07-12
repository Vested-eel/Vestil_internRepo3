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
