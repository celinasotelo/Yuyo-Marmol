"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

type Material = "todos" | "granito" | "marmol" | "silestone" | "neolith" | "restauraciones"

type Trabajo = {
  id: string
  title: string
  description: string | null
  material: string | null
  images: string[]
}

const filters: { label: string; value: Material }[] = [
  { label: "Todos", value: "todos" },
  { label: "Mármol", value: "marmol" },
  { label: "Granito", value: "granito" },
  { label: "Silestone", value: "silestone" },
  { label: "Neolith", value: "neolith" },
  { label: "Restauraciones", value: "restauraciones" },
]

export default function TrabajosClient({ trabajos }: { trabajos: Trabajo[] }) {
  const [activeFilter, setActiveFilter] = useState<Material>("todos")

  const filteredImages = useMemo(() => {
    const allImages: { src: string; material: string }[] = trabajos.flatMap(t =>
      (t.images ?? []).map(src => ({ src, material: t.material ?? "" }))
    )

    if (activeFilter === "todos") return allImages
    return allImages.filter(img => img.material === activeFilter)
  }, [trabajos, activeFilter])

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <section className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value
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
          )
        })}
      </section>

      <section className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {filteredImages.map((image, index) => (
          <div key={`${image.src}-${index}`} className="break-inside-avoid overflow-hidden rounded-xl">
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

      {filteredImages.length === 0 && (
        <p className="mt-8 text-center text-[#7a4b55]">
          No hay trabajos para el filtro seleccionado.
        </p>
      )}
    </main>
  )
}