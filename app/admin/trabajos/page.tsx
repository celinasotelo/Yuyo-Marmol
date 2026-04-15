import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function TrabajosPage() {
  const supabase = await createClient()
  const { data: trabajos } = await supabase
    .from('trabajos')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Trabajos realizados</h1>
        <Link
          href="/admin/trabajos/nuevo"
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          + Nuevo trabajo
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
        {trabajos && trabajos.length > 0 ? (
          trabajos.map(trabajo => (
            <div key={trabajo.id} className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-medium text-gray-800">{trabajo.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{trabajo.images?.length ?? 0} imágenes</p>
              </div>
              <Link href={`/admin/trabajos/${trabajo.id}`} className="text-sm text-gray-500 hover:text-gray-700">
                Editar
              </Link>
            </div>
          ))
        ) : (
          <p className="px-6 py-8 text-sm text-gray-400 text-center">No hay trabajos todavía</p>
        )}
      </div>
    </div>
  )
}