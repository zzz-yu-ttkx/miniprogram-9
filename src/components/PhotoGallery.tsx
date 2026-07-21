import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

interface Photo {
  id: number
  src: string
  title: string
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <>
      <div className="bg-gray-50 rounded-2xl p-6 card-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-1 h-6 bg-accent mr-3 rounded-full"></span>
          认证与资质
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer hover-lift group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-medium">{photo.title}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.title}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white text-lg font-medium">{selectedPhoto.title}</p>
        </div>
      )}
    </>
  )
}