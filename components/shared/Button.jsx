export default function Button({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 dark:bg-sky-500 dark:text-gray-950 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
