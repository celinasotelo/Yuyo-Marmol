import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/producto/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      hover:shadow-xl hover:scale-[1.02] 
                      transition-all duration-300 cursor-pointer">

        {/* Imagen */}
        <div className="relative w-full h-64">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            {product.name}
          </h2>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  )
}