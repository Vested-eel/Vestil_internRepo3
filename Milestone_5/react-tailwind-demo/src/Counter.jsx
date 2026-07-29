// ## For Styling with Tailwind CSS section

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-xl font-semibold">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;

// ## For Understanding Components & Props section

// import { useState } from "react";

// function Counter() {
//   // Declare a state variable called "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

// ## For Understanding Components & Props section

// import { useState } from "react";

// function Counter() {
//   // Declare a state variable called "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter;
