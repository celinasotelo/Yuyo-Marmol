import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())
import { createClient } from "@supabase/supabase-js"
import { products } from "../data/product"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function seed() {
  console.log(`Insertando ${products.length} productos...`)

  for (const p of products) {
    const { error } = await supabase.from("products").upsert({
      slug: p.id,
      name: p.name,
      description: p.description,
      material: p.material,
      application: p.application,
      colors: p.colors,
      images: p.images,
      hardness: p.hardness ?? null,
      format: p.format ?? null,
      thickness: p.thickness ?? null,
      featured: p.featured ?? false,
    }, { onConflict: "slug" })

    if (error) {
      console.error(`Error en ${p.name}:`, error.message)
    } else {
      console.log(`✓ ${p.name}`)
    }
  }

  console.log("Listo.")
}

seed()