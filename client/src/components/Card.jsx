import { Link } from "react-router-dom";

export default function Card({ id, name, flag_image, continent }) {
  return (
    <Link key={id} to={`/${id.toLowerCase()}`} className="group">
      <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={flag_image}
          alt={`flag-${name}`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-slate-200">{continent}</h3>
      <p className="mt-1 text-lg font-medium text-slate-100">
        {`${name} - ${id}`}
      </p>
    </Link>
  );
}
