import { createClient } from '@/lib/supabase/server'
import TrabajoForm from './TrabajoForm'

export default async function TrabajoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const isNew = id === 'nuevo'

  let trabajo = null
  if (!isNew) {
    const { data } = await supabase
      .from('trabajos')
      .select('*')
      .eq('id', id)
      .single()
    trabajo = data
  }

  return <TrabajoForm trabajo={trabajo} isNew={isNew} />
}