Issue:  
The child component was mutating props by reassigning state = state + 5. In React, props are read‑only, so this breaks the principle of immutability and can cause confusing or unpredictable behavior.

Debugging Method:

I recreated the buggy code in a fresh React project.

I ran the app and observed that the child component was directly changing the prop value.

I reviewed the article’s explanation and compared the buggy code with React’s rules about props and state.

I confirmed the bug by checking that the child was mutating the prop instead of deriving a new value.

Resolution:  
I fixed the issue by deriving a new value instead of mutating the prop:

<!-- function Child({ state }) {
  const derived = state + 5; // derive instead of mutate
  return <p>count + 5 = {derived}</p>;
} -->
