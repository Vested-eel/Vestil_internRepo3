// ## Optimizing Performance with useMemo

import { useState, useMemo } from "react";

function ExpensiveList() {
  const [count, setCount] = useState(0);

  // Simulate a large list
  const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);

  // Expensive calculation (sum of numbers)
  const total = useMemo(() => {
    console.log("Expensive calculation running...");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-xl font-semibold">Total: {total}</p>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
      >
        Increment Count
      </button>
    </div>
  );
}

export default ExpensiveList;
