import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../redux/action";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const sections = [
    {
      label: "Continent",
      key: "continent",
    },
    {
      label: "Capital",
      key: "capital",
    },
    {
      label: "Subregion",
      key: "subregion",
    },
    {
      label: "Area",
      key: "area",
    },
    {
      label: "Population",
      key: "population",
    },
    {
      label: "Flag",
      key: "flag_image",
    },
  ];

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div className="container mx-auto mt-10 p-6">
      <div className="px-4 sm:px-0">
        <h3 className="text-5xl font-semibold leading-7 text-slate-100">
          {country.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-200">
          {country.id}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-zinc-700">
          {sections.map((section, index) => (
            <div
              key={index}
              className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            >
              <dt className="text-l font-medium leading-3 text-slate-100">
                {section.label}
              </dt>
              {section.key === "flag_image" ? (
                <dd className="mt-1 text-sm leading-3 text-slate-200 sm:col-span-2 sm:mt-0">
                  <img
                    src={country[section.key]}
                    alt={`${country.name} flag`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </dd>
              ) : (
                <dd className="mt-1 text-sm leading-3 text-slate-200 sm:col-span-2 sm:mt-0">
                  {country[section.key]}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
