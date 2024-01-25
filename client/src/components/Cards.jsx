import Card from "./Card";

export default function Cards({ allCountries }) {
  return (
    <div className="bg-zinc-700">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Countries</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
          {allCountries.map((country) => (
            <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag_image={country.flag_image}
              continent={country.continent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
