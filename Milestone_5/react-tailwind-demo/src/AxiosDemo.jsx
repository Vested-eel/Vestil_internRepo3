// Making API Calls with Axios

import { useState } from "react";
import api from "./api/axios";

function AxiosDemo() {
  const [response, setResponse] = useState(null);

  const makeRequest = async () => {
    try {
      const res = await api.post("/posts", {
        title: "Hello",
        body: "Focus Bear demo",
      });
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <button
        onClick={makeRequest}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
      >
        Send API Request
      </button>

      {response && (
        <div>
          <p>
            <strong>ID:</strong> {response.id}
          </p>
          <p>
            <strong>Title:</strong> {response.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default AxiosDemo;
