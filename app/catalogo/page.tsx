"use client"

import { useMemo, useState } from "react"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/product"
import { ApplicationType, MaterialType } from "@/types/product"

const materialConfig: { key: MaterialType; label: string; image: string }[] = [
  {
    key: "granito",
    label: "Granitos naturales",
    image: "/images/granito.jpg", 
  },
  {
    key: "marmol",
    label: "Mármoles",
    image: "/images/marmol.jpg",
  },
  {
    key: "silestone",
    label: "Silestone",
    image: "/images/silestone.jpg",
  },
]

type PriceFilter = "all" | "low" | "mid" | "high"

export default function Catalogo() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType | null>(null)
  const [selectedColor, setSelectedColor] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState<"all" | ApplicationType>("all")
  const [selectedPrice, setSelectedPrice] = useState<PriceFilter>("all")

  const materialProducts = useMemo(
    () => products.filter((p) => p.material === selectedMaterial),
    [selectedMaterial]
  )

  const colorOptions = useMemo(() => {
    const set = new Set<string>()
    materialProducts.forEach((p) => p.colors.forEach((color) => set.add(color)))
    return Array.from(set)
  }, [materialProducts])

  const applicationOptions = useMemo(() => {
    const set = new Set<ApplicationType>()
    materialProducts.forEach((p) => p.application.forEach((app) => set.add(app)))
    return Array.from(set)
  }, [materialProducts])

  const filteredProducts = useMemo(() => {
    return materialProducts.filter((product) => {
      const byColor = selectedColor === "all" || product.colors.includes(selectedColor)
      const byApplication =
        selectedApplication === "all" || product.application.includes(selectedApplication)

      const byPrice =
        selectedPrice === "all" ||
        (selectedPrice === "low" && product.priceFrom < 400000) ||
        (selectedPrice === "mid" && product.priceFrom >= 400000 && product.priceFrom <= 550000) ||
        (selectedPrice === "high" && product.priceFrom > 550000)

      return byColor && byApplication && byPrice
    })
  }, [materialProducts, selectedColor, selectedApplication, selectedPrice])

  if (!selectedMaterial) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
          Productos por material
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {materialConfig.map((material) => (
            <div key={material.key} className="rounded-2xl bg-gray-50 p-4 shadow-sm">
              <img
                src={material.image}
                alt={material.label}
                className="h-48 w-full rounded-xl object-cover"
              />
              <div className="px-2 pb-2 pt-4">
                <h2 className="text-xl font-semibold text-gray-900">{material.label}</h2>
                <button
                  onClick={() => setSelectedMaterial(material.key)}
                  className="mt-4 rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }

  return (
        <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {materialConfig.find((m) => m.key === selectedMaterial)?.label}
          </h1>
          <p className="mt-1 text-sm text-gray-600">Filtrá por color, aplicación y precio.</p>
        </div>
        <button
          onClick={() => {
            setSelectedMaterial(null)
            setSelectedColor("all")
            setSelectedApplication("all")
            setSelectedPrice("all")
          }}
          className="w-fit rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Volver a materiales
        </button>
      </div>

      <section className="mb-8 grid grid-cols-1 gap-4 rounded-2xl bg-gray-100 p-5 md:grid-cols-3">
        <label className="text-sm font-medium text-gray-700">
          Color
          <select
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="all">Todos</option>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-gray-700">
          Aplicación
          <select
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
            value={selectedApplication}
            onChange={(e) => setSelectedApplication(e.target.value as "all" | ApplicationType)}
          >
            <option value="all">Todas</option>
            {applicationOptions.map((application) => (
              <option key={application} value={application}>
                {application}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-gray-700">
          Precio
          <select
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value as PriceFilter)}
          >
            <option value="all">Todos</option>
            <option value="low">Menos de $400.000</option>
            <option value="mid">$400.000 a $550.000</option>
            <option value="high">Más de $550.000</option>
          </select>
        </label>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-gray-600">
          No hay productos que coincidan con los filtros seleccionados.
        </p>
      )}
    </main>
  )
}