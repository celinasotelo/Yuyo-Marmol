import { products } from "@/data/product"
import ProductCard from "@/components/ProductCard"

export default function Catalogo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}