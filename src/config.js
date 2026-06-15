const config = {
	//网页元数据
	metaData: {
		title: 'LeoZi的个人主页🎉',
		description: '欢迎来到LeoZi的奇妙世界！',
		keywords: 'LeoZi,LeoZi,个人主页,个人网站',
		icon: "/img/avatar1.jpg"   //网页图标，支持外链
	},

	avatar: "/img/avatar1.jpg", // 头像
	welcometitle: "Hi, I'm LeoZi", // 标题

	// 颜色配置
	color: {
		// 主色调（示例清新蓝）
  primary: "#B2E0FF",  
  // 衍生浅高光
  primaryLight: "#D9F2FF",  
  // 衍生强调色
  primaryDark: "#80BFFF",  

  themecolor: "#D9F2FF", // 替换原主题色
  welcometitlecolor: "#B2E0FF", // 标题色用主色
  // 转盘渐变改用同色系
  turntablecolor1: "#B2E0FF",  
  turntablecolor2: "#80BFFF",  

  // 新增强调色（按钮hover等场景用）
  accentColor: "#FFD700",  
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切',  '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "海洋女孩",
				"preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
				"url": "/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/wzbis666" },
		{ icon: "mdi-email", link: "mailto:leleo886@foxmail.com" },
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
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


	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "赤橙晚风", "preview": "/img/wallpaper/static/赤橙晚风/image-pre.webp", "url": "/img/wallpaper/static/赤橙晚风/image.png" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

  // 12. 项目卡片（补充项目详情，优化交互，提升信息价值）
  projectcards: [
    { 
      go: "🚀 前往", 
      img: "/img/1.png", 
      imgAlt: "个人技术博客", // 新增图片alt文本，提升无障碍
      title: "流光溢彩", 
      subtitle: "故余虽愚，卒获有所闻", // 优化副标题，明确项目定位
      text: "大学时光有一大半都是在颓废中度过，但当涉猎，瞎捣鼓了一点东西。", // 补充项目详情，传递技术栈与功能
      url: "http://47.99.59.248/", 
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
      text: "wordpress+argon主题快速搭建的技术博客系统,用于发表一些感悟心得和技术文章",
      url: "http://47.99.59.248/", 
      fallbackUrl: "https://wenzhibin.top/",
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
      url: "https://wenzhibin.top", 
      fallbackUrl: "https://wenzhibin.top/",
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
      url: "https://wenzhibin.top/", 
      fallbackUrl: "https://wenzhibin.top/",
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
      url: "https://wenzhibin.top", 
      fallbackUrl: "https://wenzhibin.top/",
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
      url: "https://wenzhibin.top", 
      fallbackUrl: "https://wenzhibin.top/",
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
      url: "https://wenzhibin.top", 
      fallbackUrl: "https://wenzhibin.top/",
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
      url: "https://wenzhibin.top", 
      fallbackUrl: "https://wenzhibin.top/",
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
