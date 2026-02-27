import { products } from "@/data/product"

export default function ProductPage({ params }: { params: { slug: string } }) {

  const product = products.find(p => p.id === params.slug)

  if (!product) return <div>Producto no encontrado</div>

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}