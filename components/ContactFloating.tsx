export default function ContactFloating() {
  return (
    <a
      href="https://wa.me/5493794697318"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-8.67 15l-1.08 3.95a.75.75 0 0 0 .92.92L7.12 20A10 10 0 1 0 12 2Zm0 18.5a8.43 8.43 0 0 1-4.29-1.17.75.75 0 0 0-.54-.08l-2.36.65.65-2.35a.75.75 0 0 0-.08-.55A8.5 8.5 0 1 1 12 20.5Zm4.45-5.8c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.95-1.22-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.69 2.57 4.09 3.6.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  )
}
