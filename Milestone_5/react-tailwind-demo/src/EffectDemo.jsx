// ##  Understanding React Hooks: useEffect

import { useState, useEffect } from "react";

function EffectDemo() {
  const [data, setData] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  // Logs when component mounts and unmounts
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Fetch data when fetchTrigger changes
  useEffect(() => {
    if (fetchTrigger) {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error(err));
    }
  }, [fetchTrigger]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <button
        onClick={() => setFetchTrigger(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
      >
        Fetch Data
      </button>

      {data && (
        <div className="text-sm text-gray-700">
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Body:</strong> {data.body}
          </p>
        </div>
      )}
    </div>
  );
}

export default EffectDemo;
