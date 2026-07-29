// reusable Button.jsx

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700"
    >
      {children}
    </button>
  );
}

export default Button;
