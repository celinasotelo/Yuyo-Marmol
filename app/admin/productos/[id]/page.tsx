import { createClient } from '@/lib/supabase/server'
import ProductForm from './ProductForm'

export default async function ProductoPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { id } = await params
  const isNew = id === 'nuevo'

  let product = null
  if (!isNew) {
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    product = data
  }

  return <ProductForm product={product} isNew={isNew} />
}