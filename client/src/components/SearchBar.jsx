export default function SearchBar() {
  return (
    <div className="mt-8 flex items-center justify-center sm:mx-4 md:mx-20">
      <form className="w-full" onSubmit={() => console.log()}>
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-slate-100"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"></div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-sky-500 bg-zinc-700 p-4 ps-10 text-sm text-slate-300 focus:border-sky-600 focus:ring-sky-600"
            placeholder="Search a country..."
            value={""}
            onChange={""}
            required
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
