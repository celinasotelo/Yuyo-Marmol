import { Product } from "@/types/product"

export function mapProduct(row: any): Product {
  return {
    id: row.slug,
    name: row.name,
    description: row.description ?? "",
    material: row.material,
    application: row.application ?? [],
    colors: row.colors ?? [],
    images: row.images ?? [],
    hardness: row.hardness ?? undefined,
    format: row.format ?? undefined,
    thickness: row.thickness ?? undefined,
    featured: row.featured ?? false,
  }
}