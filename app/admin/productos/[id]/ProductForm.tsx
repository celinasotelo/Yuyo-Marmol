'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const MATERIALS = ['granito', 'marmol', 'silestone', 'neolith', 'piedra']
const APPLICATIONS = ['Mesadas de baño', 'Mesadas de cocina', 'Pisos', 'Revestimientos']

function slugify(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function ProductForm({ product, isNew }: { product: any, isNew: boolean }) {
  const router = useRouter()
  const supabase = createClient()

  const [name, setName] = useState(product?.name ?? '')
  const [description, setDescription] = useState(product?.description ?? '')
  const [priceFrom, setPriceFrom] = useState(product?.price_from ?? '')
  const [material, setMaterial] = useState(product?.material ?? MATERIALS[0])
  const [application, setApplication] = useState<string[]>(product?.application ?? [])
  const [colors, setColors] = useState<string[]>(product?.colors ?? [])
  const [colorInput, setColorInput] = useState('')
  const [hardness, setHardness] = useState(product?.hardness ?? '')
  const [format, setFormat] = useState(product?.format ?? '')
  const [thickness, setThickness] = useState(product?.thickness ?? '')
  const [featured, setFeatured] = useState(product?.featured ?? false)
  const [images, setImages] = useState<string[]>(product?.images ?? [])
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function toggleApplication(value: string) {
    setApplication(prev =>
      prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
    )
  }

  function addColor() {
    if (colorInput.trim() && !colors.includes(colorInput.trim())) {
      setColors(prev => [...prev, colorInput.trim()])
      setColorInput('')
    }
  }

  function removeColor(color: string) {
    setColors(prev => prev.filter(c => c !== color))
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return

    setUploading(true)
    setError('')
    const uploaded: string[] = []

    for (const file of files) {
      const ext = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

      const { error } = await supabase.storage
        .from('productos')
        .upload(fileName, file)

      if (error) {
        setError(`Error al subir ${file.name}: ${error.message}`)
        setUploading(false)
        return
      }

      const { data: { publicUrl } } = supabase.storage
        .from('productos')
        .getPublicUrl(fileName)
      uploaded.push(publicUrl)
    }

    setImages(prev => [...prev, ...uploaded])
    setUploading(false)
  }

  async function removeImage(url: string) {
    const fileName = url.split('/').pop()!
    await supabase.storage.from('productos').remove([fileName])
    setImages(prev => prev.filter(i => i !== url))
  }

  async function handleSave() {
    if (!name || !material) {
      setError('El nombre y el material son obligatorios')
      return
    }

    setSaving(true)
    setError('')

    const payload = {
      name,
      slug: slugify(name),
      description,
      material,
      application,
      colors,
      images,
      hardness: hardness || null,
      format: format || null,
      thickness: thickness || null,
      featured,
    }

    const { error } = isNew
      ? await supabase.from('products').insert(payload)
      : await supabase.from('products').update(payload).eq('id', product.id)

    if (error) {
      setError('Error al guardar: ' + error.message)
      setSaving(false)
      return
    }

    router.push('/admin/productos')
  }

  async function handleDelete() {
    if (!confirm('¿Seguro que querés eliminar este producto?')) return

    // Eliminar imágenes del storage
    for (const url of images) {
      const fileName = url.split('/').pop()!
      await supabase.storage.from('productos').remove([fileName])
    }

    await supabase.from('products').delete().eq('id', product.id)
    router.push('/admin/productos')
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          {isNew ? 'Nuevo producto' : 'Editar producto'}
        </h1>
        {!isNew && (
          <button onClick={handleDelete} className="text-sm text-red-500 hover:text-red-700">
            Eliminar producto
          </button>
        )}
      </div>

      <div className="space-y-5">

        {/* Nombre */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Nombre *</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Descripción</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 resize-none"
          />
        </div>

        {/* Material */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Material *</label>
          <div className="flex flex-wrap gap-2">
            {MATERIALS.map(m => (
              <button
                key={m}
                onClick={() => setMaterial(m)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${material === m ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Aplicación */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Aplicación</label>
          <div className="flex flex-wrap gap-2">
            {APPLICATIONS.map(a => (
              <button
                key={a}
                onClick={() => toggleApplication(a)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${application.includes(a) ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Precio desde</label>
          <input
            type="number"
            value={priceFrom}
            onChange={e => setPriceFrom(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Colores */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Colores</label>
          <div className="flex gap-2 mb-2">
            <input
              value={colorInput}
              onChange={e => setColorInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addColor()}
              placeholder="Escribí un color y presioná Enter"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400"
            />
            <button onClick={addColor} className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">
              Agregar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map(color => (
              <span key={color} className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                {color}
                <button onClick={() => removeColor(color)} className="text-gray-400 hover:text-gray-600">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Campos opcionales */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Dureza</label>
            <input value={hardness} onChange={e => setHardness(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Formato</label>
            <input value={format} onChange={e => setFormat(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Espesor</label>
            <input value={thickness} onChange={e => setThickness(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
          </div>
        </div>

        {/* Destacado */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={e => setFeatured(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="text-sm text-gray-700">Producto destacado</label>
        </div>

        {/* Imágenes */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Imágenes</label>
          <label className={`flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
            <span className="text-sm text-gray-400">
              {uploading ? 'Subiendo...' : 'Hacé clic para subir imágenes'}
            </span>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
          </label>

          {images.length > 0 && (
            <div className="grid grid-cols-4 gap-3 mt-3">
              {images.map(url => (
                <div key={url} className="relative group aspect-square">
                  <img src={url} className="w-full h-full object-cover rounded-lg" />
                  <button
                    onClick={() => removeImage(url)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Botones */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-gray-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50"
          >
            {saving ? 'Guardando...' : 'Guardar'}
          </button>
          <button
            onClick={() => router.push('/admin/productos')}
            className="px-6 py-2.5 rounded-lg text-sm text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
        </div>

      </div>
    </div>
  )
}