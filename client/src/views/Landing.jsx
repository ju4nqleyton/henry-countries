import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-zinc-700">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
              Ready to explore the fascinating world of countries?
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Embark on a journey of discovery. Join us in unraveling the rich
              tapestry of nations. Explore, learn, and embrace the global
              adventure that awaits you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/home"}
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
