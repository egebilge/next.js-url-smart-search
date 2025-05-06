const cars = [
  { id: 101, brand: "Lamborghini", model: "Aventador", details: "V12 engine, 2022 model" },
  { id: 102, brand: "Tesla", model: "Model S", details: "Electric, 2023 model" },
  { id: 103, brand: "BMW", model: "M4", details: "Sport coupe, 2021 model" },
  { id: 104, brand: "Toyota", model: "Supra", details: "Japanese legend, 2020 model" },
];

interface ListProps {
  querySearch: string | undefined;
}

export async function VehicleGrid({ querySearch }: ListProps) {
  // Filtering logic: search in brand, model, and details
  const filtered = cars.filter((car) => {
    const s = querySearch?.trim().toLowerCase() || "";
    return (
      car.brand.toLowerCase().includes(s) ||
      car.model.toLowerCase().includes(s) ||
      car.details.toLowerCase().includes(s)
    );
  });

  if (!filtered.length) {
    return (
      <div className="flex flex-col items-center py-16 text-gray-400">
        <span className="text-3xl mb-2">🚗</span>
        <span className="font-medium">No results found</span>
        <span className="text-sm mt-1">Try a different keyword.</span>
      </div>
    );
  }

  return (
    <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {filtered.map((car) => (
        <article
          key={car.id}
          className="rounded-xl border bg-white/80 dark:bg-gray-800/70 shadow-md p-6 flex flex-col gap-2 hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
            {car.brand} <span className="font-normal">{car.model}</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-200 text-sm">{car.details}</p>
          <a href={`/vehicles/${car.id}`} className="mt-2 text-blue-600 hover:underline text-sm">
            View Details
          </a>
        </article>
      ))}
    </section>
  );
}
