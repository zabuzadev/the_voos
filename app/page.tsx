"use client"

import { Plane } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5511999999999"
    const message = "Olá! Gostaria de mais informações sobre viagens."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a2463] text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Plane className="h-6 w-6 mr-2" />
            <span className="text-2xl font-bold">The Voos</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#destinos" className="hover:text-gray-200 transition-colors">
              Destinos
            </Link>
            <Link href="#promocoes" className="hover:text-gray-200 transition-colors">
              Promoções
            </Link>
            <Link href="#pacotes" className="hover:text-gray-200 transition-colors">
              Pacotes
            </Link>
            <Link href="#sobre" className="hover:text-gray-200 transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="hover:text-gray-200 transition-colors">
              Contato
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[600px]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Descubra o Mundo com a The Voos</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">
            Viagens inesquecíveis, experiências únicas e os melhores preços do mercado
          </p>

          {/* Botão de busca simplificado */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            <span>Buscar Viagens</span>
          </button>
        </div>
      </section>

      {/* Destinos Populares */}
      <section id="destinos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2463] mb-2">Destinos Populares</h2>
          <p className="text-gray-600 mb-8">Conheça os destinos mais procurados pelos nossos clientes</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Destino 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#0a2463]">Rio de Janeiro</h3>
                <p className="text-gray-600 text-sm">Brasil</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#0a2463] font-bold">R$ 899</p>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            {/* Destino 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#0a2463]">Cancún</h3>
                <p className="text-gray-600 text-sm">México</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#0a2463] font-bold">R$ 3.599</p>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            {/* Destino 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#0a2463]">Paris</h3>
                <p className="text-gray-600 text-sm">França</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#0a2463] font-bold">R$ 4.299</p>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            {/* Destino 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#0a2463]">Orlando</h3>
                <p className="text-gray-600 text-sm">Estados Unidos</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#0a2463] font-bold">R$ 3.999</p>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promoções */}
      <section id="promocoes" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2463] mb-2">Ofertas Imperdíveis</h2>
          <p className="text-gray-600 mb-8">Aproveite nossas promoções por tempo limitado</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Promoção 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-300"></div>
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg font-bold">
                  -30%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2463] mb-2">Pacote Nordeste</h3>
                <p className="text-gray-600 mb-4">7 dias em Porto de Galinhas com passagens e hospedagem</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through">R$ 3.999</span>
                    <p className="text-2xl font-bold text-[#0a2463]">R$ 2.799</p>
                  </div>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            {/* Promoção 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-300"></div>
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg font-bold">
                  -25%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2463] mb-2">Gramado e Canela</h3>
                <p className="text-gray-600 mb-4">5 dias com passeios inclusos e hospedagem de luxo</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through">R$ 2.499</span>
                    <p className="text-2xl font-bold text-[#0a2463]">R$ 1.875</p>
                  </div>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            {/* Promoção 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-300"></div>
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg font-bold">
                  -40%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2463] mb-2">Buenos Aires</h3>
                <p className="text-gray-600 mb-4">6 dias com passagens, hospedagem e city tour</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through">R$ 4.299</span>
                    <p className="text-2xl font-bold text-[#0a2463]">R$ 2.579</p>
                  </div>
                  <button onClick={openWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simplificado */}
      <footer className="bg-[#051438] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Plane className="h-6 w-6 mr-2" />
            <span className="text-2xl font-bold">The Voos</span>
          </div>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            Sua agência de viagens de confiança para destinos nacionais e internacionais.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Fale Conosco</span>
          </button>
          <p className="mt-8 text-gray-400">
            &copy; {new Date().getFullYear()} The Voos. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Falar pelo WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
