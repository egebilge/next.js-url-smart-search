import { CarList } from "@/components/car-list";
import { SearchBar } from "@/components/search-bar";
import { Suspense } from "react";

export default function Home() {
  // i'll do semantic search for the user with the query

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <main>
        <Suspense fallback={<div>Loading search bar...</div>}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<div>Loading cars...</div>}>
          <CarList />
        </Suspense>
      </main>
    </div>
  );
}
