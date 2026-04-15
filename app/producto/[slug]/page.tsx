import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { mapProduct } from "@/lib/supabase/mappers"
import ProductDetailView from "@/components/ProductDetailView"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!data) notFound()

  return <ProductDetailView product={mapProduct(data)} />
}