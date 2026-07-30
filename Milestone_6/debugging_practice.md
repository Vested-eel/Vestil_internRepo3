# Debugging Practice Documentation.

## Initial Attempt (Manual Files)

- Created an initial BuggyExample.jsx and index.html manually.

- Tried to run JSX directly in the browser using <script type="module">.

### Encountered errors:

- CORS issues when opening via file://.

- MIME type errors (text/jsx not supported).

- Unexpected token '<' because browsers don’t understand JSX without a bundler.

  Lesson: Browsers cannot run raw JSX; we need a bundler/transpiler.

# Transition to Vite Bundle setup.

- Installed Vite with React Template:

# Implementing Buggy Example.

- Replaced App.jsx with a parent and child components.

- Buggy version: Chile state synched with parent via useEffect

# Debugging.

- Identified that syncing child state with parent was unnecessary.

- Removed redundant child state and using parentCount directly.
