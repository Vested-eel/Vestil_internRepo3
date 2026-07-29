// ## Preventing Unnecessary Renders with useCallback

import { useState, useCallback } from "react";
import Child from "./Child.jsx";

function Parent() {
  const [count, setCount] = useState(0);

  // useCallback memoizes the function reference
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-xl font-semibold">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
      >
        Increment Count
      </button>

      {/* Pass memoized function to child */}
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
