export interface Product {
  id: string
  name: string
  description: string
  category: string
  priceFrom: number
  sizes: string[]
  colors: string[]
  images: string[]
  featured?: boolean
}