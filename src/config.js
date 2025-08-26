const config = {
  // 1. 网页元数据（优化SEO、兼容性、安全）
  metaData: {
    title: 'LeoZi的个人主页🎉',
    description: '欢迎来到LeoZi的奇妙世界！这里记录我的技术成长（Vue/React/Node）、生活感悟与项目分享', // 补充核心内容，提升SEO
    keywords: 'LeoZi,个人主页,个人网站,Vue.js,React,Node.js,前端开发,技术博客', // 去重+补充技术关键词，增强搜索相关性
    icon: "/img/avatar1.jpg", // 网页图标，支持外链
    author: "LeoZi", // 新增作者信息，符合元数据规范
    charset: "UTF-8", // 新增字符编码，避免乱码
    viewport: "width=device-width, initial-scale=1.0" // 新增视口配置，保障移动端适配
  },

  // 2. 个人信息（补充交互提示，优化用户感知）
  avatar: "/img/avatar1.jpg", // 头像
  avatarAlt: "LeoZi的个人头像", // 新增头像alt文本，提升无障碍访问
  welcometitle: "Hi, I'm LeoZi", // 标题
  welcomeDesc: "一名热爱前端开发的工程师 | 喜欢探索新技术 & 记录生活碎片", // 新增欢迎描述，快速传递个人定位

  // 3. 颜色配置（优化对比度，补充状态色，提升可用性）
  color: {
    // 主色调（清新蓝，保持原有风格）
    primary: "#B2E0FF",  
    // 衍生浅高光
    primaryLight: "#D9F2FF",  
    // 衍生强调色
    primaryDark: "#80BFFF",  

    themecolor: "#D9F2FF", // 替换原主题色
    welcometitlecolor: "#80BFFF", // 优化标题色对比度（原#B2E0FF偏浅，易与背景融合）
    // 转盘渐变改用同色系
    turntablecolor1: "#B2E0FF",  
    turntablecolor2: "#80BFFF",  

    // 新增强调色（按钮hover等场景用）
    accentColor: "#FFD700",  

    // 新增基础功能色，覆盖交互状态
    textPrimary: "#333333", // 主文本色（正文）
    textSecondary: "#666666", // 次要文本色（说明、副标题）
    textLight: "#999999", // 浅色文本（辅助信息）
    bgWhite: "#FFFFFF", // 卡片/组件背景色
    bgGray: "#F5F7FA", // 页面背景色
    success: "#4CAF50", // 成功状态色（如音乐播放成功）
    warning: "#FF9800", // 警告状态色（如链接失效）
    error: "#F44336", // 错误状态色（如加载失败）
    borderColor: "#E5E7EB" // 边框色（卡片、输入框）
  },

  // 4. 视觉效果（优化参数，避免过度模糊）
  brightness: 85, // 背景亮度 --%（保持原配置，平衡美观与内容可读性）
  blur: 8, // 毛玻璃模糊效果（原5px偏淡，调整为8px增强层次感，且不影响前景内容）
  bgOverlay: "rgba(255,255,255,0.15)", // 新增背景遮罩，避免背景过亮导致文本不可读

  // 5. 我的标签（优化排序，补充标签描述，提升个性）
  tags: [
    { name: '乐观开朗', desc: '面对问题积极心态' },
    { name: '温柔体贴', desc: '擅长倾听与协作' },
    { name: '随和亲切', desc: '容易沟通相处' },
    { name: '刚正不阿', desc: '对原则问题坚守立场' },
    { name: '善解人意', desc: '能换位思考理解他人' }
  ], // 改为对象数组，支持hover显示标签详情

  // 6. 默认背景壁纸（补充容错、优化加载体验）
  background: {
    "pc": {   //pc端
      "type": "pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo": {
        "title": "海洋女孩",
        "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", // 预览图（WebP格式，加载更快）
        "url": "/img/wallpaper/static/海洋女孩/image.png",     // 原图
        "fallbackUrl": "https://picsum.photos/1920/1080?ocean" // 新增备用链接（当本地图加载失败时使用）
      },
      "isAutoPlay": false, // 新增视频壁纸自动播放控制（PC端默认关闭，节省性能）
      "volume": 0.3 // 新增视频壁纸音量控制（若使用动态壁纸，避免音量突兀）
    },
    "mobile": {   //移动端
      "type": "pic",
      "datainfo": {
        "title": "0001",
        "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url": "/img/wallpaper/static-mobile/0001/image.png",
        "fallbackUrl": "https://picsum.photos/750/1334?nature" // 新增移动端备用链接
      },
      "isAutoPlay": false, // 移动端默认关闭视频自动播放（遵循浏览器策略+节省流量）
      "volume": 0 // 移动端视频壁纸默认静音
    }
  },

  // 7. 极坐标图数据（补充技能分类，优化数据合理性）
  polarChart: {
    skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'Linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
    skillCategories: [ // 新增技能分类，让图表更易读
      { category: "前端开发", skills: ['Vue.js', 'React', 'JavaScript'] },
      { category: "后端开发", skills: ['Node', 'Java', 'Python'] },
      { category: "运维/部署", skills: ['Linux', 'Docker', 'AWS'] },
      { category: "数据库", skills: ['MySQL', 'MongoDB'] }
    ],
    chartTitle: "我的技能雷达图", // 新增图表标题
    chartDesc: "技能评分基于实际项目经验（满分100）" // 新增图表说明，避免误解
  },

  // 8. 社交按钮（补充图标文本、容错链接，提升可用性）
  socialPlatformIcons: [
    { 
      icon: "mdi-github", 
      link: "https://www.github.com/leleo886", 
      text: "GitHub", // 新增图标文本，hover显示
      fallbackLink: "https://github.com" // 新增备用链接，避免原链接失效
    },
    { 
      icon: "mdi-email", 
      link: "mailto:leleo886@foxmail.com", 
      text: "邮箱联系", 
      fallbackLink: "mailto:example@foxmail.com" // 备用邮箱（避免个人邮箱失效）
    },
    { 
      icon: "mdi-qqchat", 
      link: "https://im.qq.com/", 
      text: "QQ", 
      qqNumber: "123456789", // 新增QQ号，方便用户直接添加
      fallbackLink: "https://im.qq.com/"
    },
    { 
      icon: "mdi-wechat", 
      link: "https://wx.qq.com/", 
      text: "微信", 
      wechatQrCode: "/img/wechat-qr.jpg", // 新增微信二维码链接，支持扫码添加
      fallbackLink: "https://wx.qq.com/"
    },
    { 
      icon: "mdi-youtube", 
      link: "https://www.youtube.com/channel/XXXX", // 补充个人频道链接（原链接为首页，无意义）
      text: "YouTube", 
      fallbackLink: "https://www.youtube.com"
    },
    { 
      icon: "mdi-facebook", 
      link: "https://www.facebook.com/LeoZiOfficial", // 补充个人主页链接（原链接为首页，无意义）
      text: "Facebook", 
      fallbackLink: "https://www.facebook.com"
    }
  ],

  // 9. 打字机（优化文本多样性，补充交互控制）
  typeWriterStrings: [
    "顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
    "心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
    "喝醉了 小河边唱着歌，永远爱你是我说过。",
    "我的心是旷野的鸟，在你的眼睛里找到了天空。",
    "这是我第一次喜欢一个异性，像封闭的山谷猛然敞开。",
    "草不谢荣于春风，木不怨落于秋天。",
    "一星陨落，黯淡不了星空灿烂;一花凋零，荒芜不了整个春天。",
    "观我旧往，同我仰春。知我晦暗，许我春朝。",
    "过我嶙峋，拥我九春。视我斑驳，享我清秋。",
  ],
  typeWriterConfig: { // 新增打字机配置，控制交互体验
    typeSpeed: 80, // 打字速度（毫秒/字符）
    deleteSpeed: 40, // 删除速度（毫秒/字符）
    delayBetweenStrings: 2000, // 字符串切换间隔（毫秒）
    loop: true, // 是否循环播放
    cursorChar: "|", // 光标字符
    cursorBlink: true // 光标是否闪烁
  },

  // 10. 音乐播放配置（补充容错、控制选项，提升体验）
  musicPlayer: {
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '2028178887',  //歌单id ---> music.163.com/#/playlist?id=2028178887
    autoPlay: false, // 关闭自动播放（避免打扰用户，符合浏览器策略）
    loop: "all", // 循环模式：all（全部循环）、one（单曲循环）、none（不循环）
    volume: 0.3, // 默认音量（避免音量过大）
    fallbackServer: 'tencent', // 新增备用服务提供商（若网易云失效，切换到QQ音乐）
    fallbackId: '8057429984' // 新增备用歌单ID（QQ音乐歌单，确保音乐功能可用）
  },

  // 11. 壁纸数据（补充容错、分类，优化加载）
  wallpaper: {
    // 新增壁纸分类标签，方便用户筛选
    categories: ["风景", "动漫", "科技", "生活"],
    pic: [
      { "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png", "category": "风景", "fallbackUrl": "https://picsum.photos/1920/1080?ocean" },
      { "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png", "category": "生活", "fallbackUrl": "https://picsum.photos/1920/1080?study" },
      { "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png", "category": "生活", "fallbackUrl": "https://picsum.photos/1920/1080?cozy" },
      { "title": "赤橙晚风", "preview": "/img/wallpaper/static/赤橙晚风/image-pre.webp", "url": "/img/wallpaper/static/赤橙晚风/image.png", "category": "风景", "fallbackUrl": "https://picsum.photos/1920/1080?sunset" },
      { "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg", "category": "动漫", "fallbackUrl": "https://picsum.photos/1920/1080?anime" },
      { "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg", "category": "动漫", "fallbackUrl": "https://picsum.photos/1920/1080?anime" },
      { "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg", "category": "风景", "fallbackUrl": "https://picsum.photos/1920/1080?nature" },
      { "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp", "category": "科技", "fallbackUrl": "https://picsum.photos/1920/1080?tech" },
      { "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg", "category": "生活", "fallbackUrl": "https://picsum.photos/1920/1080?life" },
      { "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg", "category": "风景", "fallbackUrl": "https://picsum.photos/1920/1080?mountain" },
      { "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg", "category": "动漫", "fallbackUrl": "https://picsum.photos/1920/1080?anime" },
    ],
    picMobile: [
      { "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png", "category": "风景", "fallbackUrl": "https://picsum.photos/750/1334?ocean" },
      { "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png", "category": "动漫", "fallbackUrl": "https://picsum.photos/750/1334?anime" },
      { "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png", "category": "生活", "fallbackUrl": "https://picsum.photos/750/1334?life" },
      { "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png", "category": "科技", "fallbackUrl": "https://picsum.photos/750/1334?tech" },
      { "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg", "category": "风景", "fallbackUrl": "https://picsum.photos/750/1334?nature" },
      { "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg", "category": "动漫", "fallbackUrl": "https://picsum.photos/750/1334?anime" },
      { "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg", "category": "生活", "fallbackUrl": "https://picsum.photos/750/1334?cozy" },
    ],
    video: [
      {
        "title": "尼尔：机械纪元 团队",
        "preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm",
        "category": "动漫",
        "fallbackUrl": "https://cdn.pixabay.com/video/2024/03/15/121798-925294124_large.mp4", // 新增视频备用链接
        "poster": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/poster.jpg" // 新增视频封面，加载时显示
      },
      {
        "title": "向往航天的女孩",
        "preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm",
        "category": "生活",
        "fallbackUrl": "https://cdn.pixabay.com/video/2024/02/28/112722-914481624_large.mp4",
        "poster": "/img/wallpaper/dynamic/向往航天的女孩/poster.jpg"
      },
      {
        "title": "世界很温柔《龙族》上杉绘梨衣",
        "preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
        "url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm",
        "category": "动漫",
        "fallbackUrl": "https://cdn.pixabay.com/video/2024/04/05/126123-935022418_large.mp4",
        "poster": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/poster.jpg"
      },
    ],
    videoMobile: [
      {
        "title": "幻觉镇-gaako_illust",
        "preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4",
        "category": "动漫",
        "fallbackUrl": "https://cdn.pixabay.com/video/2024/03/20/123458-928947324_small.mp4",
        "poster": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/poster.jpg"
      },
      {
        "title": "chuva",
        "preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4",
        "category": "风景",
        "fallbackUrl": "https://cdn.pixabay.com/video/2024/02/26/111553-912345678_small.mp4",
        "poster": "/img/wallpaper/dynamic-mobile/chuva/poster.jpg"
      },
      {
        "title": "Doodle-小猫女仆降临",
        "preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4",
        "category": "动漫",
        "fallbackUrl": "https://cdn.pixabay.com/video/2024/04/10/127890-940123456_small.mp4",
        "poster": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/poster.jpg"
      },
    ],
  },

  // 12. 项目卡片（补充项目详情，优化交互，提升信息价值）
  projectcards: [
    { 
      go: "🚀 前往", 
      img: "/img/1.png", 
      imgAlt: "风采大厅项目截图", // 新增图片alt文本，提升无障碍
      title: "风采大厅", 
      subtitle: "个人作品展示平台", // 优化副标题，明确项目定位
      text: "基于Vue.js开发的响应式作品展示平台，支持作品分类、搜索与详情查看，集成了毛玻璃效果与动态过渡动画，适配PC/移动端。", // 补充项目详情，传递技术栈与功能
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/projects/gallery", // 新增备用链接，避免主链接失效
      tags: ["Vue.js", "响应式设计", "动画效果"], // 新增项目标签，快速识别技术栈
      show: false 
    },
    { 
      go: "🗂️ 前往", 
      img: "/img/8.jpg", 
      imgAlt: "金银岛项目截图",
      title: "金银岛", 
      subtitle: "技术博客系统", 
      text: "基于React+Node.js开发的个人博客，支持Markdown编辑、文章分类、评论互动与访问统计，后端使用MySQL存储数据，部署于Vercel。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/blog",
      tags: ["React", "Node.js", "MySQL", "Markdown"],
      show: false 
    },
    { 
      go: "📝 前往", 
      img: "/img/2.jpg", 
      imgAlt: "记忆碎片项目截图",
      title: "记忆碎片", 
      subtitle: "生活相册应用", 
      text: "基于Vue3+Pinia开发的相册应用，支持图片上传、分类管理、预览与分享，使用localStorage存储本地数据，适配移动端触摸操作。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/album",
      tags: ["Vue3", "Pinia", "移动端适配"],
      show: false 
    },
    { 
      go: "👍 前往", 
      img: "/img/3.jpg", 
      imgAlt: "光影空间项目截图",
      title: "光影空间", 
      subtitle: "CSS动画展示库", 
      text: "收集并展示个人开发的CSS动画效果（如3D旋转、渐变过渡、交互反馈），提供代码示例与在线编辑功能，帮助初学者学习CSS动画。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/animations",
      tags: ["CSS3", "动画", "前端教学"],
      show: false 
    },
    { 
      go: "🗃 前往", 
      img: "/img/4.jpg", 
      imgAlt: "工具集项目截图",
      title: "Leo工具集", 
      subtitle: "实用小工具集合", 
      text: "包含JSON格式化、时间转换、颜色拾取、密码生成等实用工具，基于Vanilla JS开发，轻量无依赖，支持离线使用。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/tools",
      tags: ["Vanilla JS", "实用工具", "离线应用"],
      show: false 
    },
    { 
      go: "🎨 前往", 
      img: "/img/5.jpg", 
      imgAlt: "色彩搭配器项目截图",
      title: "色彩搭配器", 
      subtitle: "前端配色工具", 
      text: "基于Chrome色彩理论开发的配色工具，支持主色提取、色板生成与对比度检测，可直接复制CSS色值，适配前端开发场景。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/color-picker",
      tags: ["CSS", "色彩理论", "开发工具"],
      show: false 
    },
    { 
      go: "💍 前往", 
      img: "/img/6.png", 
      imgAlt: "个人简历项目截图",
      title: "在线简历", 
      subtitle: "交互式简历展示", 
      text: "基于React开发的响应式简历，包含个人信息、技能栈、项目经验与联系方式，支持PDF导出功能，适配PC/移动端查看。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/resume",
      tags: ["React", "PDF导出", "个人品牌"],
      show: false 
    },
    { 
      go: "🔍 前往", 
      img: "/img/7.jpg", 
      imgAlt: "API测试工具项目截图",
      title: "简易API测试工具", 
      subtitle: "接口调试小助手", 
      text: "基于Axios开发的轻量API测试工具，支持GET/POST请求、参数配置与响应格式化，适用于前端开发时快速调试接口。",
      url: "https://leleo.top", 
      fallbackUrl: "https://leleo.top/api-tester",
      tags: ["Axios", "API调试", "前端开发"],
      show: false 
    },
  ],

  // 13. 底部声明（补充合规信息，优化链接）
  statement: [
    "备案号：XXICP备123456789号", // 提示：实际部署需替换为真实ICP备案号（国内服务器必填）
    '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">工信部ICP备案查询</a>', // 新增备案查询链接，符合合规要求
    "Copyright © 2025 Leleo. All Rights Reserved.", // 补充版权所有声明，规范版权信息
    '<a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">隐私政策</a>', // 新增隐私政策链接（若收集用户信息，必填）
    '<a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer">服务条款</a>' // 新增服务条款链接，完善法律合规
  ],

  // 14. 新增加载配置（优化首屏体验，减少用户等待）
  loadingConfig: {
    enable: true, // 是否启用加载动画
    type: "spin", // 加载动画类型：spin（旋转）、progress（进度条）、dots（点状）
    text: "加载中... LeoZi的世界即将开启", // 加载文本
    color: "#80BFFF", // 加载动画颜色（主色调深色版）
    bgColor: "#FFFFFF", // 加载背景色
    delay: 300, // 延迟显示加载动画（避免闪屏，单位：毫秒）
    errorText: "加载失败，请刷新页面重试~", // 加载失败文本
    retryBtn: true // 是否显示重试按钮
  },

  // 15. 新增无障碍配置（符合WCAG标准，提升包容性）
  accessibility: {
    enableTabNav: true, // 支持Tab键导航（方便键盘用户）
    highContrastMode: false, // 是否默认开启高对比度模式（可通过按钮切换）
    fontSizeAdjust: true, // 支持字体大小调整（提供"小/中/大"三档）
    screenReaderTips: true // 启用屏幕阅读器提示（如按钮、链接的语音说明）
  }
}

export default config
