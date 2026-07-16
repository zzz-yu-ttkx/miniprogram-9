import { useState } from 'react'
import { X, ExternalLink, Calendar, Tag } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  category: string
  date: string
  description: string
  image: string
  image2: string
  image3: string
  details: string
}

interface CaseStudiesProps {
  cases: CaseStudy[]
}

export default function CaseStudies({ cases }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <>
      <div className="bg-gray-50 rounded-2xl p-6 card-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-1 h-6 bg-accent mr-3 rounded-full"></span>
          成功案例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-xl overflow-hidden cursor-pointer hover-lift group shadow-sm"
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    {caseItem.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {caseItem.description}
                </p>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{caseItem.date}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-accent transition-colors">
                    <span>查看详情</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCase && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedCase(null)}
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="relative h-64 rounded-t-2xl overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                <div className="w-full flex-shrink-0 h-full">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0 h-full">
                  <img
                    src={selectedCase.image2}
                    alt={selectedCase.title + ' 2'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0 h-full">
                  <img
                    src={selectedCase.image3}
                    alt={selectedCase.title + ' 3'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex((prev) => prev === 0 ? 2 : prev - 1)
                }}
              >
                <span className="text-white text-xl">‹</span>
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex((prev) => prev === 2 ? 0 : prev + 1)
                }}
              >
                <span className="text-white text-xl">›</span>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-6 -mt-16 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {selectedCase.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedCase.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedCase.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedCase.details}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}