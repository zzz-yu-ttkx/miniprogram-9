const cardData = [
  {
    id: 0,
    name: "陈云峰",
    title: "高级产品经理 / 企业顾问",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "17706211328",
    email: "17706211328@qq.com",
    address: "张家港市大新镇东路2号",
    avatar: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/fto3/940X940/a98e828afc877e3f9ba86b979af3d986.jpg",
    introduction: "张家港欧思瑞医疗科技有限公司核心业务涵盖工业无菌设备及配套系统的研发、设计、销售，以及灭菌设备、制药设备、臭氧设备的设计制造与技术服务。此外还涉及金属压力容器、软件开发等领域，并具备自营和代理商品及技术的进出口资质。公司拥有42项专利、23个软件著作权及6个注册商标，体现了较强的研发能力。其蒸汽灭菌设备在制药、食品、工业行业有广泛应用，并获得了国际认证。产品出口至北美、欧洲、亚洲等市场，2025年招聘需求同比增长500%，显示业务扩张态势，公司拥有一批精通制药工艺流程和法规要求的设计工程师、精干敬业的售前技术交流团队、完善而专业的售后服务队伍。公司拥有高素质的生产人员和最先进的生产设备，具有一流的应用工艺和先进齐全的检测、化验仪器来确保产品的质量。公司事业领域迅速扩展，在生物、制药、保健品、食品、化工等行业的应用中获得巨大成功。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  },
  {
    id: 1,
    name: "许慧丽",
    title: "销售总监",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "13921960712",
    email: "monica@szosr.com",
    address: "张家港市大新镇东路2号",
    website: "www.cn-osr.cn",
    avatar: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/5VRp/933X933/29b3f9ebf2449628eb1f529e9a079b03.jpg",
    introduction: "张家港欧思瑞医疗科技有限公司核心业务涵盖工业无菌设备及配套系统的研发、设计、销售，以及灭菌设备、制药设备、臭氧设备的设计制造与技术服务。此外还涉及金属压力容器、软件开发等领域，并具备自营和代理商品及技术的进出口资质。公司拥有42项专利、23个软件著作权及6个注册商标，体现了较强的研发能力。其蒸汽灭菌设备在制药、食品、工业行业有广泛应用，并获得了国际认证。产品出口至北美、欧洲、亚洲等市场，2025年招聘需求同比增长500%，显示业务扩张态势，公司拥有一批精通制药工艺流程和法规要求的设计工程师、精干敬业的售前技术交流团队、完善而专业的售后服务队伍。公司拥有高素质的生产人员和最先进的生产设备，具有一流的应用工艺和先进齐全的检测、化验仪器来确保产品的质量。公司事业领域迅速扩展，在生物、制药、保健品、食品、化工等行业的应用中获得巨大成功。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  },
  {
    id: 2,
    name: "李四",
    title: "技术总监",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "13900139000",
    email: "lisi@osrtech.com",
    address: "张家港市大新镇东路2号",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20chinese%20engineer%20portrait%20headshot%20technical%20attire%20clean%20background&image_size=square",
    introduction: "资深工业设备研发专家，带领团队完成多项核心技术攻关，拥有多项专利技术。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  },
  {
    id: 3,
    name: "王五",
    title: "市场经理",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "13700137000",
    email: "wangwu@osrtech.com",
    address: "张家港市大新镇东路2号",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20chinese%20marketing%20manager%20portrait%20headshot%20formal%20attire%20clean%20background&image_size=square",
    introduction: "专注于工业设备市场推广与品牌建设，擅长制定营销策略和执行市场活动，帮助公司在行业内树立良好品牌形象。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  },
  {
    id: 4,
    name: "赵六",
    title: "财务总监",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "13600136000",
    email: "zhaoliu@osrtech.com",
    address: "张家港市大新镇东路2号",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20chinese%20finance%20director%20portrait%20headshot%20formal%20attire%20clean%20background&image_size=square",
    introduction: "资深财务管理专家，负责公司财务规划、资金管理、成本控制和投融资事务，确保公司财务健康稳定发展。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  },
  {
    id: 5,
    name: "孙七",
    title: "生产主管",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "13500135000",
    email: "sunqi@osrtech.com",
    address: "张家港市大新镇东路2号",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20chinese%20production%20manager%20portrait%20headshot%20industrial%20attire%20clean%20background&image_size=square",
    introduction: "负责公司生产流程管理、质量管理和团队管理，确保产品按时交付、质量达标，持续提升生产效率。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  },
  {
    id: 6,
    name: "周八",
    title: "行政主管",
    company: "张家港欧思瑞医疗科技有限公司",
    phone: "13400134000",
    email: "zhouba@osrtech.com",
    address: "张家港市大新镇东路2号",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20chinese%20administrative%20manager%20portrait%20headshot%20formal%20attire%20clean%20background&image_size=square",
    introduction: "负责公司行政管理、人事管理、办公环境维护等工作，为员工创造良好的工作环境，保障公司日常运营顺畅。",
    photos: [
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/puZX/4608X2592/5af7f8cb4a404654b421cfad727b8975.jpg", title: "项目会议" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/csr4/4608X2592/9770326aa570699be9a156750b9b58f4.jpg", title: "成交案例" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/QzGe/4608X2592/c6d7ec26547fb97377b2ac75d5f9f1da.jpg", title: "成交破百" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Y3y1/3648X2736/a71a93f6a1dc597d3b3f09f564144604.jpg", title: "团建活动" },
      { src: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/pvI3/4096X3072/fa34b3e3a8fd5481ee45e677582218fa.jpg", title: "产品展会" },
      { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20business%20partnership%20branding%20collaboration%20logo%20merger%20documents%20professional%20no%20people%20face%20visible&image_size=square", title: "战略合作" }
    ],
    cases: [
      { title: "某大型配液公司数字化转型项目", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/eNnt/1920X1280/c726cc1bfa819b268166771349633249.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/pLvW/2736X3648/d23fb1584e666d0c2f6740abb96f4eab.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Iegn/3648X2736/38e7a3707f0c93d5167aa28249b57076.jpg", description: "本项目为某大型配液公司提供解决方案。通过引入先进的数据分析系统、智能推荐算法项目历时6个月，涉及团队规模50+人，获得客户高度认可。" },
      { title: "配液公司智能系统开发", category: "配液", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/bd0e/4032X3024/4cf8361da044c81d1ca562fd60bde1e7.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Bbzc/3648X2736/df5dc60feed235ef254ee9c328c7e70b.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/Sx55/2736X3648/1bfec1abd911ec962e213ba809233f60.jpg", description: "针对配液公司的风控需求，我们开发了一套智能化系统。现在已经落地。" },
      { title: "制水智能系统", category: "制水", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/t2YV/1080X1440/cfe42068d0f38aed7d0affdaacf9b1e5.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/1dH5/5408X3680/bf6b2d95f777482f59a2127144ced1ad.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/blq3/1888X4096/cfd0a84bd4dee05ac3f830665ad1b5bd.jpg", description: "为某大型制水公司进行智能系统，将传统的生产管理模式全面数字化。实现了生产计划智能排程化，质量追溯管理等功能。项目完成后，生产效率提升20%。" },
      { title: "灭菌柜落地案例", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260701/ph68/1248X832/60a039e4d1a590647da94e856fc3cd5f.jpg", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/n3wg/1300X1210/2e8f345ed41ac5217d7cad5d8e94aea7.png", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260713/m6ZL/1448X1086/745fddae658ffe12a34e2ddb4fbc2ef8.png", description: "本项目为某大型企业建设灭菌柜，实现了无菌车间的自动化管理，提高了生产效率和产品质量。" },
      { title: "为多家大型公司提供代加工", category: "工业", image: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/vQoF/1672X941/e9f2f033f7b3f092f49d600208bdef7e.png", image2: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/YrJX/1638X1280/2d722ed4600f1f57c2861cf311398313.jpg", image3: "https://backup.fukit.cn/autoupload/f/2GGLTVvP7no6-FdeJLap7diO_OyvX7mIgxFBfDMDErs/20260716/GKMW/1920X1280/ca1ce0745c3844deb42cb9558f65d00f.jpg", description: "为多家大型公司提供专业代加工服务，涵盖工业无菌设备及配套系统的生产制造，确保产品质量和交付周期。" },
      { title: "制药行业灭菌解决方案", category: "制药", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20cleanroom%20sterile%20manufacturing%20equipment%20industrial%20machinery%20professional%20photography%20no%20people%20face%20visible&image_size=square", image2: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20sterilization%20equipment%20ETO%20gas%20sterilizer%20professional%20photography%20no%20people%20face%20visible&image_size=square", image3: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=realistic%20pharmaceutical%20quality%20control%20laboratory%20testing%20equipment%20professional%20photography%20no%20people%20face%20visible&image_size=square", description: "为大型制药企业提供全面的灭菌设备和技术支持，包括蒸汽灭菌器等，满足GMP认证要求，确保药品生产质量。" }
    ]
  }
];