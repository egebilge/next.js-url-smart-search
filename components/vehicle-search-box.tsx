"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export function VehicleSearchBox() {
  const router = useRouter();
  const params = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = inputRef.current?.value.trim() || "";
    const sp = new URLSearchParams(params.toString());
    if (value) {
      sp.set("search", value);
    } else {
      sp.delete("search");
    }
    router.replace(`?${sp.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center py-6">
      <input
        ref={inputRef}
        type="text"
        name="vehicleSearch"
        placeholder="Search by brand, model or details..."
        defaultValue={params.get("search") || ""}
        className="w-full max-w-md px-5 py-3 rounded-lg border border-blue-200 dark:border-blue-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none shadow"
      />
      <button
        type="submit"
        className="ml-3 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}
