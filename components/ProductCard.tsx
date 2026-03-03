import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/producto/${product.id}`}>
      <div className="bg-[var(--surface)] rounded-2xl shadow-md overflow-hidden border border-[#f4d2d9]
                      hover:shadow-xl hover:scale-[1.02]
                      transition-all duration-300 cursor-pointer">

        <div className="relative w-full h-64">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold mb-2 text-[var(--primary-strong)]">
            {product.name}
          </h2>

          <p className="text-[#7a4b55] text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
