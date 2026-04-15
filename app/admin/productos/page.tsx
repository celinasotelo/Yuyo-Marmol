import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function ProductosPage() {
  const supabase = await createClient()
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Productos</h1>
        <Link
          href="/admin/productos/nuevo"
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          + Nuevo producto
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
        {products && products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-medium text-gray-800">{product.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{product.material} · {product.images?.length ?? 0} imágenes</p>
              </div>
              <Link
                href={`/admin/productos/${product.id}`}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Editar
              </Link>
            </div>
          ))
        ) : (
          <p className="px-6 py-8 text-sm text-gray-400 text-center">No hay productos todavía</p>
        )}
      </div>
    </div>
  )
}