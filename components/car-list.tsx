"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

type Car = {
  id: number;
  engine: string;
  name: string;
  description: string;
};

const result: Car[] = [
  {
    id: 1,
    engine: "V10",
    name: "Ferrari",
    description: "Car 1 description",
  },
  {
    id: 2,
    engine: "V10",
    name: "Porsche",
    description: "Car 2 description",
  },

  {
    id: 3,
    name: "Mercedes",
    engine: "V8",
    description: "Car 4 description",
  },
];

function CarList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const filteredResult = React.useMemo(() => {
    return result.filter(
      (car) => {
        const searchTerm = searchQuery?.toLowerCase() ?? "";
        return (
          car.name.toLowerCase().includes(searchTerm) ||
          car.description.toLowerCase().includes(searchTerm) ||
          car.engine.toLowerCase().includes(searchTerm)
        );
      },
      [searchQuery],
    );
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 md:p-8">
      {filteredResult.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 py-20">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-6"
          >
            <title>No cars illustration</title>
            <ellipse cx="60" cy="100" rx="40" ry="10" fill="#e0e7ef" />
            <rect x="30" y="40" width="60" height="40" rx="20" fill="#f3f6fa" />
            <circle cx="50" cy="70" r="6" fill="#c7d2fe" />
            <circle cx="90" cy="80" r="4" fill="#c7d2fe" />
            <circle cx="70" cy="60" r="8" fill="#a5b4fc" />
          </svg>
          <span className="text-2xl font-semibold">No cars match your search</span>
          <span className="text-base text-gray-400 mt-2">
            Try a different keyword or reset your filters.
          </span>
        </div>
      ) : (
        filteredResult.map((car) => (
          <div
            key={car.id}
            className="relative flex flex-col justify-between p-5 md:p-6 rounded-3xl bg-white/60 dark:bg-gray-900/60 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden min-h-[220px] md:min-h-[260px]"
          >
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                {car.name}
              </h2>
              <span className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-sm">
                {car.engine}
              </span>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-light leading-relaxed mb-10 md:mb-12">
                {car.description}
              </p>
            </div>
            <a
              href={`/cars/${car.id}`}
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              title="View Details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Arrow icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export { CarList };
