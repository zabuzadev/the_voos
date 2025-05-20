import { MapPin } from "lucide-react"
import WhatsAppButton from "./whatsapp-button"

interface DestinationCardProps {
  image: string
  name: string
  country: string
  price: number
}

export default function DestinationCard({ image, name, country, price }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <div className="flex items-center text-white">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{country}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">A partir de</p>
            <p className="text-[#0a2463] font-bold text-xl">R$ {price.toLocaleString("pt-BR")}</p>
          </div>
          <WhatsAppButton compact text="Reservar" />
        </div>
      </div>
    </div>
  )
}
