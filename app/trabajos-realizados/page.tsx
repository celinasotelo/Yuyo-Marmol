"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Material = "todos" | "marmol" | "granito" | "silestone" | "neolith" | "otros";

type WorkImage = {
  src: string;
  material: Exclude<Material, "todos">;
};

const filters: { label: string; value: Material }[] = [
  { label: "Todos", value: "todos" },
  { label: "Mármol", value: "marmol" },
  { label: "Granito", value: "granito" },
  { label: "Silestone", value: "silestone" },
  { label: "Neolith", value: "neolith" },
  { label: "Otros", value: "otros" },
];

const workImages: WorkImage[] = [
  { src: "/images/trabajo5-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajo1-granito.jpeg", material: "granito" },
  { src: "/images/trabajo1-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajo1-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajo6-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajo2-granito.jpeg", material: "granito" },
  { src: "/images/trabajo2-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajo2-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajo7-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajo3-granito.jpeg", material: "granito" },
  { src: "/images/trabajo3-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajo3-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajo8-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajo4-granito.jpeg", material: "granito" },
  { src: "/images/trabajo9-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajo5-granito.jpeg", material: "granito" },
  { src: "/images/trabajo5-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajo10-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajo6-granito.jpeg", material: "granito" },
  { src: "/images/trabajo6-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajo7-granito.jpeg", material: "granito" },
  { src: "/images/trabajo8-granito.jpeg", material: "granito" },
  
];

export default function TrabajosRealizadosPage() {
  const [activeFilter, setActiveFilter] = useState<Material>("todos");

  const filteredImages = useMemo(
    () =>
      activeFilter === "todos"
        ? workImages
        : workImages.filter((image) => image.material === activeFilter),
    [activeFilter],
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <section className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition md:text-base ${
                isActive
                  ? "border-[#7a1328] bg-[#7a1328] text-white"
                  : "border-[#7a1328]/30 text-[#7a1328] hover:border-[#7a1328]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </section>

      <section className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {filteredImages.map((image) => (
          <div key={image.src} className="break-inside-avoid overflow-hidden rounded-xl">
            <Image
              src={image.src}
              alt="Trabajo realizado"
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </section>
    </main>
  );
}