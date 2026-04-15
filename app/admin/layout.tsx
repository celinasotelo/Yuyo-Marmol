'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (pathname === '/admin/login') return <>{children}</>

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-gray-800">Yuyo Mármol — Admin</span>
          <Link
            href="/admin/productos"
            className={`text-sm ${pathname.startsWith('/admin/productos') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Productos
          </Link>
          <Link
            href="/admin/trabajos"
            className={`text-sm ${pathname.startsWith('/admin/trabajos') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Trabajos realizados
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cerrar sesión
        </button>
      </nav>
      <main className="max-w-5xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}