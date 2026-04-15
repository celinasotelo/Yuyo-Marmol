export type MaterialType = "granito" | "marmol" | "silestone" | "neolith" | "piedra"

export type ApplicationType =
  | "Mesadas de baño"
  | "Mesadas de cocina"
  | "Pisos"
  | "Revestimientos"

export interface Product {
  id: string
  name: string
  description: string
  material: MaterialType
  application: ApplicationType[]
  colors: string[]
  images: string[]
  hardness?: string
  format?: string
  thickness?: string
  featured?: boolean
}