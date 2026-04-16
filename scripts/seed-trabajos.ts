import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Agrupamos las imágenes hardcodeadas por material
const trabajosPorMaterial: { material: string; images: string[] }[] = [
  {
    material: "granito",
    images: [
      "/images/trabajos/tf2-granito.jpeg",
      "/images/trabajos/tf20-granito.jpeg",
      "/images/trabajos/tf21-granito.jpeg",
      "/images/trabajos/tf3-granito.jpeg",
      "/images/trabajos/tf5-granito.jpeg",
      "/images/trabajos/tf8-granito.jpeg",
      "/images/trabajos/t1-granito.jpeg",
      "/images/trabajos/t10-granito.jpeg",
      "/images/trabajos/t11-granito.jpeg",
      "/images/trabajos/t12-granito.jpeg",
      "/images/trabajos/t13-granito.jpeg",
      "/images/trabajos/t14-granito.jpeg",
      "/images/trabajos/t15-granito.jpeg",
      "/images/trabajos/t16-granito.jpeg",
      "/images/trabajos/t17-granito.jpeg",
      "/images/trabajos/t18-granito.jpeg",
      "/images/trabajos/t19-granito.jpeg",
      "/images/trabajos/t20-granito.jpeg",
      "/images/trabajos/t21-granito.jpeg",
      "/images/trabajos/t22-granito.jpeg",
      "/images/trabajos/t23-granito.jpeg",
      "/images/trabajos/t4-granito.jpeg",
      "/images/trabajos/t6-granito.jpeg",
      "/images/trabajos/t7-granito.jpeg",
      "/images/trabajos/t9-granito.jpeg",
      "/images/trabajos/trabajo1-granito.jpeg",
      "/images/trabajos/trabajo10-granito.jpeg",
      "/images/trabajos/trabajo2-granito.jpeg",
      "/images/trabajos/trabajo3-granito.jpeg",
      "/images/trabajos/trabajo4-granito.jpeg",
      "/images/trabajos/trabajo5-granito.jpeg",
      "/images/trabajos/trabajo6-granito.jpeg",
      "/images/trabajos/trabajo7-granito.jpeg",
      "/images/trabajos/trabajo8-granito.jpeg",
      "/images/trabajos/trabajo9-granito.jpeg",
    ],
  },
  {
    material: "marmol",
    images: [
      "/images/trabajos/t1-marmol.jpeg",
      "/images/trabajos/t2-marmol.jpeg",
      "/images/trabajos/t3-marmol.jpeg",
      "/images/trabajos/t4-marmol.jpeg",
      "/images/trabajos/t5-marmol.jpeg",
      "/images/trabajos/trabajo10-marmol.jpeg",
      "/images/trabajos/trabajo5-marmol.jpeg",
      "/images/trabajos/trabajo6-marmol.jpeg",
      "/images/trabajos/trabajo7-marmol.jpeg",
      "/images/trabajos/trabajo8-marmol.jpeg",
      "/images/trabajos/trabajo9-marmol.jpeg",
    ],
  },
  {
    material: "silestone",
    images: [
      "/images/trabajos/t1-silestone.jpeg",
      "/images/trabajos/t2-silestone.jpeg",
      "/images/trabajos/t3-silestone.jpeg",
      "/images/trabajos/t4-silestone.jpeg",
      "/images/trabajos/t5-silestone.jpeg",
      "/images/trabajos/trabajo1-silestone.jpeg",
      "/images/trabajos/trabajo2-silestone.jpeg",
      "/images/trabajos/trabajo3-silestone.jpeg",
    ],
  },
  {
    material: "neolith",
    images: [
      "/images/trabajos/t1-neolith.jpeg",
      "/images/trabajos/t2-neolith.jpeg",
      "/images/trabajos/t3-neolith.jpeg",
      "/images/trabajos/t4-neolith.jpeg",
      "/images/trabajos/trabajo1-neolith.jpeg",
      "/images/trabajos/trabajo2-neolith.jpeg",
      "/images/trabajos/trabajo3-neolith.jpeg",
      "/images/trabajos/trabajo5-neolith.jpeg",
      "/images/trabajos/trabajo6-neolith.jpeg",
    ],
  },
  {
    material: "restauraciones",
    images: [
      "/images/trabajos/rest1.jpeg",
      "/images/trabajos/rest2.jpeg",
      "/images/trabajos/rest3.jpeg",
      "/images/trabajos/rest4.jpeg",
      "/images/trabajos/rest5.jpeg",
    ],
  },
]

async function seed() {
  console.log("Insertando trabajos...")

  for (const grupo of trabajosPorMaterial) {
    const { error } = await supabase.from("trabajos").insert({
      title: grupo.material.charAt(0).toUpperCase() + grupo.material.slice(1),
      material: grupo.material,
      images: grupo.images,
    })

    if (error) {
      console.error(`Error en ${grupo.material}:`, error.message)
    } else {
      console.log(`✓ ${grupo.material} (${grupo.images.length} imágenes)`)
    }
  }

  console.log("Listo.")
}

seed()