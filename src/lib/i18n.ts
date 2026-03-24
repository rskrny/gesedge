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
    en: "Custom AI systems, web platforms, and digital tools engineered for businesses operating between cultures — US, China, and beyond.",
    zh: "为跨文化运营的企业量身打造AI系统、Web平台和数字工具——连接美国、中国及更广阔的市场。",
  },
  "home.hero.cta1": { en: "View Our Work", zh: "查看我们的作品" },
  "home.hero.cta2": { en: "Start a Project", zh: "开始项目" },
  "home.hero.scroll": { en: "Scroll", zh: "下滑" },

  "home.projects.badge": { en: "Selected Work", zh: "精选作品" },
  "home.projects.title": { en: "Three projects.", zh: "三个项目。" },
  "home.projects.titleMuted": { en: "All in production.", zh: "全部上线运行。" },
  "home.projects.readMore": { en: "Read case study", zh: "查看案例详情" },

  "home.welcome.badge": { en: "What We Build", zh: "我们的服务" },
  "home.welcome.title": { en: "Looking for a website, an AI tool, or something more?", zh: "需要网站、AI工具，还是更多？" },
  "home.welcome.sub": {
    en: "Whether you found us through a client project, a referral, or a search — here's what we build for businesses like yours.",
    zh: "无论您是通过客户项目、推荐还是搜索找到我们——以下是我们为您这样的企业打造的解决方案。",
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
    en: "RAG systems, product recommendation engines, document processing, and intelligent assistants. AI that does real work in production — not demos that break.",
    zh: "RAG系统、产品推荐引擎、文档处理和智能助手。在生产环境中真正发挥作用的AI——而非容易崩溃的演示品。",
  },
  "home.cap3.label": { en: "03", zh: "03" },
  "home.cap3.title": { en: "Cross-Border Operations", zh: "跨境业务运营" },
  "home.cap3.body": {
    en: "Multilingual platforms and compliance-aware infrastructure for businesses operating between the US, China, and beyond. We live this — with entities in Wyoming, Chengdu, and London.",
    zh: "为在中美之间运营的企业提供多语言平台和合规基础设施。我们亲身经历——在怀俄明、成都和伦敦均设有实体。",
  },

  "home.stats.badge": { en: "By the numbers", zh: "数据一览" },
  "home.stats.title1": { en: "Small team.", zh: "小团队。" },
  "home.stats.title2": { en: "Real output.", zh: "真成果。" },
  "home.stats.sub": {
    en: "We work with a handful of clients at a time. Your project gets undivided attention from engineers who own the outcome.",
    zh: "我们同时只服务少数客户。您的项目将获得工程师全心全意的关注——我们对结果负责到底。",
  },

  "home.stats.projectsShipped": { en: "Projects Shipped", zh: "已上线项目" },
  "home.stats.languages": { en: "Languages", zh: "支持语言" },
  "home.stats.testsWritten": { en: "Tests Written", zh: "测试用例" },
  "home.stats.countries": { en: "Countries", zh: "运营国家" },

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
    en: "Every project below is in production, handling real users and real transactions. These are systems we designed, built, and shipped.",
    zh: "以下每个项目均已上线，服务真实用户和真实交易。这些是我们设计、开发和交付的系统。",
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
    zh: "三语AI产品顾问——连接中国制造与拉美建筑行业",
  },
  "cs.pjcs.industry": { en: "B2B Construction Materials", zh: "B2B建筑材料" },
  "cs.pjcs.challenge": {
    en: "A Chinese waterproofing materials manufacturer needed to help Latin American contractors find the right product for their specific application, substrate, and budget — across three languages, without calling a rep.",
    zh: "一家中国防水材料制造商需要帮助拉美承包商根据具体应用场景、基材和预算找到合适的产品——跨越三种语言，无需致电销售代表。",
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
    zh: "一套隐私优先的文档处理套件，包含18条注册管道，全部本地运行。PDF操作（压缩、合并、拆分、旋转、水印、加密），图像操作（调整大小、转换、AI背景移除），以及RAG驱动的AI聊天——用自然语言描述需求，系统自动生成并执行确定性处理方案。",
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
