"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchInputValue") as string;

    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("q", searchQuery);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full flex justify-center items-center py-8">
      <div className="relative flex w-full max-w-xl">
        <label htmlFor="searchInputValue" className="sr-only">
          Search cars
        </label>
        <input
          id="searchInputValue"
          name="searchInputValue"
          type="text"
          placeholder="Search cars..."
          className="w-full pl-14 pr-16 py-4 rounded-full bg-white/60 dark:bg-gray-900/60 shadow-xl backdrop-blur-lg border-none text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
          defaultValue={searchParams.get("q") ?? ""}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-400 dark:text-blue-500 h-7 w-7 pointer-events-none"
          aria-label="Search"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Search icon</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Search icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export { SearchBar };
