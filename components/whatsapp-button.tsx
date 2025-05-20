"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  text?: string
  compact?: boolean
  large?: boolean
  floating?: boolean
}

export default function WhatsAppButton({
  text = "Falar com consultor",
  compact = false,
  large = false,
  floating = false,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    // Número de WhatsApp da agência
    const phoneNumber = "5511999999999"
    // Mensagem pré-definida
    const message = "Olá! Gostaria de mais informações sobre viagens."
    // URL do WhatsApp com o número e a mensagem
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank")
  }

  if (floating) {
    return (
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    )
  }

  if (compact) {
    return (
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        <span className="text-sm">{text}</span>
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${large ? "px-8 py-4 text-lg" : "px-6 py-3"} rounded-md flex items-center justify-center transition-colors`}
    >
      <MessageCircle className={`${large ? "h-6 w-6 mr-3" : "h-5 w-5 mr-2"}`} />
      <span>{text}</span>
    </button>
  )
}
