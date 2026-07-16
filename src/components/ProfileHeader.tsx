import { Linkedin, Github, Globe } from 'lucide-react'

interface ProfileHeaderProps {
  name: string
  title: string
  avatar: string
}

export default function ProfileHeader({ name, title, avatar }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center py-8 animate-slide-up">
      <div className="relative mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">VIP</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
      <p className="text-accent text-lg mb-4">{title}</p>
      <div className="flex gap-4">
        <a 
          href="#" 
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent flex items-center justify-center transition-colors"
        >
          <Linkedin className="w-5 h-5 text-gray-600" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent flex items-center justify-center transition-colors"
        >
          <Github className="w-5 h-5 text-gray-600" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent flex items-center justify-center transition-colors"
        >
          <Globe className="w-5 h-5 text-gray-600" />
        </a>
      </div>
    </div>
  )
}