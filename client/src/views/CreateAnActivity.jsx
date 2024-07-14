import { useState } from "react";
import { useSelector } from "react-redux";

export default function CreateAnActivity() {
  const allCountries = useSelector((state) => state.allCountries);
  const [values, setValues] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });

  const validations = {
    name: /^[a-zA-Z\s]+$/,
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
    console.log(newValues);
  }

  return (
    <div className="container mx-auto mt-10 p-6">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-slate-100">
              Create an Activity for a Country
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Difficulty
                </label>
                <div className="mt-2">
                  <select
                    id="difficulty"
                    name="difficulty"
                    autoComplete="difficulty"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={values.difficulty}
                  >
                    {Array.from({ length: 10 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Duration Hours
                </label>
                <div className="mt-2">
                  <select
                    id="duration"
                    name="duration"
                    autoComplete="duration"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={values.duration}
                  >
                    {Array.from({ length: 24 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="season"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Season
                </label>
                <div className="mt-2">
                  <select
                    id="season"
                    name="season"
                    autoComplete="season"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={values.season}
                  >
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={values.country}
                  >
                    {allCountries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-sky-500 px-3 py-2 text-xl font-semibold text-slate-100 shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
