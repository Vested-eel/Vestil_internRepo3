// ## Preventing Unnecessary Renders with useCallback

function Child({ onClick }) {
  console.log("Child rendered");
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700"
    >
      Child Button
    </button>
  );
}

export default Child;
