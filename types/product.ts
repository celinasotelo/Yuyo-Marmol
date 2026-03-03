export type MaterialType = "granito" | "marmol" | "silestone" | "neolith"

export type ApplicationType =
  | "Mesadas de baño"
  | "Mesadas de cocina"
  | "Pisos"
  | "Revestimientos"

export interface Product {
  id: string
  name: string
  description: string
  priceFrom: number
  material: MaterialType
  application: ApplicationType[]
  colors: string[]
  images: string[]
  featured?: boolean
}