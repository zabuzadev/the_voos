"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export default function SearchBar() {
  const [destination, setDestination] = useState("")
  const [dates, setDates] = useState("")
  const [travelers, setTravelers] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Construir a mensagem para o WhatsApp com os dados da pesquisa
    const message = `Olá! Gostaria de informações sobre viagem para ${destination}, período: ${dates}, viajantes: ${travelers}`
    // Número de WhatsApp da agência
    const phoneNumber = "5511999999999"
    // URL do WhatsApp com o número e a mensagem
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:gap-4">
        <div className="flex-1">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Destino
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0a2463] focus:border-[#0a2463]"
              placeholder="Para onde você quer ir?"
            />
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
            Datas
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0a2463] focus:border-[#0a2463]"
              placeholder="Quando você vai viajar?"
            />
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
            Viajantes
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0a2463] focus:border-[#0a2463]"
              placeholder="Quantas pessoas?"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-[#0a2463] hover:bg-[#051438] text-white px-6 py-2 rounded-md flex items-center justify-center transition-colors"
          >
            <Search className="h-5 w-5 mr-2" />
            <span>Buscar</span>
          </button>
        </div>
      </form>
    </div>
  )
}
