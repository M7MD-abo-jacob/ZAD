export default function Button({ className, children, ...props }) {
  return (
    <button
      type="button"
      // bg-blue-700 hover:bg-blue-800
      className={`flex items-center justify-center gap-2 text-white bg-primary hover:bg-accent focus:ring-4 rounded-lg px-5 py-2.5 focus:outline-none  dark:text-gray-950 shadow-primary shadow-md hover:shadow-lg hover:shadow-accent transition-all duration-300 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
