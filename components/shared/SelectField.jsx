export default function SelectField({ label, options, ...props }) {
  return (
    <>
      <label
        data-aos="zoom-in-left"
        htmlFor={label}
        className="block md:inline-block w-full md:w-1/4 py-1 font-medium capitalize text-lg text-center text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        data-aos="zoom-in-right"
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 capitalize text-sm rounded-lg focus:ring-primary focus:border-primary block md:inline-block w-full md:w-1/4 mb-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        {...props}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
