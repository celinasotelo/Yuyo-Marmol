"use client"

import { FormEvent, useState } from "react"

type ContactData = {
  name: string
  email: string
  message: string
}

const initialState: ContactData = {
  name: "",
  email: "",
  message: "",
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactData>(initialState)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData(initialState)
      }
    } catch (error) {
      console.error("Error enviando formulario:", error)
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 md:p-8 shadow-lg border border-[#f0c7cf]"
    >
      <h3 className="text-2xl font-semibold text-[var(--primary-strong)] mb-2">
        Enviá tu consulta
      </h3>

      <div className="space-y-4">
        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-[var(--primary-strong)]">
            Nombre
          </span>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
            className="w-full rounded-lg border border-[#d9aab4] px-4 py-3"
          />
        </label>

        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-[var(--primary-strong)]">
            Mail
          </span>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            className="w-full rounded-lg border border-[#d9aab4] px-4 py-3"
          />
        </label>

        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-[var(--primary-strong)]">
            Consulta
          </span>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, message: event.target.value }))
            }
            className="w-full rounded-lg border border-[#d9aab4] px-4 py-3"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary)] disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {success && (
        <p className="mt-4 text-green-600 text-sm">
          Consulta enviada correctamente ✔
        </p>
      )}
    </form>
  )
}