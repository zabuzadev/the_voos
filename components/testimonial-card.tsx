import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  image: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, location, image, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-[#0a2463]">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4 italic">"{text}"</p>

      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-current" : "text-gray-300"}`} />
        ))}
      </div>
    </div>
  )
}
