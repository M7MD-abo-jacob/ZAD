export default function SelectField({ label, options, ...props }) {
  return (
    <>
      <label
        htmlFor={label}
        className="block md:inline-block w-full md:w-1/2 py-1 font-medium text-lg text-center text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:inline-block w-full md:w-1/2 mb-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
}
