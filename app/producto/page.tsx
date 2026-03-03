import { notFound } from "next/navigation"
import { products } from "@/data/product"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((item) => item.id === slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold text-[var(--primary-strong)]">{product.name}</h1>
      <p className="mt-4 text-[#7a4b55]">{product.description}</p>
      <p className="mt-6 text-xl font-semibold text-[var(--accent)]">
        Desde ${product.priceFrom.toLocaleString()}
      </p>
    </main>
  )
}