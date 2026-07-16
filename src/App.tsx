import ProfileHeader from './components/ProfileHeader'
import ContactInfo from './components/ContactInfo'
import CompanyIntro from './components/CompanyIntro'
import PhotoGallery from './components/PhotoGallery'
import CaseStudies from './components/CaseStudies'

const profileData = {
  name: '陈云峰',
  title: '高级产品经理 / 企业顾问',
  avatar: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/fto3/940X940/a98e828afc877e3f9ba86b979af3d986.jpg',
  phone: '17706211328',
  email: '17706211328@qq.com',
  address: '张家港市大新镇东路2号',
  wechat: '17706211328',
}

const companyData = {
  companyName: '张家港欧思瑞医疗科技有限公司',
  description: '张家港欧思瑞医疗科技有限公司核心业务涵盖医院无菌供应室及配套设备的研发、设计、销售，以及灭菌设备、制药设备、医疗设备、臭氧设备的设计制造与技术服务。此外还涉及金属压力容器、软件开发等领域，并具备自营和代理商品及技术的进出口资质。公司拥有42项专利、23个软件著作权及6个注册商标，体现了较强的研发能力。其蒸汽灭菌设备在医疗、制药、食品行业有广泛应用，并获得了国际认证。产品出口至北美、欧洲、亚洲等市场，2025年招聘需求同比增长500%，显示业务扩张态势。公司曾参与华润三九等企业的采购项目，并拥有A级纳税人和创新型中小企业资质。',
  stats: {
    years: 10,
    clients: 200,
    projects: 500,
    awards: 30,
  },
}

const photos = [
  {
    id: 1,
    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20modern%20office%20meeting%20room%20conference%20table%20with%20documents%20laptops%20coffee%20professional%20no%20people%20face%20visible%20top%20view&image_size=square',
    title: '项目会议',
  },
  {
    id: 2,
    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20contract%20documents%20on%20desk%20pen%20signing%20agreement%20professional%20office%20close%20up%20no%20people%20face%20visible&image_size=square',
    title: '成交案例',
  },
  {
    id: 3,
    src: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260702/co0T/4608X2592/631d415efc4c85821ec2eaf806d9efce.jpg',
    title: '项目现场',
  },
  { 
    id: 4,
    src: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260702/eAH1/1706X1279/efaae8477f6d33c7e452bd72d134d384.jpg',
    title: '团建活展会现场',
  },
  {
    id: 5,
    src: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg',
    title: '产品展会',
  },
  {
    id: 6,
    src: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260702/y0ro/1080X587/3c22a4fce373793fd9f33b514ae4142b.jpg',
    title: '项目落地',
  },
  {
    id: 7,
    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20milestone%20celebration%20confetti%20balloons%20champagne%20on%20office%20desk%20professional%20no%20people%20face%20visible&image_size=square',
    title: '成交破百',
  },
  {
    id: 8,
    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20outdoor%20team%20building%20activity%20sports%20equipment%20picnic%20blanket%20park%20nature%20no%20people%20face%20visible&image_size=square',
    title: '团建活动',
  },
  {
    id: 9,
    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square',
    title: '战略合作',
  },
]

const caseStudies = [
  {
    id: 1,
    title: '某大型配液公司数字化转型项目',
    category: '配液',
    date: '2024年3月',
    description: '为某大型配液公司完成转型，实现效率提升40%。',
    image: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20medical%20liquid%20mixing%20equipment%20pharmaceutical%20manufacturing%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20industrial%20control%20panel%20digital%20monitoring%20system%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。',
  },
  {
    id: 2,
    title: '配液公司智能系统开发',
    category: '配液',
    date: '2024年1月',
    description: '开发智能化系统，有效降低风险损失35%。',
    image: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20smart%20industrial%20automation%20system%20robotic%20arm%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20data%20visualization%20dashboard%20monitoring%20screen%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。',
  },
  {
    id: 3,
    title: '制水智能系统',
    category: '制水',
    date: '2023年11月',
    description: '开发智能化系统，实现生产流程全面数字化。',
    image: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20industrial%20water%20treatment%20plant%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20water%20purification%20system%20filters%20tanks%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。',
  },
  {
    id: 4,
    title: '灭菌柜落地案例',
    category: '医疗',
    date: '2023年9月',
    description: '灭菌柜，推动智慧医疗发展。',
    image: 'https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20medical%20autoclave%20sterilizer%20machine%20hospital%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20hospital%20sterile%20supply%20room%20clean%20organized%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '本项目为某三甲医院建设灭菌柜，实现了无菌供应室的自动化管理，提高了医院的无菌供应效率和患者安全。',
  },
  {
    id: 5,
    title: '医疗设备智能化升级项目',
    category: '医疗',
    date: '2023年7月',
    description: '为多家医院提供医疗设备智能化升级解决方案。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20modern%20medical%20equipment%20machine%20sterilizer%20device%20in%20clean%20hospital%20room%20professional%20industrial%20photography%20no%20people%20face%20visible&image_size=square',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20medical%20device%20remote%20monitoring%20software%20interface%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20hospital%20equipment%20maintenance%20service%20tools%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '为多家三甲医院提供医疗设备智能化升级解决方案，实现设备远程监控、故障预警、性能优化等功能，显著提升医疗服务效率。',
  },
  {
    id: 6,
    title: '制药行业灭菌解决方案',
    category: '制药',
    date: '2023年5月',
    description: '为制药企业提供全面的灭菌设备和技术支持。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器、环氧乙烷灭菌设备等，满足GMP认证要求，确保药品生产质量。',
  },
  {
    id: 7,
    title: '金属压力容器定制项目',
    category: '工业',
    date: '2022年12月',
    description: '为工业企业定制各类金属压力容器产品。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20industrial%20metal%20pressure%20vessel%20manufacturing%20factory%20workshop%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20industrial%20welding%20workshop%20metal%20fabrication%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    image3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20industrial%20quality%20inspection%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square',
    details: '为化工、能源、制药等行业企业定制各类金属压力容器产品，严格按照国家相关标准生产，确保产品安全可靠。',
  },
]

function App() {
  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    size: `${2 + Math.random() * 4}px`,
  }))

  const medicalIcons = [
    { id: 1, icon: 'heart', left: '5%', top: '15%', delay: '0s', scale: 1.5 },
    { id: 2, icon: 'cross', left: '90%', top: '20%', delay: '2s', scale: 1.2 },
    { id: 3, icon: 'pill', left: '10%', top: '60%', delay: '4s', scale: 1.3 },
    { id: 4, icon: 'stethoscope', left: '85%', top: '70%', delay: '1s', scale: 1.4 },
    { id: 5, icon: 'dna', left: '15%', top: '85%', delay: '3s', scale: 1.6 },
    { id: 6, icon: 'microscope', left: '80%', top: '10%', delay: '5s', scale: 1.1 },
    { id: 7, icon: 'syringe', left: '5%', top: '40%', delay: '6s', scale: 1.3 },
    { id: 8, icon: 'shield', left: '92%', top: '50%', delay: '0.5s', scale: 1.2 },
  ]

  const renderMedicalIcon = (iconType: string) => {
    switch (iconType) {
      case 'heart':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        )
      case 'cross':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        )
      case 'pill':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        )
      case 'stethoscope':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M18 16h-2v-1c0-1.66-1.34-3-3-3s-3 1.34-3 3v1H6v-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1zm2 3H4v-2h16v2zm0-5H4v-2h16v2zm-6-7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
        )
      case 'dna':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M19.5 3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-1.5 1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm-13 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm0-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm1.5-1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-7.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1.5 1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm13 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm0-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1.5-1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM18 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
          </svg>
        )
      case 'microscope':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M19 10h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.27 3L3 4.27l6.01 6.01V11c0 1.1.9 2 2 2v5h2v-5c0-1.1.9-2 2-2v-.73l2.9-2.9c.78-.78.78-2.05 0-2.83L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        )
      case 'syringe':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
          </svg>
        )
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.7z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="ecg-bg">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            className="ecg-line"
            d="M0,50 L10,50 L15,30 L20,70 L25,50 L30,50 L35,45 L40,55 L45,50 L50,50 L55,48 L60,52 L65,50 L70,50 L75,47 L80,53 L85,50 L90,50 L95,49 L100,51"
            strokeDasharray="100"
          />
        </svg>
      </div>
      <div className="medical-bg">
        {medicalIcons.map((item) => (
          <div
            key={item.id}
            className="medical-icon"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              width: `${40 * item.scale}px`,
              height: `${40 * item.scale}px`,
            }}
          >
            {renderMedicalIcon(item.icon)}
          </div>
        ))}
      </div>
      <div className="dots-bg">
        {dots.map((dot) => (
          <span
            key={dot.id}
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden card-shadow border border-gray-100">
          <ProfileHeader 
            name={profileData.name} 
            title={profileData.title} 
            avatar={profileData.avatar} 
          />
          
          <div className="px-6 pb-8 space-y-6">
            <ContactInfo 
              phone={profileData.phone}
              email={profileData.email}
              address={profileData.address}
              wechat={profileData.wechat}
            />
            
            <CompanyIntro 
              companyName={companyData.companyName}
              description={companyData.description}
              stats={companyData.stats}
            />
            
            <PhotoGallery photos={photos} />
            
            <CaseStudies cases={caseStudies} />
          </div>
        </div>
        
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2026 张家港欧思瑞医疗科技有限公司 · 电子名片</p>
        </footer>
      </div>
    </div>
  )
}

export default App 