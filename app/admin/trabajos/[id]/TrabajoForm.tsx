'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const WORK_MATERIALS = ["granito", "marmol", "silestone", "neolith", "restauraciones"]

export default function TrabajoForm({ trabajo, isNew }: { trabajo: any, isNew: boolean }) {
  const router = useRouter()
  const supabase = createClient()

  const [title, setTitle] = useState(trabajo?.title ?? '')
  const [description, setDescription] = useState(trabajo?.description ?? '')
  const [images, setImages] = useState<string[]>(trabajo?.images ?? [])
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [material, setMaterial] = useState(trabajo?.material ?? WORK_MATERIALS[0])

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return

    setUploading(true)
    const uploaded: string[] = []

    for (const file of files) {
      const ext = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

      const { error } = await supabase.storage
        .from('trabajos')
        .upload(fileName, file)

      if (!error) {
        const { data: { publicUrl } } = supabase.storage
          .from('trabajos')
          .getPublicUrl(fileName)
        uploaded.push(publicUrl)
      }
    }

    setImages(prev => [...prev, ...uploaded])
    setUploading(false)
  }

  async function removeImage(url: string) {
    const fileName = url.split('/').pop()!
    await supabase.storage.from('trabajos').remove([fileName])
    setImages(prev => prev.filter(i => i !== url))
  }

  async function handleSave() {
    if (!title) {
      setError('El título es obligatorio')
      return
    }

    setSaving(true)
    setError('')

    const payload = { title, description, material, images }

    const { error } = isNew
      ? await supabase.from('trabajos').insert(payload)
      : await supabase.from('trabajos').update(payload).eq('id', trabajo.id)

    if (error) {
      setError('Error al guardar: ' + error.message)
      setSaving(false)
      return
    }

    router.push('/admin/trabajos')
  }

  async function handleDelete() {
    if (!confirm('¿Seguro que querés eliminar este trabajo?')) return

    for (const url of images) {
      const fileName = url.split('/').pop()!
      await supabase.storage.from('trabajos').remove([fileName])
    }

    await supabase.from('trabajos').delete().eq('id', trabajo.id)
    router.push('/admin/trabajos')
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          {isNew ? 'Nuevo trabajo' : 'Editar trabajo'}
        </h1>
        {!isNew && (
          <button onClick={handleDelete} className="text-sm text-red-500 hover:text-red-700">
            Eliminar trabajo
          </button>
        )}
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Título *</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Descripción</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 resize-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Material</label>
          <div className="flex flex-wrap gap-2">
            {WORK_MATERIALS.map(m => (
              <button
                key={m}
                onClick={() => setMaterial(m)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                  material === m
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

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

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-gray-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50"
          >
            {saving ? 'Guardando...' : 'Guardar'}
          </button>
          <button
            onClick={() => router.push('/admin/trabajos')}
            className="px-6 py-2.5 rounded-lg text-sm text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}