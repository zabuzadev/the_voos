import { Check, Star } from "lucide-react"
import WhatsAppButton from "./whatsapp-button"

interface PackageCardProps {
  image: string
  title: string
  description: string
  price: number
  rating: number
  features: string[]
}

export default function PackageCard({ image, title, description, price, rating, features }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
          <span className="text-sm text-gray-600 ml-2">{rating}/5</span>
        </div>
        <h3 className="text-xl font-bold text-[#0a2463] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Preço por pessoa</p>
            <p className="text-2xl font-bold text-[#0a2463]">R$ {price.toLocaleString("pt-BR")}</p>
          </div>
          <WhatsAppButton compact text="Reservar" />
        </div>
      </div>
    </div>
  )
}
