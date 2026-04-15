import Link from 'next/link'

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Panel de administración</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/admin/productos" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
          <h2 className="font-medium text-gray-800 mb-1">Productos</h2>
          <p className="text-sm text-gray-500">Administrar el catálogo de materiales</p>
        </Link>
        <Link href="/admin/trabajos" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
          <h2 className="font-medium text-gray-800 mb-1">Trabajos realizados</h2>
          <p className="text-sm text-gray-500">Administrar la galería de trabajos</p>
        </Link>
      </div>
    </div>
  )
}