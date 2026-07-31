import { useState } from "react";

function Message() {
  const [text, setText] = useState("Hello, world!");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Button clicked!")}>Click Me</button>
    </div>
  );
}

export default Message;
