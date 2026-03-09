"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Material = "todos" | "marmol" | "granito" | "silestone" | "neolith" | "restauraciones";

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
  { label: "Restauraciones", value: "restauraciones" },
];

const workImages: WorkImage[] = [
  { src: "/images/trabajos/tf2-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/tf20-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/tf21-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/tf3-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/tf5-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/tf8-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/rest1.jpeg", material: "restauraciones" },
  { src: "/images/trabajos/rest2.jpeg", material: "restauraciones" },
  { src: "/images/trabajos/rest3.jpeg", material: "restauraciones" },
  { src: "/images/trabajos/rest4.jpeg", material: "restauraciones" },
  { src: "/images/trabajos/rest5.jpeg", material: "restauraciones" },
  { src: "/images/trabajos/t1-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t1-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/t1-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/t1-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/t10-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t11-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t12-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t13-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t14-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t15-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t16-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t17-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t18-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t19-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t2-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/t2-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/t2-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/t20-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t21-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t22-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t23-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t3-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/t3-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/t3-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/t4-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t4-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/t4-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/t4-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/t5-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/t5-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/t6-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t7-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/t9-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo1-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo1-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/trabajo1-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/trabajo10-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo10-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/trabajo2-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo2-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/trabajo2-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/trabajo3-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo3-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/trabajo3-silestone.jpeg", material: "silestone" },
  { src: "/images/trabajos/trabajo4-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo5-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo5-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/trabajo5-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/trabajo6-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo6-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/trabajo6-neolith.jpeg", material: "neolith" },
  { src: "/images/trabajos/trabajo7-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo7-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/trabajo8-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo8-marmol.jpeg", material: "marmol" },
  { src: "/images/trabajos/trabajo9-granito.jpeg", material: "granito" },
  { src: "/images/trabajos/trabajo9-marmol.jpeg", material: "marmol" },
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