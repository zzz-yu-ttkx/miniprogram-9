import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Check, X } from 'lucide-react'

interface ContactInfoProps {
  phone: string
  email: string
  address: string
  wechat: string
}

export default function ContactInfo({ phone, email, address, wechat }: ContactInfoProps) {
  const [copied, setCopied] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleCopyWechat = () => {
    navigator.clipboard.writeText(wechat).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      setShowModal(true)
    })
  }

  const contactItems = [
    { icon: Phone, label: '电话', value: phone, link: `tel:${phone}` },
    { icon: Mail, label: '邮箱', value: email, link: `mailto:${email}` },
    { icon: MapPin, label: '地址', value: address, link: null },
    { icon: copied ? Check : MessageCircle, label: '微信', value: wechat, link: null, onClick: handleCopyWechat, isCopied: copied },
  ]

  return (
    <>
      <div className="bg-gray-50 rounded-2xl p-6 card-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-1 h-6 bg-accent mr-3 rounded-full"></span>
          联系方式
        </h2>
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link || '#'}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault()
                  item.onClick()
                }
              }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition-colors group no-underline hover:no-underline focus:no-underline"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                <item.icon className={`w-5 h-5 ${item.isCopied ? 'text-green-500' : 'text-accent'}`} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-gray-900 font-medium">{item.isCopied ? '已复制' : item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-5">微信号已复制</h3>
            <div className="bg-gray-50 rounded-xl p-4 text-left mb-5">
              <p className="text-gray-600 text-sm mb-2">1、回到微信页"添加朋友"</p>
              <p className="text-gray-600 text-sm mb-2">2、粘贴已复制的微信号并搜索</p>
              <p className="text-gray-600 text-sm">3、找到联系人并添加好友</p>
            </div>
            <button 
              className="w-full py-3 bg-gradient-to-r from-accent to-yellow-400 text-gray-900 font-semibold rounded-xl hover:opacity-90 transition-opacity"
              onClick={() => setShowModal(false)}
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  )
}