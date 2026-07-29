import { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]); // list state
  const [input, setInput] = useState(""); // input field state

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]); // add new item to list
      setInput(""); // clear input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // display each item
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
