import { Briefcase, Award, Users, TrendingUp } from 'lucide-react'

interface CompanyIntroProps {
  companyName: string
  description: string
  stats: {
    years: number
    clients: number
    projects: number
    awards: number
  }
}

export default function CompanyIntro({ companyName, description, stats }: CompanyIntroProps) {
  const statItems = [
    { icon: Briefcase, label: '从业年限', value: `${stats.years}年` },
    { icon: Users, label: '服务客户', value: `${stats.clients}+` },
    { icon: TrendingUp, label: '完成项目', value: `${stats.projects}+` },
    { icon: Award, label: '荣誉奖项', value: `${stats.awards}+` },
  ]

  return (
    <div className="bg-gray-50 rounded-2xl p-6 card-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="w-1 h-6 bg-accent mr-3 rounded-full"></span>
        公司介绍
      </h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-accent mb-3">{companyName}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((item, index) => (
          <div 
            key={index}
            className="text-center p-4 rounded-xl bg-white hover:bg-gray-100 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
              <item.icon className="w-5 h-5 text-accent" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}