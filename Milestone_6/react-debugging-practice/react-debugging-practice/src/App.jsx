import { useState, useEffect } from "react";

function Parent() {
  const [parentCount, setParentCount] = useState(0);
  return (
    <div>
      <p>Parent count: {parentCount}</p>
      <button onClick={() => setParentCount((c) => c + 1)}>
        Increment Parent
      </button>
      <Child parentCount={parentCount} />
    </div>
  );
}

function Child({ parentCount }) {
  const [childCount, setChildCount] = useState(parentCount);

  // Buggy version: syncing child state with parent
  useEffect(() => {
    setChildCount(parentCount);
  }, [parentCount]);

  return (
    <div>
      <p>Child count: {childCount}</p>
      <button onClick={() => setChildCount((c) => c + 1)}>
        Increment Child
      </button>
    </div>
  );
}

export default Parent; // ✅ export so Fast Refresh works

import { useState } from "react";

// ## Correct code w/ no errors.

// function Parent() {
//   const [parentCount, setParentCount] = useState(0);
//   return (
//     <div>
//       <p>Parent count: {parentCount}</p>
//       <button onClick={() => setParentCount(c => c + 1)}>Increment Parent</button>
//       <Child parentCount={parentCount} />
//     </div>
//   );
// }

// function Child({ parentCount }) {
//   // ✅ Fixed: just use parentCount directly, no syncing
//   return (
//     <div>
//       <p>Child count: {parentCount}</p>
//       <button onClick={() => console.log("Child increment clicked")}>
//         Increment Child
//       </button>
//     </div>
//   );
// }

// export default Parent;
