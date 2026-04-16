import { createClient } from "@/lib/supabase/server"
import TrabajosClient from "./TrabajosClient"

export default async function TrabajosRealizadosPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("trabajos")
    .select("*")
    .order("created_at", { ascending: false })

  return <TrabajosClient trabajos={data ?? []} />
}