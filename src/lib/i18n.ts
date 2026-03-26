/* ── i18n: English + Simplified Chinese translation system ─────────── */

export type Locale = "en" | "zh";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

/* ── Translation dictionary ──────────────────────────────────────────
   Every user-visible string on the site lives here.
   Keys are namespaced by component/page: nav.work, home.hero.title, etc.
   ──────────────────────────────────────────────────────────────────── */

const translations = {
  /* ── Navigation & Global ─────────────────────────────────── */
  "nav.work": { en: "Work", zh: "作品" },
  "nav.about": { en: "About", zh: "关于" },
  "nav.contact": { en: "Contact", zh: "联系" },
  "nav.blog": { en: "Blog", zh: "博客" },
  "nav.startProject": { en: "Start a Project", zh: "开始项目" },
  "nav.backHome": { en: "Back to home", zh: "返回首页" },

  /* ── Footer ──────────────────────────────────────────────── */
  "footer.tagline": {
    en: "Custom AI-powered business systems engineered from scratch. Operating across the US, China, and UK.",
    zh: "从零打造定制化AI商业系统。业务覆盖美国、中国和英国。",
  },
  "footer.work": { en: "Work", zh: "作品" },
  "footer.caseStudies": { en: "Case Studies", zh: "案例研究" },
  "footer.company": { en: "Company", zh: "公司" },
  "footer.contact": { en: "Contact", zh: "联系方式" },
  "footer.startProject": { en: "Start a Project", zh: "开始项目" },
  "footer.copyright": { en: "Global Edge Strategies LLC", zh: "Global Edge Strategies LLC（环桥策略）" },
  "footer.engineered": { en: "Engineered with precision.", zh: "精工细作。" },

  /* ── Homepage ────────────────────────────────────────────── */
  "home.hero.badge": { en: "Global Edge Strategies", zh: "环桥策略" },
  "home.hero.line1": { en: "Technology", zh: "科技" },
  "home.hero.line2a": { en: "That", zh: "连接" },
  "home.hero.line2b": { en: "Bridges", zh: "全球" },
  "home.hero.line3": { en: "Markets.", zh: "市场。" },
  "home.hero.sub": {
    en: "Custom AI systems, web platforms, and digital tools engineered for businesses operating across the US, China, and beyond.",
    zh: "为跨文化运营的企业量身打造AI系统、Web平台和数字工具，覆盖美国、中国及更广阔的市场。",
  },
  "home.hero.cta1": { en: "View Our Work", zh: "查看我们的作品" },
  "home.hero.cta2": { en: "Start a Project", zh: "开始项目" },
  "home.hero.scroll": { en: "Scroll", zh: "下滑" },

  "home.projects.badge": { en: "Selected Work", zh: "精选作品" },
  "home.projects.title": { en: "Recent work.", zh: "近期作品。" },
  "home.projects.titleMuted": { en: "Built and shipped.", zh: "已构建并交付。" },
  "home.projects.readMore": { en: "Read case study", zh: "查看案例详情" },

  "home.welcome.badge": { en: "What We Build", zh: "我们的服务" },
  "home.welcome.title": { en: "Looking for a website, an AI tool, or something more?", zh: "需要网站、AI工具，还是更多？" },
  "home.welcome.sub": {
    en: "Whether you found us through a client project, a referral, or a search, here's what we build for businesses like yours.",
    zh: "无论您是通过客户项目、推荐还是搜索找到我们，以下是我们为您这样的企业打造的解决方案。",
  },
  "home.welcome.cta": { en: "Tell us what you're solving", zh: "告诉我们您要解决的问题" },

  "home.cap1.label": { en: "01", zh: "01" },
  "home.cap1.title": { en: "Websites & Custom Platforms", zh: "网站及定制平台" },
  "home.cap1.body": {
    en: "Professional websites, booking systems, admin dashboards, and customer portals. We replace scattered tools and spreadsheets with a single system that runs your operation end-to-end.",
    zh: "专业网站、预订系统、管理后台和客户门户。我们用一套完整的系统取代零散的工具和表格，端到端运营您的业务。",
  },
  "home.cap2.label": { en: "02", zh: "02" },
  "home.cap2.title": { en: "AI-Powered Tools", zh: "AI智能工具" },
  "home.cap2.body": {
    en: "RAG systems, product recommendation engines, document processing, and intelligent assistants. AI that solves real business problems for real users.",
    zh: "RAG系统、产品推荐引擎、文档处理和智能助手。为真实用户解决真实业务问题的AI。",
  },
  "home.cap3.label": { en: "03", zh: "03" },
  "home.cap3.title": { en: "Cross-Border Operations", zh: "跨境业务运营" },
  "home.cap3.body": {
    en: "Multilingual platforms and compliance-aware infrastructure for businesses operating between the US, China, and beyond. We run entities in Wyoming, Chengdu, and London.",
    zh: "为在中美之间运营的企业提供多语言平台和合规基础设施。我们在怀俄明、成都和伦敦均设有实体。",
  },

  "home.stats.badge": { en: "Why us", zh: "为什么选择我们" },
  "home.stats.title1": { en: "Built to ship.", zh: "为交付而生。" },
  "home.stats.title2": { en: "Not to pitch.", zh: "不只是说说。" },
  "home.stats.sub": {
    en: "A focused team of engineers and advisors across the US, China, and UK. Your project gets direct attention from the people who build it.",
    zh: "一支横跨美国、中国和英国的专注工程师和顾问团队。您的项目由实际构建它的人直接负责。",
  },

  "home.stats.countriesOperate": { en: "Countries We Operate", zh: "运营国家" },
  "home.stats.onTime": { en: "On-Time Delivery", zh: "按时交付" },
  "home.stats.responseTime": { en: "Response Time", zh: "响应时间" },
  "home.stats.vendorLockIn": { en: "Vendor Lock-In", zh: "供应商锁定" },

  "home.tech.label": { en: "Technologies\nWe Ship With", zh: "我们使用的\n技术栈" },

  "home.cta.badge": { en: "Let's Build", zh: "一起创造" },
  "home.cta.title1": { en: "Ready to build", zh: "准备好打造" },
  "home.cta.title2": { en: "something real?", zh: "真正的产品了吗？" },
  "home.cta.sub": {
    en: "Tell us what you're trying to solve. We'll tell you how we'd build it.",
    zh: "告诉我们您想解决的问题，我们来告诉您怎么实现。",
  },
  "home.cta.cta1": { en: "Get in Touch", zh: "联系我们" },
  "home.cta.cta2": { en: "See What We've Built", zh: "查看我们的作品" },

  /* ── Case Studies Page ───────────────────────────────────── */
  "cases.badge": { en: "Our Work", zh: "我们的作品" },
  "cases.title": { en: "Case", zh: "案例" },
  "cases.titleGrad": { en: "Studies", zh: "研究" },
  "cases.sub": {
    en: "Systems we designed, built, and shipped. From booking platforms to AI tools to developer utilities.",
    zh: "我们设计、开发和交付的系统。从预订平台到AI工具再到开发者工具。",
  },
  "cases.statSystems": { en: "Production systems shipped", zh: "已上线生产系统" },
  "cases.statIndustries": { en: "Industries served", zh: "服务行业" },
  "cases.challenge": { en: "The Challenge", zh: "项目挑战" },
  "cases.solution": { en: "What We Built", zh: "我们的方案" },
  "cases.deliverables": { en: "Key Deliverables", zh: "核心交付成果" },
  "cases.cta.title": { en: "Your project could be", zh: "您的项目可以是" },
  "cases.cta.titleGrad": { en: "next.", zh: "下一个。" },
  "cases.cta.sub": {
    en: "Tell us what you need built. We'll tell you how we'd approach it.",
    zh: "告诉我们您需要构建什么，我们来告诉您我们的方案。",
  },
  "cases.cta.button": { en: "Start a Conversation", zh: "开始对话" },

  /* ── About Page ──────────────────────────────────────────── */
  "about.badge": { en: "About Us", zh: "关于我们" },
  "about.title1": { en: "Built across", zh: "跨越" },
  "about.title2": { en: "three countries.", zh: "三个国家。" },
  "about.sub": {
    en: "Global Edge Strategies is a technical consultancy that builds custom business systems powered by AI. We build the actual platforms, tools, and infrastructure that our clients use every day.",
    zh: "环桥策略是一家技术咨询公司，专注于构建AI驱动的定制商业系统。我们打造客户每天使用的实际平台、工具和基础设施。",
  },
  "about.story.badge": { en: "Our Story", zh: "我们的故事" },
  "about.story.title": { en: "How we", zh: "我们如何" },
  "about.story.titleGrad": { en: "work", zh: "工作" },
  "about.story.p1": {
    en: "Founded by Ryan Kearney, GES operates across three countries: a Wyoming LLC in the United States, a wholly foreign-owned enterprise (WFOE) in Chengdu, China, and operations supporting UK-based clients. This is the daily reality of managing entities, contracts, and compliance across jurisdictions with fundamentally different legal systems, business cultures, and technical ecosystems.",
    zh: "GES由Ryan Kearney创立，业务跨越三个国家：美国怀俄明州的有限责任公司、中国成都的外商独资企业（WFOE），以及服务英国客户的运营团队。这是在法律体系、商业文化和技术生态截然不同的司法管辖区之间管理实体、合同和合规的日常现实。",
  },
  "about.story.p2": {
    en: "Every project starts with a real problem. A charter captain drowning in manual booking management. A B2B supplier whose international buyers can't find the right product. A business that needs document processing without uploading sensitive files to the cloud. We listen, then we build, from database design to deployment.",
    zh: "每个项目都始于一个真实的问题：被手动预订管理淹没的包船船长、国际买家找不到合适产品的B2B供应商、需要在不上传敏感文件到云端的情况下处理文档的企业。我们倾听，然后从数据库设计到部署，全程构建。",
  },
  "about.story.p3": {
    en: "We are a full-stack operation. That means we handle the frontend your customers see, the backend that powers it, the AI that makes it intelligent, the infrastructure that keeps it running, and the SEO that helps people find it. When you work with us, you're working with one team that does all of it.",
    zh: "我们是全栈运营团队。这意味着我们负责客户看到的前端、支撑它的后端、使其智能化的AI、保持其运行的基础设施，以及帮助人们找到它的SEO。与我们合作，就是与一个全面负责的团队合作。",
  },
  "about.philosophy.badge": { en: "Philosophy", zh: "理念" },
  "about.philosophy.title": { en: "What we", zh: "我们的" },
  "about.philosophy.titleGrad": { en: "believe", zh: "信念" },
  "about.philosophy.p1": {
    en: "80% of AI projects fail to deliver measurable results. The reason is simple: most implementations start with the technology instead of the problem. We start with what your business actually needs, then apply the right tools to build it. Sometimes that's a RAG system with hybrid vector search. Sometimes it's a well-designed booking form with tide integration. The technology always serves the outcome.",
    zh: "80%的AI项目未能交付可衡量的成果。原因很简单：大多数实施从技术而非问题出发。我们从您的业务实际需求出发，然后应用合适的工具来构建。有时是带混合向量搜索的RAG系统，有时是集成潮汐数据的精心设计的预订表单。技术始终服务于结果。",
  },
  "about.philosophy.p2": {
    en: "We also believe in shipping. Our case studies are production systems with automated health checks, comprehensive test suites, and real users relying on them daily.",
    zh: "我们还信奉交付。我们的案例研究是具有自动化健康检查、全面测试套件的生产系统，每天有真实用户依赖它们。",
  },
  "about.philosophy.stat1": { en: "100%", zh: "100%" },
  "about.philosophy.stat1sub": { en: "Custom built. Zero templates.", zh: "定制开发，零模板。" },
  "about.philosophy.stat2": { en: "Full-stack", zh: "全栈" },
  "about.philosophy.stat2sub": { en: "Frontend to infrastructure.", zh: "从前端到基础设施。" },
  "about.philosophy.stat3": { en: "Production", zh: "生产环境" },
  "about.philosophy.stat3sub": { en: "Real users. Real transactions.", zh: "真实用户，真实交易。" },

  "about.locations.badge": { en: "Our Presence", zh: "我们的布局" },
  "about.loc.us": { en: "United States", zh: "美国" },
  "about.loc.usEntity": { en: "Global Edge Strategies LLC", zh: "Global Edge Strategies LLC" },
  "about.loc.usCity": { en: "Wyoming", zh: "怀俄明州" },
  "about.loc.cn": { en: "China", zh: "中国" },
  "about.loc.cnEntity": { en: "Chengdu HuanQiao", zh: "成都环桥" },
  "about.loc.cnCity": { en: "Chengdu, Sichuan", zh: "四川省成都市" },
  "about.loc.uk": { en: "United Kingdom", zh: "英国" },
  "about.loc.ukEntity": { en: "UK Operations", zh: "英国运营" },
  "about.loc.ukCity": { en: "London", zh: "伦敦" },

  "about.cta.title": { en: "Let's build something", zh: "让我们一起创造" },
  "about.cta.titleGrad": { en: "together.", zh: "伟大的项目。" },
  "about.cta.sub": {
    en: "We're selective about the projects we take on. If you have a real problem that needs a real system, we want to hear about it.",
    zh: "我们精选合作项目。如果您有一个需要真正系统来解决的实际问题，我们期待与您交流。",
  },
  "about.cta.button": { en: "Get in Touch", zh: "联系我们" },

  /* ── Contact Page ────────────────────────────────────────── */
  "contact.badge": { en: "Contact", zh: "联系我们" },
  "contact.title": { en: "Start a", zh: "开始一个" },
  "contact.titleGrad": { en: "project", zh: "项目" },
  "contact.sub": {
    en: "Tell us what you're trying to build or solve. We'll get back to you within 24 hours with our initial thoughts.",
    zh: "告诉我们您想要构建或解决的问题。我们将在24小时内回复初步方案。",
  },
  "contact.email": { en: "Email", zh: "电子邮件" },
  "contact.responseTime": { en: "Response Time", zh: "响应时间" },
  "contact.responseValue": { en: "Usually within 24 hours", zh: "通常24小时内" },
  "contact.locations": { en: "Locations", zh: "办公地点" },

  /* ── Contact Form ────────────────────────────────────────── */
  "form.name": { en: "Name", zh: "姓名" },
  "form.namePlaceholder": { en: "Your name", zh: "您的姓名" },
  "form.email": { en: "Email", zh: "电子邮件" },
  "form.emailPlaceholder": { en: "you@company.com", zh: "you@company.com" },
  "form.company": { en: "Company", zh: "公司" },
  "form.companyPlaceholder": { en: "Your company (optional)", zh: "您的公司（选填）" },
  "form.service": { en: "What do you need?", zh: "您需要什么服务？" },
  "form.serviceSelect": { en: "Select a service", zh: "选择服务类型" },
  "form.serviceWebsite": { en: "Website or Custom Platform", zh: "网站或定制平台" },
  "form.serviceAI": { en: "AI-Powered Tools", zh: "AI智能工具" },
  "form.serviceCrossBorder": { en: "Cross-Border Operations", zh: "跨境业务运营" },
  "form.serviceOther": { en: "Something else", zh: "其他需求" },
  "form.message": { en: "Tell us about your project", zh: "请描述您的项目" },
  "form.messagePlaceholder": {
    en: "What are you trying to build or solve? The more context, the better.",
    zh: "您想要构建或解决什么？提供越多背景信息越好。",
  },
  "form.submit": { en: "Send Message", zh: "发送消息" },
  "form.successTitle": { en: "Message ready to send", zh: "消息已准备发送" },
  "form.successBody": {
    en: "Your email client should have opened with your message. If it didn't, email us directly at",
    zh: "您的邮件客户端应已打开并填入消息。如果没有，请直接发送邮件至",
  },
  "form.sendAnother": { en: "Send another message", zh: "发送另一条消息" },

  /* ── Blog Page ─────────────────────────────────────────── */
  "blog.backToBlog": { en: "Back to blog", zh: "返回博客" },
  "blog.previous": { en: "Previous", zh: "上一篇" },
  "blog.next": { en: "Next", zh: "下一篇" },
  "blog.ctaTitle": { en: "Have a project in mind?", zh: "有项目想法？" },
  "blog.ctaSub": {
    en: "We build custom AI-powered systems for businesses that need real solutions. If something here resonated, let's talk.",
    zh: "我们为需要真实解决方案的企业构建定制AI系统。如果您有共鸣，聊聊吧。",
  },
  "blog.ctaButton": { en: "Get in Touch", zh: "联系我们" },

  /* ── Case Study Detail Pages ──────────────────────────── */
  "csDetail.backToStudies": { en: "Back to case studies", zh: "返回案例研究" },
  "csDetail.challenge": { en: "The Challenge", zh: "项目挑战" },
  "csDetail.solution": { en: "What We Built", zh: "我们的方案" },
  "csDetail.keyFeatures": { en: "Key Features", zh: "核心功能" },
  "csDetail.results": { en: "Results", zh: "成果" },
  "csDetail.techStack": { en: "Tech Stack", zh: "技术栈" },
  "csDetail.visitSite": { en: "Visit Live Site", zh: "访问网站" },
  "csDetail.viewCode": { en: "View Source", zh: "查看源码" },
  "csDetail.ctaTitle": { en: "Want something like this?", zh: "想要类似的方案？" },
  "csDetail.ctaSub": {
    en: "Every project starts with a conversation about what you need built.",
    zh: "每个项目都始于一次关于您需求的对话。",
  },
  "csDetail.ctaButton": { en: "Start a Project", zh: "开始项目" },

  /* ── 404 Page ────────────────────────────────────────────── */
  "404.title": { en: "Page not found", zh: "页面未找到" },
  "404.sub": {
    en: "The page you're looking for doesn't exist or has been moved.",
    zh: "您访问的页面不存在或已被移动。",
  },
  "404.home": { en: "Back to Home", zh: "返回首页" },
  "404.contact": { en: "Contact Us", zh: "联系我们" },

  /* ── Case Study Content (bilingual fields) ───────────────── */
  "cs.bloodline.title": { en: "Bloodline Charters", zh: "Bloodline Charters（血脉包船）" },
  "cs.bloodline.subtitle": {
    en: "Full-stack booking platform for a Cape Cod charter fishing operation",
    zh: "为科德角包船钓鱼运营商打造的全栈预订平台",
  },
  "cs.bloodline.industry": { en: "Marine Services", zh: "海洋服务" },
  "cs.bloodline.challenge": {
    en: "A Cape Cod charter fishing captain was managing his entire operation through phone calls, text messages, and a basic website builder. During peak season, he was losing bookings to scheduling conflicts, spending hours on admin instead of the water, and had zero visibility into his business performance.",
    zh: "一位科德角包船钓鱼船长通过电话、短信和基础建站工具管理全部运营。在旺季，他因排期冲突丢失订单，花大量时间处理行政事务而非出海，且对业务表现毫无可视性。",
  },
  "cs.bloodline.solution": {
    en: "We built a complete operations platform from scratch: a public-facing site with trip information, real-time availability calendar, and inquiry forms, all backed by an admin dashboard with a full booking pipeline, automated email notifications, gallery management, and business analytics. The system integrates NOAA tide data and weather APIs for cancellation predictions and optimal trip timing.",
    zh: "我们从零构建了完整的运营平台：面向公众的网站包含航程信息、实时可用日历和咨询表单，后端配备完整预订管道的管理后台、自动邮件通知、图库管理和业务分析。系统集成NOAA潮汐数据和天气API，用于取消预测和最佳出航时间规划。",
  },
  "cs.pjcs.title": { en: "PJCS RAG System", zh: "PJCS RAG智能系统" },
  "cs.pjcs.subtitle": {
    en: "Trilingual AI product advisor bridging Chinese manufacturing and Latin American construction",
    zh: "三语AI产品顾问，连接中国制造与拉美建筑行业",
  },
  "cs.pjcs.industry": { en: "B2B Construction Materials", zh: "B2B建筑材料" },
  "cs.pjcs.challenge": {
    en: "A Chinese waterproofing materials manufacturer needed to help Latin American contractors find the right product for their specific application, substrate, and budget. Three languages, no sales rep required.",
    zh: "一家中国防水材料制造商需要帮助拉美承包商根据具体应用场景、基材和预算找到合适的产品。三种语言，无需致电销售代表。",
  },
  "cs.pjcs.solution": {
    en: "We built a RAG-powered product intelligence system: an AI chat that answers natural-language questions about 84 waterproofing products, a 5-step guided product finder (application → substrate → scale → budget → recommendation), and a filterable catalog. The system uses hybrid search combining ChromaDB vector embeddings with BM25 keyword matching and reciprocal rank fusion across all three languages.",
    zh: "我们构建了RAG驱动的产品智能系统：AI聊天可以用自然语言回答关于84种防水产品的问题，5步引导式产品查找器（应用→基材→规模→预算→推荐），以及可筛选的产品目录。系统使用混合搜索，结合ChromaDB向量嵌入、BM25关键词匹配和三语言间的倒数排名融合。",
  },
  "cs.docproc.title": { en: "DocProc PDF Toolkit", zh: "DocProc PDF工具套件" },
  "cs.docproc.subtitle": {
    en: "18-pipeline document processing suite with RAG-powered assistant and 248 automated tests",
    zh: "18条管道文档处理套件，配备RAG智能助手和248个自动化测试",
  },
  "cs.docproc.industry": { en: "Developer Tools", zh: "开发工具" },
  "cs.docproc.challenge": {
    en: "Document processing is fragmented across dozens of tools, each requiring you to upload sensitive files to a third-party server. Businesses handling confidential documents need processing power without the privacy exposure.",
    zh: "文档处理分散在数十个工具中，每个都要求将敏感文件上传到第三方服务器。处理机密文档的企业需要处理能力，但不能牺牲隐私。",
  },
  "cs.docproc.solution": {
    en: "A privacy-first document processing suite with 18 registered pipelines, all running locally. PDF operations (compress, merge, split, rotate, watermark, protect), image operations (resize, convert, AI background removal), and a RAG-powered AI chat where you describe what you need in natural language and the system generates and executes deterministic processing plans.",
    zh: "一套隐私优先的文档处理套件，包含18条注册管道，全部本地运行。PDF操作（压缩、合并、拆分、旋转、水印、加密），图像操作（调整大小、转换、AI背景移除），以及RAG驱动的AI聊天。用自然语言描述需求，系统自动生成并执行确定性处理方案。",
  },

  /* ── Case Study Results (bilingual) ──────────────────────── */
  "cs.bloodline.r1": { en: "Increased traffic and click-through rates within one week of launch", zh: "上线一周内流量和点击率即有提升" },
  "cs.bloodline.r2": { en: "39 API endpoints powering the full operation end-to-end", zh: "39个API端点，端到端驱动全部运营" },
  "cs.bloodline.r3": { en: "Automated booking pipeline: inquiry → deposit → confirmed", zh: "自动化预订管道：咨询→订金→确认" },
  "cs.bloodline.r4": { en: "Tide and weather integration for trip planning", zh: "集成潮汐和天气数据用于航程规划" },
  "cs.bloodline.r5": { en: "Admin dashboard replacing all manual phone/notebook tracking", zh: "管理后台取代所有手动电话/笔记本记录" },
  "cs.bloodline.r6": { en: "Full SEO implementation with structured data markup", zh: "完整SEO实现，包含结构化数据标记" },

  "cs.pjcs.r1": { en: "Trilingual support across UI, backend, and documents (EN/ZH/ES)", zh: "UI、后端和文档全面三语支持（英/中/西）" },
  "cs.pjcs.r2": { en: "Hybrid search: ChromaDB + BM25 + Reciprocal Rank Fusion", zh: "混合搜索：ChromaDB + BM25 + 倒数排名融合" },
  "cs.pjcs.r3": { en: "5-step guided product wizard with smart recommendations", zh: "5步引导式产品向导，智能推荐" },
  "cs.pjcs.r4": { en: "Audience modes: buyer vs. professional installer", zh: "受众模式：买家 vs. 专业安装工" },
  "cs.pjcs.r5": { en: "Graceful degradation when AI is unavailable", zh: "AI不可用时优雅降级" },
  "cs.pjcs.r6": { en: "Deployed on Railway with auto-deploy from GitHub", zh: "部署在Railway上，GitHub自动部署" },

  "cs.docproc.r1": { en: "18 document processing pipelines in a single suite", zh: "单一套件中18条文档处理管道" },
  "cs.docproc.r2": { en: "248 automated tests ensuring reliability across all pipelines", zh: "248个自动化测试确保所有管道可靠性" },
  "cs.docproc.r3": { en: "AI chat: describe tasks, auto-generated execution plans", zh: "AI聊天：描述任务，自动生成执行方案" },
  "cs.docproc.r4": { en: "RAG engine for document Q&A with hybrid BM25 + TF-IDF", zh: "文档问答RAG引擎，混合BM25 + TF-IDF" },
  "cs.docproc.r5": { en: "Privacy-first: everything runs locally, zero cloud uploads", zh: "隐私优先：一切本地运行，零云端上传" },
  "cs.docproc.r6": { en: "Packaged as standalone .exe for non-technical end users", zh: "打包为独立.exe，面向非技术终端用户" },

  /* ── Case Study Detail — Shared Keys ─────────────────────── */
  "csDetail.allWork": { en: "All Work", zh: "所有作品" },
  "csDetail.client": { en: "Client", zh: "客户" },
  "csDetail.services": { en: "Services", zh: "服务" },
  "csDetail.stack": { en: "Stack", zh: "技术栈" },
  "csDetail.nextProject": { en: "Next Project", zh: "下一个项目" },
  "csDetail.startProject": { en: "Start a Project", zh: "开始项目" },
  "csDetail.backToTop": { en: "Back to the top", zh: "回到首个" },
  "csDetail.section01": { en: "01 / Problem", zh: "01 / 问题" },
  "csDetail.section02": { en: "02 / Approach", zh: "02 / 方案" },
  "csDetail.nextBloodline": { en: "PJCS RAG System", zh: "PJCS RAG智能系统" },
  "csDetail.nextPjcs": { en: "DocProc PDF Toolkit", zh: "DocProc PDF工具套件" },
  "csDetail.nextDocproc": { en: "Bloodline Charters", zh: "Bloodline Charters" },

  /* ── Bloodline Charters — Detail Page ──────────────────── */
  "csBloodline.hero.badge": { en: "Marine Services", zh: "海洋服务" },
  "csBloodline.hero.subtitle": {
    en: "Full-stack booking platform and operations dashboard for a Cape Cod charter fishing business. Zero to live in under a week.",
    zh: "为科德角包船钓鱼企业打造的全栈预订平台和运营后台。从零到上线不到一周。",
  },
  "csBloodline.hero.viewSite": { en: "View Live Site", zh: "访问线上网站" },

  "csBloodline.results.metric1Label": { en: "From zero to live production site", zh: "从零到上线生产环境" },
  "csBloodline.results.metric2Label": { en: "API endpoints powering the full operation", zh: "个API端点驱动全部运营" },
  "csBloodline.results.metric3Label": { en: "Increased click-through rates post-launch", zh: "上线后点击率提升" },
  "csBloodline.results.metric4Label": { en: "Admin operations replaced from phone/notebook", zh: "管理操作从电话/笔记本全面替代" },

  "csBloodline.sidebar.location": { en: "Cape Cod, Massachusetts", zh: "马萨诸塞州科德角" },
  "csBloodline.sidebar.service1": { en: "Custom Business Platform", zh: "定制商业平台" },
  "csBloodline.sidebar.service2": { en: "SEO & Analytics", zh: "SEO与数据分析" },
  "csBloodline.sidebar.service3": { en: "API Integrations", zh: "API集成" },

  "csBloodline.problem.title": {
    en: "A captain running a business with a notebook and phone calls",
    zh: "一位用笔记本和电话经营生意的船长",
  },
  "csBloodline.problem.p1": {
    en: "A Cape Cod charter fishing captain was managing his entire operation through phone calls, text messages, and a basic website builder. During peak season, he was losing bookings to scheduling conflicts. Two parties calling about the same date, no way to track who had priority.",
    zh: "一位科德角包船钓鱼船长通过电话、短信和一个基础建站工具管理全部运营。在旺季，他因排期冲突丢失订单。两组客人同时问询同一日期，却没有任何方式追踪谁优先。",
  },
  "csBloodline.problem.p2": {
    en: "He was spending hours on admin instead of on the water: manually tracking inquiries in spreadsheets, sending deposit requests by hand, calling back every person who filled out a contact form. He had zero visibility into his business performance. No idea which months were most profitable, which trips were most popular, or how his website was performing.",
    zh: "他把大量时间花在行政事务而非出海上：在表格里手动追踪咨询、手动发送订金请求、逐一回电给每个填写联系表单的人。他对业务表现毫无可视性。不知道哪个月利润最高、哪种航程最受欢迎，也不了解网站的表现如何。",
  },
  "csBloodline.problem.p3": {
    en: "He needed a complete replacement, not a plugin or a template. He needed something that could run his entire season.",
    zh: "他需要的是一套完整的替代方案，而非插件或模板。他需要一个能运行整个旺季的系统。",
  },

  "csBloodline.approach.title": {
    en: "A full-stack operations platform, built from scratch",
    zh: "从零构建的全栈运营平台",
  },
  "csBloodline.approach.p1": {
    en: "We built two interconnected systems: a public-facing website optimized for search and conversion, and a private admin dashboard that runs the entire operation behind it.",
    zh: "我们构建了两个互联系统：一个针对搜索和转化优化的面向公众的网站，以及一个运行全部后台业务的私有管理后台。",
  },
  "csBloodline.approach.p2": {
    en: "The public site features trip details, real-time availability, photo gallery, and inquiry forms that flow directly into the booking pipeline. The admin dashboard gives the captain a bird\u2019s-eye view of his business: all active inquiries, bookings in progress, confirmed trips, and deposits received.",
    zh: "公众网站包含航程详情、实时可用日历、照片图库和直接汇入预订管道的咨询表单。管理后台为船长提供业务全景：所有活跃咨询、进行中的预订、已确认航程和已收订金。",
  },
  "csBloodline.approach.card1Title": { en: "Booking Pipeline", zh: "预订管道" },
  "csBloodline.approach.card1Body": {
    en: "Inquiry \u2192 Discussion \u2192 Deposit Request \u2192 Confirmed. Every stage tracked, automated email notifications sent at each step.",
    zh: "咨询 \u2192 沟通 \u2192 订金请求 \u2192 确认。每个阶段全程跟踪，每一步自动发送邮件通知。",
  },
  "csBloodline.approach.card2Title": { en: "NOAA API Integration", zh: "NOAA API集成" },
  "csBloodline.approach.card2Body": {
    en: "Real tide data and weather forecasts integrated into the scheduling system. Trip planning recommendations based on actual conditions.",
    zh: "将真实潮汐数据和天气预报集成到排期系统中，基于实际天气条件提供航程规划建议。",
  },
  "csBloodline.approach.card3Title": { en: "Admin Dashboard", zh: "管理后台" },
  "csBloodline.approach.card3Body": {
    en: "Full business visibility: booking pipeline, gallery management, analytics. Everything the captain needs in one place.",
    zh: "完整的业务可视化：预订管道、图库管理、数据分析。船长所需的一切，尽在一处。",
  },
  "csBloodline.approach.card4Title": { en: "SEO Foundation", zh: "SEO基础" },
  "csBloodline.approach.card4Body": {
    en: "Structured data markup, semantic HTML, optimized meta tags, and a sitemap. Built for search from day one.",
    zh: "结构化数据标记、语义化HTML、优化的meta标签和站点地图。从第一天起就为搜索引擎优化而构建。",
  },

  "csBloodline.preview.label": { en: "03 / Live Preview", zh: "03 / 在线预览" },
  "csBloodline.preview.title": { en: "See it in the wild", zh: "查看线上实况" },
  "csBloodline.preview.desc": {
    en: "The site is live and running at",
    zh: "网站已上线运行于",
  },
  "csBloodline.preview.descSuffix": {
    en: ". Below is an embedded preview.",
    zh: "。以下为嵌入式预览。",
  },

  "csBloodline.resultsSection.label": { en: "04 / Results", zh: "04 / 成果" },
  "csBloodline.resultsSection.title": {
    en: "Live in under a week, running the whole season",
    zh: "不到一周上线，支撑整个旺季运营",
  },
  "csBloodline.resultsList.r1": {
    en: "Increased traffic and click-through rates within one week of launch",
    zh: "上线一周内流量和点击率即有提升",
  },
  "csBloodline.resultsList.r2": {
    en: "39 API endpoints powering booking, admin, gallery, analytics, and weather data",
    zh: "39个API端点驱动预订、管理、图库、分析和天气数据",
  },
  "csBloodline.resultsList.r3": {
    en: "Fully automated booking pipeline replacing manual phone tracking",
    zh: "全自动预订管道，取代手动电话跟踪",
  },
  "csBloodline.resultsList.r4": {
    en: "Admin dashboard replacing all phone calls, notebooks, and spreadsheets",
    zh: "管理后台取代所有电话、笔记本和电子表格",
  },
  "csBloodline.resultsList.r5": {
    en: "NOAA tide and weather integration for smart trip scheduling",
    zh: "NOAA潮汐和天气集成，实现智能航程排期",
  },
  "csBloodline.resultsList.r6": {
    en: "Full SEO implementation with structured data and optimized sitemap",
    zh: "完整SEO实现，包含结构化数据和优化的站点地图",
  },

  /* ── PJCS RAG — Detail Page ────────────────────────────── */
  "csPjcs.hero.badge": { en: "B2B Construction Materials / AI Tools", zh: "B2B建筑材料 / AI工具" },
  "csPjcs.hero.subtitle": {
    en: "Trilingual AI product advisor bridging a Chinese manufacturer and Latin American contractors across three languages and zero language barrier.",
    zh: "三语AI产品顾问，连接中国制造商与拉美承包商，跨越三种语言，消除语言壁垒。",
  },
  "csPjcs.hero.demo": { en: "Demo", zh: "演示" },

  "csPjcs.langSupported": { en: "Languages supported:", zh: "支持语言：" },
  "csPjcs.lang.en": { en: "English", zh: "English" },
  "csPjcs.lang.zh": { en: "\u4E2D\u6587", zh: "\u4E2D\u6587" },
  "csPjcs.lang.es": { en: "Espa\u00F1ol", zh: "Espa\u00F1ol" },
  "csPjcs.fullCatalog": { en: "Full catalog indexed", zh: "全目录已索引" },

  "csPjcs.sidebar.clientName": { en: "PJCS Waterproofing", zh: "PJCS防水材料" },
  "csPjcs.sidebar.clientRoute": { en: "China \u2192 Latin America", zh: "中国 \u2192 拉丁美洲" },
  "csPjcs.sidebar.service1": { en: "RAG System Architecture", zh: "RAG系统架构" },
  "csPjcs.sidebar.service2": { en: "Multilingual NLP", zh: "多语言自然语言处理" },
  "csPjcs.sidebar.service3": { en: "Cross-Border Infrastructure", zh: "跨境基础设施" },
  "csPjcs.sidebar.liveDemo": { en: "Live Demo", zh: "在线演示" },

  "csPjcs.problem.title": {
    en: "A Chinese manufacturer, Latin American contractors, and a catalog no one could navigate",
    zh: "一家中国制造商、拉美承包商，以及一本无人能查阅的产品目录",
  },
  "csPjcs.problem.p1": {
    en: "PJCS makes industrial waterproofing materials in China. Their customers are professional contractors across Mexico, Colombia, Peru, and other Latin American markets, many of whom speak only Spanish and have highly specific technical requirements: the right product for a specific substrate, application environment, and budget.",
    zh: "PJCS在中国生产工业防水材料。他们的客户是遍布墨西哥、哥伦比亚、秘鲁等拉美市场的专业承包商，其中许多人只说西班牙语，且有非常具体的技术需求：针对特定基材、应用环境和预算选择合适的产品。",
  },
  "csPjcs.problem.p2": {
    en: "With 84 products across categories ranging from roof coatings to foundation membranes, finding the right product meant calling a rep, digging through a PDF catalog, or guessing. The language barrier between Mandarin-speaking product managers and Spanish-speaking contractors made this even harder.",
    zh: "84种产品横跨屋面涂料到基础防水膜等多个品类，找到合适的产品意味着要打电话给销售代表、翻阅PDF目录或凭猜测。说普通话的产品经理与说西班牙语的承包商之间的语言障碍让这一切更加困难。",
  },
  "csPjcs.problem.p3": {
    en: "They needed a system that could answer \u201CWhich product works for an exposed rooftop in a high-UV environment with a $500 budget?\u201D In Spanish, English, or Chinese. No human in the loop.",
    zh: "他们需要一个系统，能回答\u201C在高紫外线环境的露天屋顶，预算500美元，哪种产品合适？\u201D用西班牙语、英语或中文回答，无需人工介入。",
  },

  "csPjcs.archSection.label": { en: "02 / Architecture", zh: "02 / 系统架构" },
  "csPjcs.archSection.title": {
    en: "Hybrid search + LLM synthesis, built for three languages",
    zh: "混合搜索 + LLM合成，为三种语言而构建",
  },
  "csPjcs.archSection.p1": {
    en: "The core insight: pure vector search misses exact specification matches (e.g., a specific product code or chemical name), while pure keyword search misses semantic intent (\u201Csomething waterproof for basements\u201D). We combined both with Reciprocal Rank Fusion to get the benefits of each.",
    zh: "核心思路：纯向量搜索会遗漏精确规格匹配（如特定产品编码或化学名称），而纯关键词搜索会遗漏语义意图（\u201C适合地下室的防水产品\u201D）。我们通过倒数排名融合将两者结合，兼得其利。",
  },
  "csPjcs.archSection.p2": {
    en: "Beyond the chat interface, we built a 5-step guided product finder wizard: users select their application type, substrate, scale, and budget, and the system narrows to a curated recommendation. Two audience modes (buyer and professional installer) surface different levels of technical detail.",
    zh: "除了聊天界面，我们还构建了5步引导式产品查找向导：用户选择应用类型、基材、规模和预算，系统会缩小范围给出精选推荐。两种受众模式（买家和专业安装工）呈现不同层次的技术细节。",
  },
  "csPjcs.archSection.p3": {
    en: "The system degrades gracefully: if the AI layer is unavailable, the hybrid search results are shown directly. Nothing breaks silently.",
    zh: "系统可优雅降级：如果AI层不可用，直接展示混合搜索结果。不会出现静默故障。",
  },

  "csPjcs.arch.step1Title": { en: "Query received", zh: "接收查询" },
  "csPjcs.arch.step1Body": {
    en: "User submits natural-language question in English, Chinese, or Spanish.",
    zh: "用户以英语、中文或西班牙语提交自然语言问题。",
  },
  "csPjcs.arch.step2Title": { en: "Hybrid retrieval", zh: "混合检索" },
  "csPjcs.arch.step2Body": {
    en: "Query runs in parallel through ChromaDB (vector embeddings) and BM25 (keyword matching).",
    zh: "查询同时通过ChromaDB（向量嵌入）和BM25（关键词匹配）并行运行。",
  },
  "csPjcs.arch.step3Title": { en: "Reciprocal Rank Fusion", zh: "倒数排名融合" },
  "csPjcs.arch.step3Body": {
    en: "RRF merges and re-ranks both result sets for higher-precision candidate selection.",
    zh: "RRF将两组结果合并并重新排名，实现更高精度的候选项筛选。",
  },
  "csPjcs.arch.step4Title": { en: "GPT-4o-mini synthesis", zh: "GPT-4o-mini合成" },
  "csPjcs.arch.step4Body": {
    en: "Top candidates passed to the language model with product specs as grounding context.",
    zh: "将排名靠前的候选项连同产品规格作为依据上下文传递给语言模型。",
  },
  "csPjcs.arch.step5Title": { en: "Response delivered", zh: "返回回答" },
  "csPjcs.arch.step5Body": {
    en: "Answer returned in the user\u2019s language with product names, specs, and application guidance.",
    zh: "以用户的语言返回回答，包含产品名称、规格和应用指导。",
  },

  "csPjcs.resultsSection.label": { en: "03 / Results", zh: "03 / 成果" },
  "csPjcs.resultsSection.title": { en: "What we built", zh: "我们构建了什么" },
  "csPjcs.results.card1Title": { en: "Trilingual coverage", zh: "三语覆盖" },
  "csPjcs.results.card1Body": {
    en: "Full support across English, Chinese (Simplified), and Spanish: UI, AI responses, and product data.",
    zh: "全面支持英语、简体中文和西班牙语，覆盖UI、AI回复和产品数据。",
  },
  "csPjcs.results.card2Title": { en: "Hybrid RAG pipeline", zh: "混合RAG管道" },
  "csPjcs.results.card2Body": {
    en: "ChromaDB vector search + BM25 keyword matching merged via Reciprocal Rank Fusion for higher-precision results.",
    zh: "ChromaDB向量搜索 + BM25关键词匹配通过倒数排名融合，实现更高精度的搜索结果。",
  },
  "csPjcs.results.card3Title": { en: "5-step product wizard", zh: "5步产品向导" },
  "csPjcs.results.card3Body": {
    en: "Guided discovery from application type to final recommendation, with audience mode switching.",
    zh: "从应用类型到最终推荐的引导式发现流程，支持受众模式切换。",
  },
  "csPjcs.results.card4Title": { en: "Graceful degradation", zh: "优雅降级" },
  "csPjcs.results.card4Body": {
    en: "Full functionality even when the AI layer is unavailable. No silent failures, no broken UX.",
    zh: "即使AI层不可用也能保持完整功能。无静默故障，无损坏的用户体验。",
  },
  "csPjcs.results.card5Title": { en: "Auto-deploy pipeline", zh: "自动部署管道" },
  "csPjcs.results.card5Body": {
    en: "Deployed on Railway with continuous deployment from GitHub. Zero-downtime updates.",
    zh: "部署在Railway上，从GitHub持续部署。零停机更新。",
  },
  "csPjcs.results.card6Title": { en: "Full catalog indexed", zh: "全目录已索引" },
  "csPjcs.results.card6Body": {
    en: "Product catalog embedded, chunked, and searchable with spec data and application guidance across all three languages.",
    zh: "产品目录已嵌入、分块并可搜索，包含三种语言的规格数据和应用指导。",
  },

  /* ── DocProc — Detail Page ─────────────────────────────── */
  "csDocproc.hero.badge": { en: "Developer Tools", zh: "开发工具" },
  "csDocproc.hero.subtitle": {
    en: "18-pipeline document processing suite with a RAG-powered AI assistant, 248 automated tests, and zero cloud dependency. Privacy-first by design.",
    zh: "18条管道文档处理套件，配备RAG驱动的AI助手、248个自动化测试，零云端依赖。隐私优先设计。",
  },
  "csDocproc.hero.viewGithub": { en: "View on GitHub", zh: "在GitHub查看" },

  "csDocproc.metrics.pipelines": { en: "Processing pipelines", zh: "条处理管道" },
  "csDocproc.metrics.tests": { en: "Automated tests", zh: "个自动化测试" },
  "csDocproc.metrics.cloud": { en: "Cloud uploads required", zh: "次云端上传" },
  "csDocproc.metrics.exe": { en: "Standalone .exe package", zh: "个独立.exe安装包" },

  "csDocproc.sidebar.typeLabel": { en: "Project Type", zh: "项目类型" },
  "csDocproc.sidebar.typeName": { en: "Open Source Tool", zh: "开源工具" },
  "csDocproc.sidebar.typeCategory": { en: "Developer Tools / Productivity", zh: "开发工具 / 效率工具" },
  "csDocproc.sidebar.service1": { en: "AI-Powered Tools", zh: "AI智能工具" },
  "csDocproc.sidebar.service2": { en: "RAG Architecture", zh: "RAG架构" },
  "csDocproc.sidebar.service3": { en: "Local ML Inference", zh: "本地ML推理" },

  "csDocproc.problem.title": {
    en: "Document processing is fragmented, and it leaks your data",
    zh: "文档处理工具四分五裂，而且会泄露你的数据",
  },
  "csDocproc.problem.p1": {
    en: "Compressing a PDF means uploading it to one tool. Merging PDFs means a different tool. Removing a background from an image means a third tool. Each requires uploading files, often sensitive ones, to a third-party server you don\u2019t control and can\u2019t audit.",
    zh: "压缩PDF要上传到一个工具，合并PDF要用另一个，图片去背景又要第三个。每个工具都要求上传文件（往往是敏感文件）到你无法控制也无法审计的第三方服务器。",
  },
  "csDocproc.problem.p2": {
    en: "Businesses handling contracts, medical records, financial documents, or proprietary engineering drawings can\u2019t afford that exposure. They need processing power without the privacy trade-off.",
    zh: "处理合同、病历、财务文件或专有工程图纸的企业承受不起这种暴露。他们需要处理能力，但不能以牺牲隐私为代价。",
  },
  "csDocproc.problem.p3": {
    en: "Beyond privacy, the fragmentation itself is a productivity problem. Switching between tools, re-uploading files, reconfiguring settings. It adds up. A single coherent suite with a natural language interface saves hours per week.",
    zh: "隐私之外，工具碎片化本身就是效率问题。在工具间切换、重新上传文件、重新配置设置，日积月累消耗大量时间。一套连贯的工具加上自然语言界面，每周能节省数小时。",
  },

  "csDocproc.approachSection.label": { en: "02 / Approach", zh: "02 / 方案" },
  "csDocproc.approachSection.title": {
    en: "18 pipelines, one interface, zero cloud",
    zh: "18条管道，一个界面，零云端",
  },
  "csDocproc.approachSection.p1": {
    en: "We built a unified document processing suite where every operation runs locally. No API keys for processing. No uploads. No account required. Everything executes on the user\u2019s machine, and the results stay there.",
    zh: "我们构建了一套统一的文档处理套件，所有操作均在本地运行。处理无需API密钥，无需上传，无需注册账户。一切在用户本机执行，结果留在本地。",
  },
  "csDocproc.approachSection.p2": {
    en: "The AI chat assistant doesn\u2019t require describing operations in technical terms. A user can say \u201Ccompress this PDF and make it under 2MB without losing too much quality\u201D and the system generates and executes the correct processing plan automatically. The RAG engine answers questions about uploaded documents using hybrid BM25 + TF-IDF retrieval.",
    zh: "AI聊天助手不需要用技术术语描述操作。用户可以说\u201C压缩这个PDF，控制在2MB以内，别损失太多质量\u201D，系统会自动生成并执行正确的处理方案。RAG引擎使用混合BM25 + TF-IDF检索来回答关于已上传文档的问题。",
  },

  "csDocproc.pipeline.cat1": { en: "PDF Operations", zh: "PDF操作" },
  "csDocproc.pipeline.cat1i1": { en: "Compress", zh: "压缩" },
  "csDocproc.pipeline.cat1i2": { en: "Merge", zh: "合并" },
  "csDocproc.pipeline.cat1i3": { en: "Split", zh: "拆分" },
  "csDocproc.pipeline.cat1i4": { en: "Rotate", zh: "旋转" },
  "csDocproc.pipeline.cat1i5": { en: "Watermark", zh: "水印" },
  "csDocproc.pipeline.cat1i6": { en: "Password protect", zh: "密码保护" },
  "csDocproc.pipeline.cat1i7": { en: "Unlock", zh: "解锁" },
  "csDocproc.pipeline.cat2": { en: "Image Operations", zh: "图像操作" },
  "csDocproc.pipeline.cat2i1": { en: "Resize", zh: "调整大小" },
  "csDocproc.pipeline.cat2i2": { en: "Convert format", zh: "格式转换" },
  "csDocproc.pipeline.cat2i3": { en: "AI background removal", zh: "AI背景移除" },
  "csDocproc.pipeline.cat2i4": { en: "Bulk export", zh: "批量导出" },
  "csDocproc.pipeline.cat3": { en: "AI Assistant", zh: "AI助手" },
  "csDocproc.pipeline.cat3i1": { en: "Natural language task description", zh: "自然语言任务描述" },
  "csDocproc.pipeline.cat3i2": { en: "Auto-generated execution plans", zh: "自动生成执行方案" },
  "csDocproc.pipeline.cat3i3": { en: "RAG document Q&A", zh: "RAG文档问答" },
  "csDocproc.pipeline.cat4": { en: "Workflow", zh: "工作流" },
  "csDocproc.pipeline.cat4i1": { en: "Recipe system", zh: "配方系统" },
  "csDocproc.pipeline.cat4i2": { en: "Multi-step chaining", zh: "多步骤链式处理" },
  "csDocproc.pipeline.cat4i3": { en: "Batch processing", zh: "批量处理" },
  "csDocproc.pipeline.cat4i4": { en: "Export as .exe", zh: "导出为.exe" },

  "csDocproc.engSection.label": { en: "03 / Engineering Quality", zh: "03 / 工程质量" },
  "csDocproc.engSection.title": {
    en: "248 tests. Clean architecture. Ships as a single .exe.",
    zh: "248个测试，简洁架构，打包为单个.exe发布。",
  },
  "csDocproc.engSection.p1": {
    en: "The test suite covers every pipeline, the AI chat execution flow, the RAG retrieval engine, the recipe chaining system, and the API layer. 248 automated tests that run before every release.",
    zh: "测试套件覆盖每条管道、AI聊天执行流程、RAG检索引擎、配方链式系统和API层。248个自动化测试在每次发布前运行。",
  },
  "csDocproc.engSection.p2": {
    en: "The recipe system allows users to chain operations: \u201Ccompress this PDF, then merge it with these three others, then add a watermark.\u201D Each step is deterministic and individually tested. The final .exe package bundles the entire suite (Python runtime, all dependencies, ML models) into a single executable that non-technical users can run without installing anything.",
    zh: "配方系统允许用户链式操作：\u201C压缩这个PDF，然后与其他三个合并，再加上水印。\u201D每个步骤都是确定性的并经过单独测试。最终的.exe包将整个套件（Python运行时、所有依赖、ML模型）打包为一个可执行文件，非技术用户无需安装任何东西即可运行。",
  },
  "csDocproc.eng.card1Title": { en: "248 automated tests", zh: "248个自动化测试" },
  "csDocproc.eng.card1Body": {
    en: "Full test coverage across all 18 pipelines, the AI chat layer, and the RAG retrieval engine.",
    zh: "全部18条管道、AI聊天层和RAG检索引擎的完整测试覆盖。",
  },
  "csDocproc.eng.card2Title": { en: "Recipe chaining", zh: "配方链式处理" },
  "csDocproc.eng.card2Body": {
    en: "Multi-step workflows defined as reusable recipes. Chain compress \u2192 merge \u2192 watermark in a single run.",
    zh: "多步骤工作流定义为可复用配方。一次运行即可完成压缩 \u2192 合并 \u2192 水印。",
  },
  "csDocproc.eng.card3Title": { en: "Local ML inference", zh: "本地ML推理" },
  "csDocproc.eng.card3Body": {
    en: "AI background removal and document analysis run via ONNX models locally. No API calls for core operations.",
    zh: "AI背景移除和文档分析通过ONNX模型在本地运行。核心操作无需API调用。",
  },

  "csDocproc.resultsSection.label": { en: "04 / What Was Shipped", zh: "04 / 交付成果" },
  "csDocproc.resultsSection.title": {
    en: "A complete, production-quality document processing suite",
    zh: "一套完整的、生产级文档处理套件",
  },
  "csDocproc.resultsList.r1": {
    en: "18 document processing pipelines covering PDF and image operations",
    zh: "18条文档处理管道，覆盖PDF和图像操作",
  },
  "csDocproc.resultsList.r2": {
    en: "248 automated tests with full coverage across all pipelines and AI layers",
    zh: "248个自动化测试，全面覆盖所有管道和AI层",
  },
  "csDocproc.resultsList.r3": {
    en: "Natural language AI chat: describe what you need, system executes it",
    zh: "自然语言AI聊天：描述你的需求，系统自动执行",
  },
  "csDocproc.resultsList.r4": {
    en: "RAG document Q&A engine with hybrid BM25 + TF-IDF retrieval",
    zh: "文档问答RAG引擎，采用混合BM25 + TF-IDF检索",
  },
  "csDocproc.resultsList.r5": {
    en: "Privacy-first: all processing runs locally, nothing leaves the machine",
    zh: "隐私优先：所有处理在本地运行，数据不出本机",
  },
  "csDocproc.resultsList.r6": {
    en: "Recipe system for composable multi-step processing workflows",
    zh: "配方系统支持可组合的多步骤处理工作流",
  },
  "csDocproc.resultsList.r7": {
    en: "Standalone .exe packaging for non-technical end users",
    zh: "独立.exe打包，面向非技术终端用户",
  },

  /* ── Industry labels ─────────────────────────────────────── */
  "label.marineServices": { en: "Marine Services", zh: "海洋服务" },
  "label.b2bConstruction": { en: "B2B Construction Materials", zh: "B2B建筑材料" },
  "label.devTools": { en: "Developer Tools", zh: "开发工具" },
  "label.live": { en: "Live", zh: "已上线" },
  "label.openSource": { en: "Open Source", zh: "开源" },
} as const;

export type TranslationKey = keyof typeof translations;

/** Get a translated string for the given key and locale */
export function t(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  return entry?.[locale] ?? entry?.en ?? key;
}

/** Get all translations as a lookup function bound to a locale */
export function createT(locale: Locale) {
  return (key: TranslationKey) => t(key, locale);
}
