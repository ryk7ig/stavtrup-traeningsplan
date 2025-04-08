
export function Button({ children, onClick, variant = 'default' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold shadow-md ${
        variant === 'outline' ? 'border border-gray-400' : 'bg-blue-600 text-white'
      }`}
    >
      {children}
    </button>
  );
}
