/* ── Central content store ─────────────────────────────────────────── */

export const services = [
  {
    slug: "business-platforms",
    title: "Custom Business Platforms",
    short: "Booking systems, admin dashboards, customer portals, and workflow automation. Built to run your operations.",
    description:
      "Most businesses outgrow their tools before they outgrow their market. We build the systems that close that gap: booking platforms with real-time availability, admin dashboards that replace spreadsheet chaos, customer portals that reduce support load, and workflow automation that lets your team focus on work that matters.",
    icon: "layers",
    features: [
      "Booking and scheduling systems with real-time availability",
      "Admin dashboards with analytics and pipeline management",
      "Customer-facing portals and self-service tools",
      "Workflow automation that replaces manual processes",
      "API integrations with your existing tools",
      "Mobile-responsive design, built for the field",
    ],
    proof: "We built a complete operations platform for a charter fishing business: booking pipeline, tide-integrated scheduling, weather-based cancellation predictions, admin dashboard, gallery management, SEO, and analytics. The captain went from juggling phone calls and notebooks to a system that runs his entire season.",
  },
  {
    slug: "ai-tools",
    title: "AI-Powered Tools",
    short: "RAG systems, product recommendation engines, document processing, and intelligent chatbots. AI that does real work.",
    description:
      "80% of AI projects fail to deliver measurable results. We build the 20% that work. Intelligent systems that understand your product catalog, process your documents, and give your customers answers that are actually useful.",
    icon: "brain",
    features: [
      "RAG (Retrieval-Augmented Generation) systems for your data",
      "Product recommendation engines with natural language search",
      "Document processing pipelines (PDF, images, OCR)",
      "Multilingual AI tools (English, Chinese, Spanish)",
      "Custom chatbots trained on your business knowledge",
      "AI workflow automation with deterministic execution",
    ],
    proof: "We built a trilingual product recommendation system for a waterproofing materials supplier: 84 products across English, Chinese, and Spanish, with hybrid vector + keyword search, a guided product finder wizard, and an AI chat that answers technical specification questions. Deployed and running in production.",
  },
  {
    slug: "cross-border",
    title: "Cross-Border Operations",
    short: "US-China-UK market entry, multilingual systems, and compliance-aware infrastructure for businesses that operate internationally.",
    description:
      "Operating across borders means navigating different regulations, payment systems, languages, and business cultures, all simultaneously. We build the technical infrastructure that makes international operations work: multilingual platforms, cross-border e-commerce systems, and compliance-aware tools. We do this because we live it, with entities in Wyoming, Chengdu, and London.",
    icon: "globe",
    features: [
      "Multilingual platform development (EN/ZH/ES and more)",
      "Cross-border e-commerce infrastructure",
      "US-China market entry technical strategy",
      "International payment and invoicing systems",
      "Compliance-aware system architecture",
      "Localization beyond translation: cultural adaptation",
    ],
    proof: "We operate our own entities across three countries: a Wyoming LLC, a Chinese WFOE in Chengdu, and work with UK-incorporated startups. Our cross-border work includes intercompany service agreements, Chinese bookkeeping integrations, trilingual product catalogs, and AR e-commerce platforms serving international markets.",
  },
] as const;

export const caseStudies = [
  {
    slug: "bloodline-charters",
    title: "Bloodline Charters",
    subtitle: "Full-stack booking platform for a Cape Cod charter fishing operation",
    industry: "Marine Services",
    services: ["Custom Business Platform", "SEO & Analytics"],
    liveUrl: "https://fishingbloodline.com",
    challenge:
      "A Cape Cod charter fishing captain was managing his entire operation through phone calls, text messages, and a basic website builder. During peak season, he was losing bookings to scheduling conflicts, spending hours on admin instead of the water, and had zero visibility into his business performance.",
    solution:
      "We built a complete operations platform from scratch: a public-facing site with trip information, real-time availability calendar, and inquiry forms, all backed by an admin dashboard with a full booking pipeline, automated email notifications, gallery management, and business analytics. The system integrates NOAA tide data and weather APIs for cancellation predictions and optimal trip timing.",
    results: [
      "Increased traffic and click-through rates within one week of launch",
      "39 API endpoints powering the full operation end-to-end",
      "Automated booking pipeline: inquiry → deposit → confirmed",
      "Tide and weather integration for trip planning",
      "Admin dashboard replacing all manual phone/notebook tracking",
      "Full SEO implementation with structured data markup",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "NOAA API", "Resend"],
  },
  {
    slug: "pjcs-rag",
    title: "PJCS RAG System",
    subtitle: "Trilingual AI product advisor bridging Chinese manufacturing and Latin American construction",
    industry: "B2B Construction Materials",
    services: ["AI-Powered Tools", "Cross-Border"],
    liveUrl: "https://pjcsrag-production.up.railway.app/",
    githubUrl: null,
    challenge:
      "A Chinese waterproofing materials manufacturer needed to help Latin American contractors find the right product for their specific application, substrate, and budget — across three languages, without calling a rep.",
    solution:
      "We built a RAG-powered product intelligence system: an AI chat that answers natural-language questions about 84 waterproofing products, a 5-step guided product finder (application → substrate → scale → budget → recommendation), and a filterable catalog. The system uses hybrid search combining ChromaDB vector embeddings with BM25 keyword matching and reciprocal rank fusion across all three languages.",
    results: [
      "Trilingual support across UI, backend, and documents (EN/ZH/ES)",
      "Hybrid search: ChromaDB + BM25 + Reciprocal Rank Fusion",
      "5-step guided product wizard with smart recommendations",
      "Audience modes: buyer vs. professional installer",
      "Graceful degradation when AI is unavailable",
      "Deployed on Railway with auto-deploy from GitHub",
    ],
    tech: ["Python", "FastAPI", "ChromaDB", "GPT-4o-mini", "Railway"],
  },
  {
    slug: "docproc",
    title: "DocProc PDF Toolkit",
    subtitle: "18-pipeline document processing suite with RAG-powered assistant and 248 automated tests",
    industry: "Developer Tools",
    services: ["AI-Powered Tools"],
    liveUrl: null,
    githubUrl: "https://github.com/rskrny/docproc-pdfcompressor",
    challenge:
      "Document processing is fragmented across dozens of tools, each requiring you to upload sensitive files to a third-party server. Businesses handling confidential documents need processing power without the privacy exposure.",
    solution:
      "A privacy-first document processing suite with 18 registered pipelines, all running locally. PDF operations (compress, merge, split, rotate, watermark, protect), image operations (resize, convert, AI background removal), and a RAG-powered AI chat where you describe what you need in natural language and the system generates and executes deterministic processing plans.",
    results: [
      "18 document processing pipelines in a single suite",
      "248 automated tests ensuring reliability across all pipelines",
      "AI chat: describe tasks, auto-generated execution plans",
      "RAG engine for document Q&A with hybrid BM25 + TF-IDF",
      "Privacy-first: everything runs locally, zero cloud uploads",
      "Packaged as standalone .exe for non-technical end users",
    ],
    tech: ["Python", "Flask", "ChromaDB", "OpenCV", "ONNX", "SQLite"],
  },
];

/* Honest stats — only what we can verify */
export const stats = [
  { value: "3", label: "Projects Shipped" },
  { value: "3", label: "Languages" },
  { value: "248+", label: "Tests Written" },
  { value: "2", label: "Countries" },
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
