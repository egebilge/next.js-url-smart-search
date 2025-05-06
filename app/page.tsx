import { CarList } from "@/components/car-list";
import { SearchBar } from "@/components/search-bar";
import { Suspense } from "react";

type HomeProps = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).q as string | undefined;
  // i'll do semantic search for the user with the query
  // and return the results

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <main>
        <Suspense fallback={<div>Loading search bar...</div>}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<div>Loading cars...</div>}>
          <CarList query={query} />
        </Suspense>
      </main>
    </div>
  );
}
