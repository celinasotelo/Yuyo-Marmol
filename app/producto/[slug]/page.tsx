import { notFound } from "next/navigation"
import { products } from "@/data/product"
import ProductDetailView from "@/components/ProductDetailView"

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

  return <ProductDetailView product={product} />
}