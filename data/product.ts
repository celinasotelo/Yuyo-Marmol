import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "mesada-granito-marron",
    name: "Mesada Granito Negra",
    description: "Mesada de granito ideal para cocinas modernas.",
    category: "mesadas",
    priceFrom: 350000,
    sizes: ["1.20m", "1.50m", "2.00m"],
    colors: ["Marrón", "Negro", "Blanco"],
    images: [
      "/images/mesada1.webp",
      "/images/mesada2.jpg",
      "/images/mesada3.webp"
    ],
    featured: true
  }
]