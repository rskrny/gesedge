/* ── Central content store ─────────────────────────────────────────── */

export const services = [
  {
    slug: "business-platforms",
    title: "Custom Business Platforms",
    short: "Booking systems, admin dashboards, customer portals, and workflow automation — built to run your operations.",
    description:
      "Most businesses outgrow their tools before they outgrow their market. We build the systems that close that gap: booking platforms with real-time availability, admin dashboards that replace spreadsheet chaos, customer portals that reduce support load, and workflow automation that lets your team focus on work that matters.",
    icon: "layers",
    features: [
      "Booking & scheduling systems with real-time availability",
      "Admin dashboards with analytics and pipeline management",
      "Customer-facing portals and self-service tools",
      "Workflow automation that replaces manual processes",
      "API integrations with your existing tools",
      "Mobile-responsive design, built for the field",
    ],
    proof: "We built a complete operations platform for a charter fishing business — booking pipeline, tide-integrated scheduling, weather-based cancellation predictions, admin dashboard, gallery management, SEO, and analytics. The captain went from juggling phone calls and notebooks to a system that runs his entire season.",
  },
  {
    slug: "ai-tools",
    title: "AI-Powered Tools",
    short: "RAG systems, product recommendation engines, document processing, and intelligent chatbots — AI that does real work.",
    description:
      "80% of AI projects fail to deliver measurable results. We build the 20% that work. Not chatbots that regurgitate your FAQ — intelligent systems that understand your product catalog, process your documents, and give your customers answers that are actually useful.",
    icon: "brain",
    features: [
      "RAG (Retrieval-Augmented Generation) systems for your data",
      "Product recommendation engines with natural language search",
      "Document processing pipelines (PDF, images, OCR)",
      "Multilingual AI tools (English, Chinese, Spanish)",
      "Custom chatbots trained on your business knowledge",
      "AI workflow automation with deterministic execution",
    ],
    proof: "We built a trilingual product recommendation system for a waterproofing materials supplier — 84 products across English, Chinese, and Spanish, with hybrid vector + keyword search, a guided product finder wizard, and an AI chat that answers technical specification questions. Deployed and running in production.",
  },
  {
    slug: "cross-border",
    title: "Cross-Border Operations",
    short: "US-China-UK market entry, multilingual systems, and compliance-aware infrastructure for businesses that operate internationally.",
    description:
      "Operating across borders means navigating different regulations, payment systems, languages, and business cultures — simultaneously. We build the technical infrastructure that makes international operations work: multilingual platforms, cross-border e-commerce systems, and compliance-aware tools. We do this because we live it — with entities in Wyoming, Chengdu, and London.",
    icon: "globe",
    features: [
      "Multilingual platform development (EN/ZH/ES and more)",
      "Cross-border e-commerce infrastructure",
      "US-China market entry technical strategy",
      "International payment and invoicing systems",
      "Compliance-aware system architecture",
      "Localization beyond translation — cultural adaptation",
    ],
    proof: "We operate our own entities across three countries: a Wyoming LLC, a Chinese WFOE in Chengdu, and work with UK-incorporated startups. Our cross-border work includes intercompany service agreements, Chinese bookkeeping integrations, trilingual product catalogs, and AR e-commerce platforms serving international markets.",
  },
] as const;

export const caseStudies = [
  {
    slug: "charter-operations-platform",
    title: "Charter Operations Platform",
    subtitle: "From phone calls to a full-stack booking system",
    industry: "Marine Services",
    services: ["Custom Business Platform", "SEO & Analytics"],
    challenge:
      "A Cape Cod charter fishing captain was managing his entire operation through phone calls, text messages, and a basic website builder. During peak season, he was losing bookings to scheduling conflicts, spending hours on admin instead of the water, and had no visibility into his business performance.",
    solution:
      "We built a complete operations platform from scratch: a public-facing site with trip information, real-time availability calendar, and inquiry forms — backed by an admin dashboard with a full booking pipeline, automated email notifications, gallery management, and business analytics. The system integrates NOAA tide data and weather APIs to provide cancellation probability predictions and optimal trip timing recommendations.",
    results: [
      "39 API endpoints powering the entire operation",
      "Automated booking pipeline: inquiry → discussion → deposit → confirmed",
      "Tide and weather integration for trip planning",
      "Admin dashboard replacing all manual tracking",
      "Full SEO implementation with structured data",
      "Automated health monitoring and maintenance",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "NOAA API", "Resend"],
  },
  {
    slug: "trilingual-product-intelligence",
    title: "Trilingual Product Intelligence",
    subtitle: "84 products, 3 languages, one AI-powered catalog",
    industry: "B2B Construction Materials",
    services: ["AI-Powered Tools", "Cross-Border"],
    challenge:
      "A waterproofing materials supplier needed their B2B buyers — across English, Chinese, and Spanish-speaking markets — to find the right product for their specific application, substrate, and budget. Traditional catalog browsing meant buyers either called a rep or guessed wrong.",
    solution:
      "We built a RAG-powered product intelligence system: an AI chat that answers natural-language questions about 84 waterproofing products, a 5-step guided product finder wizard (application → substrate → scale → budget → recommendation), and a filterable product catalog. The system uses hybrid search combining vector embeddings with BM25 keyword matching and reciprocal rank fusion for high-precision results across all three languages.",
    results: [
      "Hybrid RAG search with vector + keyword fusion",
      "Trilingual support across UI, backend, and documents",
      "5-step guided product recommendation wizard",
      "248+ automated tests ensuring reliability",
      "Deployed on Railway with auto-deploy from GitHub",
      "Full API with structured product data",
    ],
    tech: ["FastAPI", "Python", "ChromaDB", "BM25", "Railway"],
  },
  {
    slug: "ar-ecommerce-platform",
    title: "AR E-Commerce Platform",
    subtitle: "AI meets augmented reality for furniture shopping",
    industry: "E-Commerce / Interior Design",
    services: ["Custom Business Platform", "AI-Powered Tools"],
    challenge:
      "Online furniture shopping has a fundamental confidence problem: customers can't tell if a piece will fit their room, match their style, or look right in their space. Return rates are high and conversion rates are low because the gap between seeing a product photo and imagining it in your home is too wide.",
    solution:
      "As CTO and co-founder (20% equity), we're building an AI design concierge platform: upload a room photo, get AI-powered scene analysis (room type, lighting, spatial mapping), receive curated product recommendations matched to your space, and preview furniture in AR at true scale. The platform bridges mobile and desktop with a PWA architecture, QR-code handoff between devices, and affiliate commerce integration.",
    results: [
      "AI scene parsing: room type, floor planes, lighting analysis",
      "AR viewer for true-to-scale furniture visualization",
      "Affiliate commerce integration (Amazon, Awin, others)",
      "PWA with mobile-first design and desktop bridge",
      "Product-to-room matching using AI curation",
      "GPU infrastructure planning for production ML workloads",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "AR Kit", "AI/ML"],
  },
  {
    slug: "document-processing-toolkit",
    title: "Document Processing Toolkit",
    subtitle: "18 pipelines, AI chat, and zero cloud dependency",
    industry: "Developer Tools / Productivity",
    services: ["AI-Powered Tools"],
    challenge:
      "Document processing is fragmented: one tool for PDF compression, another for image conversion, another for merging, another for OCR. Each requires uploading sensitive files to a third-party server. Businesses dealing with confidential documents need processing power without the privacy risk.",
    solution:
      "We built a comprehensive, privacy-first document processing suite with 18 registered pipelines — all running locally. PDF operations (compress, merge, split, rotate, watermark, protect), image operations (resize, convert, background removal via AI), and an AI chat assistant where you describe what you need in natural language and the system generates and executes deterministic processing plans. Includes a RAG document engine for querying uploaded documents with hybrid BM25 + TF-IDF retrieval.",
    results: [
      "18 document processing pipelines",
      "AI chat: describe tasks → auto-generated execution plans",
      "RAG engine for document Q&A with hybrid retrieval",
      "Privacy-first: everything runs locally, no cloud uploads",
      "Recipe system for chainable multi-step workflows",
      "Packaged as standalone .exe for end users",
    ],
    tech: ["Python", "Flask", "PyPDF2", "OpenCV", "ONNX", "SQLite"],
  },
];

export const stats = [
  { value: "3", label: "Countries" },
  { value: "6+", label: "Production Systems" },
  { value: "100+", label: "API Endpoints Built" },
  { value: "3", label: "Languages Supported" },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "ChromaDB",
  "Railway",
  "Vercel",
  "OpenAI",
];
