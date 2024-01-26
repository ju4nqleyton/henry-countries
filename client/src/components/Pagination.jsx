import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  allCountries,
  currentPage,
  setPage,
  itemsPerPage,
  totalPages,
}) {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, allCountries.length);

  function setPagePrevious() {
    setPage((page) => (currentPage > 1 ? page - 1 : page));
  }

  function setPageNext() {
    setPage((page) => (currentPage < totalPages ? page + 1 : page));
  }

  function generatePageNumbers() {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - Math.floor(maxPagesToShow / 2) &&
          i <= currentPage + Math.floor(maxPagesToShow / 2))
      ) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  }

  return (
    <div className="mt-10 flex items-center justify-between border-t border-sky-600 bg-zinc-700 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <span
          className="relative inline-flex cursor-pointer items-center rounded-md border border-sky-600 bg-sky-500 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-sky-600"
          onClick={() => setPagePrevious()}
        >
          Previous
        </span>
        <span
          className="relative ml-3 inline-flex cursor-pointer items-center rounded-md border border-sky-600 bg-sky-500 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-sky-600"
          onClick={() => setPageNext()}
        >
          Next
        </span>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-200">
            Showing <span className="font-medium">{startIndex}</span> to{" "}
            <span className="font-medium">{endIndex}</span> of{" "}
            <span className="font-medium">{allCountries.length}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <span
              onClick={() => setPagePrevious()}
              className="relative inline-flex cursor-pointer items-center rounded-l-md px-2 py-2 text-slate-200 ring-1 ring-inset ring-gray-300 hover:bg-sky-600 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </span>{" "}
            {generatePageNumbers().map((pageNumber) => (
              <span
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`relative inline-flex cursor-pointer items-center px-4 py-2 text-sm font-semibold ${
                  pageNumber === currentPage
                    ? "bg-sky-600 text-slate-100 ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    : "text-slate-200 ring-1 ring-inset ring-gray-300 hover:bg-sky-600"
                } focus:z-20 focus:outline-offset-0`}
              >
                {pageNumber}
              </span>
            ))}
            <span
              onClick={() => setPageNext()}
              className="relative inline-flex cursor-pointer items-center rounded-r-md px-2 py-2 text-slate-200 ring-1 ring-inset ring-gray-300 hover:bg-sky-600 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
