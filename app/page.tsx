import { VehicleGrid } from "@/components/vehicle-grid";
import { VehicleSearchBox } from "@/components/vehicle-search-box";

type HomeProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function MainPage({ searchParams }: HomeProps) {
  const querySearch = (await searchParams)?.search as string | undefined;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full py-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 tracking-tight">
          Smart Vehicle Search
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Filter vehicles by entering brand, model, or details.
        </p>
        <VehicleSearchBox />
      </header>
      <main className="w-full max-w-6xl flex-1">
        <VehicleGrid querySearch={querySearch} />
      </main>
    </div>
  );
}
