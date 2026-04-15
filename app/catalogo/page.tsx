import { createClient } from "@/lib/supabase/server"
import { mapProduct } from "@/lib/supabase/mappers"
import CatalogoClient from "./CatalogoClient"

export default async function CatalogoPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("products")
    .select("*")
    .order("name")

  const products = (data ?? []).map(mapProduct)

  return <CatalogoClient products={products} />
}