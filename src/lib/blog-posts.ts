/* ── Blog post content ──────────────────────────────────────────────── */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readingTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-80-percent-of-ai-projects-fail",
    title: "Why 80% of AI Projects Fail (And What the Other 20% Do Differently)",
    excerpt:
      "The problem is rarely the technology. It's starting with the technology instead of the problem. Here's how to build AI systems that actually deliver results.",
    date: "2026-03-24",
    category: "AI Strategy",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format",
    author: "Ryan Kearney",
    readingTime: "8 min read",
    content: `Most AI projects die the same way. A company gets excited about the technology, hires a vendor or spins up an internal team, builds something impressive in a demo environment, and then watches it collect dust in production. The failure rate sits around 80%, and the reasons are remarkably consistent.

Having built AI-powered systems for businesses across the US and China, we have seen this pattern repeat enough to know where the fault lines are. The problem is almost never the model, the framework, or the compute budget. It is the decisions made before anyone writes a line of code.

## Starting with the solution instead of the problem

The most common failure mode is building AI because someone decided the company needs AI. A CEO reads an article. A board member asks about the AI strategy. A competitor launches a chatbot. Suddenly there is a mandate to "implement AI" with no clear definition of what that means for the business.

The 20% that succeed start differently. They start with a specific, measurable business problem. A charter fishing captain losing bookings to scheduling conflicts. A B2B supplier whose international buyers cannot find the right product across three languages. A document processing workflow that forces employees to upload sensitive files to third-party servers.

Each of these problems has a clear before and after. You can measure the improvement. You can define what "working" looks like before you build anything.

## The data problem nobody wants to talk about

The second killer is data readiness. AI systems need clean, structured, accessible data. Most companies do not have this. They have data spread across spreadsheets, legacy databases, email threads, and the institutional knowledge of employees who have been there for fifteen years.

When we built a trilingual product recommendation system for a waterproofing materials supplier, the first weeks were not spent on embeddings or vector databases. They were spent on data. We cataloged products across English, Chinese, and Spanish. We standardized specifications, application types, substrate compatibility, and pricing tiers. We built a structured product database from scattered PDFs and sales sheets.

That data work was not glamorous. But without it, the RAG system would have returned garbage. Vector search over messy data produces messy results, regardless of how sophisticated your embedding model is.

## Building for the demo instead of production

Demo-driven development is the third failure pattern. A proof of concept gets built with clean inputs, controlled scenarios, and a friendly audience. Leadership sees it work and greenlights production deployment. Then reality hits.

Real users type questions with typos. They ask things the system was never designed to handle. They upload documents in formats nobody tested. They use the product on mobile devices at 3G speeds. They find edge cases in the first ten minutes that the development team missed in three months.

The systems we build go through what we call "adversarial testing" before they ship. For the product intelligence system, we had actual B2B buyers test the recommendation engine with their real questions, in their real language, with their real constraints. The guided product finder wizard went through five iterations based on how users actually navigated it versus how we assumed they would.

## Ignoring the humans in the loop

The fourth pattern is underestimating the human side. AI systems do not operate in a vacuum. They sit inside workflows with real people who have existing habits, preferences, and frustrations. If the AI tool makes their job harder, they will find ways to work around it.

When we built an operations platform for a charter business, we did not just ship software and walk away. The captain had been managing bookings through phone calls and text messages for years. The system needed to fit his workflow, not the other way around. That meant tide-integrated scheduling that matched how he actually planned trips. It meant a booking pipeline that mirrored his mental model of inquiry to discussion to deposit to confirmed. It meant an admin dashboard that replaced his notebook without adding complexity.

The technology was sophisticated. 39 API endpoints, NOAA tide data integration, weather-based cancellation predictions. But the design was built around one person and how he works. That is why it stuck.

## What the 20% actually do

The projects that succeed share a few traits. They start with a specific problem and a clear definition of success. They invest in data quality before they invest in models. They test with real users in real conditions before they declare victory. And they design for the humans who will use the system every day.

They also tend to be smaller in scope than the ones that fail. A focused tool that does one thing well beats a platform that promises to transform everything. Build the product finder. Build the booking system. Build the document processor. Ship it, measure it, iterate.

The AI is the engine. The problem definition is the steering wheel. Without both, you are going nowhere useful.`,
  },
  {
    slug: "building-a-rag-system-that-works",
    title: "Building a RAG System That Actually Works",
    excerpt:
      "Vector search alone falls short. Here's how we combine embeddings, BM25 keyword matching, and reciprocal rank fusion to build product catalogs that understand what you're asking.",
    date: "2026-03-26",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format",
    author: "Ryan Kearney",
    readingTime: "10 min read",
    content: `Retrieval-Augmented Generation has become the default architecture for building AI systems that need to answer questions about specific data. The concept is straightforward: instead of relying on what a language model memorized during training, you retrieve relevant documents from your own data and feed them to the model as context. The model generates answers grounded in your actual information instead of hallucinating.

The concept is simple. Making it work well in production is not.

We built a RAG-powered product intelligence system for a B2B waterproofing materials supplier. A full product catalog across English, Chinese, and Spanish. An AI chat interface for technical questions. A guided product finder wizard. And a filterable catalog. Here is what we learned about building RAG systems that deliver useful results.

## Why pure vector search falls short

The standard RAG tutorial goes like this: chunk your documents, generate embeddings, store them in a vector database, and do similarity search when a user asks a question. This works well enough for demos. It breaks down in production for several reasons.

Vector embeddings capture semantic meaning. They are great at understanding that "waterproof membrane" and "moisture barrier" refer to similar concepts. But they are terrible at exact matches. If a user searches for product code "WP-3200" or a specific ASTM standard number, semantic similarity will not help. The embedding for "WP-3200" has no meaningful semantic relationship to the actual product it represents.

This is where most RAG implementations stop working for real business use cases. Users search for specific things. Part numbers, specification values, brand names, technical standards. Pure vector search treats these as semantic concepts when they are really lookup operations.

## Hybrid search: combining the best of both approaches

The solution is hybrid search. We combine two retrieval methods and merge their results.

The first method is vector search using embeddings. We use ChromaDB to store document chunks as vectors. When a query comes in, we generate an embedding and find the most semantically similar chunks. This handles natural language questions like "what product works best for below-grade concrete" or "which membrane can handle ponding water."

The second method is BM25 keyword matching. BM25 is a traditional information retrieval algorithm that scores documents based on term frequency and inverse document frequency. It excels at exact and partial keyword matches. When someone searches for "WP-3200" or "ASTM D6083," BM25 finds the right documents because the terms literally appear in the text.

Neither method alone gives great results. Together, they cover each other's weaknesses.

## Reciprocal rank fusion: merging two ranked lists

Having two separate ranked lists of results is not useful on its own. You need a way to combine them into a single ranked list. We use reciprocal rank fusion (RRF), a technique that merges ranked lists by assigning scores based on position.

The formula is simple. For each document in each ranked list, the RRF score is 1 / (k + rank), where k is a constant (we use 60). If a document appears in both lists, its scores are summed. Documents that rank highly in both vector search and BM25 get boosted to the top. Documents that rank highly in only one method still appear, but lower.

This approach is elegant because it does not require normalizing scores between the two methods. Vector similarity scores and BM25 scores operate on completely different scales. RRF sidesteps that problem entirely by only caring about relative position.

## Chunking strategy matters more than you think

How you split your documents into chunks has an outsized impact on retrieval quality. We tested several approaches before landing on a strategy that works for product data.

The naive approach is fixed-size chunks with overlap. Split every document into 500-token segments with 50 tokens of overlap. This is fast and simple. It also regularly splits product specifications across two chunks, meaning neither chunk has the complete information.

For our product catalog, we use semantic chunking aligned to product boundaries. Each product is its own chunk, containing all specifications, applications, substrates, and pricing information in a single retrievable unit. When a user asks about a specific product or application, they get the complete product record, not a fragment of it.

For longer documents like technical datasheets, we use a hierarchical approach. A summary chunk captures the high-level product description and key specifications. Detail chunks contain the full technical data, installation instructions, and compatibility tables. The summary chunks handle broad queries. The detail chunks handle specific technical questions.

## The language problem

Our system supports English, Chinese, and Spanish. This adds a layer of complexity that most RAG tutorials ignore entirely.

Multilingual embeddings exist, but their quality varies by language pair. English-Chinese similarity scores are less reliable than English-Spanish scores. Keyword matching across languages requires either translation at query time or multilingual indexing.

We took a pragmatic approach. Product data is stored in all three languages with explicit language tags. The system detects the query language and prioritizes same-language matches, but cross-language results are still included with lower weighting. For the BM25 index, we maintain separate indexes per language. For the vector store, we use a multilingual embedding model and accept the slight quality reduction on CJK text.

The guided product finder wizard avoids the language problem entirely by using structured selection instead of free-text search. The user picks application type, substrate, project scale, and budget through dropdowns and radio buttons. The filtering happens on structured data fields, not text search. This is intentional. For the most common use case of finding the right product, structured navigation outperforms free-text search in every language.

## Evaluation: how you know it works

The most overlooked part of building a RAG system is evaluation. How do you know your retrieval is actually returning relevant results? How do you measure whether the generated answers are accurate?

We built an evaluation suite with 248 automated tests covering three categories. Retrieval accuracy tests verify that known queries return the expected products. We maintain a test set of 50 question-answer pairs across all three languages, and we run them against the retrieval pipeline after every change. If retrieval recall drops below our threshold, the deploy fails.

Answer quality tests verify that the generated responses contain correct information. We extract factual claims from generated answers and check them against the source product data. This catches hallucinations where the model invents specifications that do not exist.

Edge case tests cover the queries that break naive implementations. Empty queries, queries in mixed languages, queries with typos, queries about products we do not carry. Each of these has a defined expected behavior.

## Practical advice for building your own

Start with your data, not your model. The quality of your source documents determines the ceiling of your RAG system. Clean, structured, complete data with a mediocre retrieval setup will outperform a state-of-the-art pipeline built on messy data.

Use hybrid search from day one. Pure vector search will look great in your demo and fail on the first real user query that contains a product code or specification number.

Chunk along semantic boundaries. If your data has natural units (products, articles, sections), use those as your chunk boundaries instead of arbitrary token counts.

Build an evaluation suite before you optimize. Without measurement, you are tuning parameters based on vibes.

And test with real users in their real language before you ship. The gap between how developers think users will search and how users actually search is the gap between a useful product and shelf-ware.`,
  },
  {
    slug: "running-a-business-across-us-and-china",
    title: "Running a Business Across the US and China in 2026",
    excerpt:
      "What it actually takes to operate entities in both countries, from WFOE registration to transfer pricing documentation to managing bookkeepers in Chengdu from Hawaii.",
    date: "2026-03-28",
    category: "Cross-Border",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format",
    author: "Ryan Kearney",
    readingTime: "9 min read",
    content: `Operating a business across the United States and China in 2026 involves navigating two legal systems that disagree on almost everything. Different corporate structures, different tax regimes, different data privacy laws, different banking systems, different languages, and fundamentally different assumptions about how business relationships work.

We run Global Edge Strategies as a Wyoming LLC in the US and a wholly foreign-owned enterprise (WFOE) in Chengdu, China. This is a practical account of what that actually looks like day to day, and what we have learned doing it.

## Why a WFOE and why Chengdu

A WFOE (pronounced "woah-fee") is the standard structure for a foreign company operating in China. It is a Chinese legal entity 100% owned by a foreign parent. The alternative is a joint venture with a Chinese partner, but for technology services, a WFOE gives you full control over operations, IP, and profit repatriation.

We chose Chengdu over the obvious choices of Shanghai, Beijing, or Shenzhen for practical reasons. Operating costs are significantly lower. A qualified developer in Chengdu costs 40-60% less than the same developer in Shanghai. Office space, when you need it, is a fraction of the tier-one city price. The local government actively courts foreign tech companies with streamlined registration processes and tax incentives for the Chengdu High-Tech Zone.

The downside is that fewer people in the local business ecosystem speak English, and some international services have slower response times compared to Shanghai. For a services company like ours, where the work is delivered remotely and the team is small, these tradeoffs are worth it.

## The registration process nobody warns you about

Setting up a WFOE takes 3-6 months if everything goes smoothly. The process involves multiple government agencies, each with their own requirements and timelines. You need a registered office address before you can file. You need a Chinese bank account before you can inject capital. You need to inject capital before you can hire employees. Each step depends on the previous one.

The documentation requirements are extensive. Articles of association, feasibility studies, lease agreements, business scope definitions, capital verification reports. Everything needs to be translated, notarized, and apostilled. The business scope is particularly important because it defines exactly what your WFOE is legally allowed to do. Get it wrong and you cannot invoice for certain services.

We used a local registration agent in Chengdu, which is standard practice. They handle the government filings, provide a registered address if you do not have a physical office yet, and navigate the bureaucratic requirements. Budget 15,000 to 30,000 RMB for the registration process itself, plus ongoing annual compliance fees.

## Transfer pricing and intercompany agreements

When you have entities in two countries, every transaction between them is a transfer pricing event. The US entity pays the Chinese entity for development services. The Chinese entity pays the US entity for management fees or IP licensing. Tax authorities in both countries are watching to make sure you are not artificially shifting profits to the lower-tax jurisdiction.

You need documented intercompany service agreements with arm's-length pricing. This means the prices you charge between your own entities should be comparable to what unrelated companies would charge for the same services. We maintain transfer pricing documentation that includes benchmarking studies comparing our intercompany rates to market rates for similar services in the Chengdu market.

This is not optional. China's State Administration of Taxation has been increasingly aggressive about transfer pricing enforcement, especially for technology companies. And the IRS has its own rules under Section 482. Getting this wrong exposes you to penalties in both countries.

## Managing money across borders

Moving money between the US and China is one of the most frustrating parts of cross-border operations. China maintains strict capital controls. You cannot freely move RMB out of the country. Profit repatriation from a WFOE requires tax clearance, audit reports, and approval from the local tax bureau. The process takes weeks and involves significant documentation.

For incoming transfers, the Chinese bank will scrutinize the purpose of every deposit. You need matching invoices and contracts for every transfer. "General operating expenses" is not an acceptable purpose code. Each transfer needs a specific category: service fees, capital injection, expense reimbursement.

We maintain two separate banking relationships. A US bank account in USD for client invoicing and US operations. A Chinese bank account in RMB for local expenses, contractor payments, and employee salaries. Transfers between them go through the intercompany agreement framework with full documentation.

The practical tip nobody mentions: build a relationship with a specific banker at your Chinese bank branch. The branch manager can expedite approvals and flag documentation issues before they become rejections. In Chinese business culture, the personal relationship with your banker matters enormously.

## Bookkeeping across two systems

Chinese accounting standards (CAS) are different from US GAAP. Your Chinese entity needs a local bookkeeper who understands Chinese tax law, fapiao (official invoice) requirements, and monthly tax filing obligations. Your US entity needs a bookkeeper or CPA who understands US tax obligations and foreign entity reporting requirements.

We use a local bookkeeping firm in Chengdu for the WFOE's monthly financials and tax filings. They handle the monthly VAT returns, quarterly corporate income tax estimates, and annual audit. Communication happens in Chinese via WeChat, which is the standard business communication tool in China.

For the US entity, we use a CPA familiar with international operations who handles the annual tax return, FBAR filing (Report of Foreign Bank and Financial Accounts), Form 5471 (Information Return of U.S. Persons With Respect to Certain Foreign Corporations), and the GILTI (Global Intangible Low-Taxed Income) calculation. If you do not know what these are and you own a foreign entity, talk to an international tax CPA immediately. The penalties for non-filing are severe.

## Data and compliance in 2026

China's data privacy landscape has solidified since the Personal Information Protection Law (PIPL) took effect. If your Chinese entity processes personal data of Chinese residents, you have compliance obligations around consent, data localization, cross-border transfer assessments, and breach notification.

For technology companies, this means being deliberate about where data lives. We architect systems with clear data boundaries. Chinese user data stays on Chinese servers. US user data stays on US servers. When cross-border transfer is necessary, we document the legal basis and conduct the required security assessments.

The practical reality is that most small cross-border operations need to keep things simple. Use Chinese cloud providers (Alibaba Cloud, Tencent Cloud) for China-facing services. Use US providers (AWS, Vercel, Railway) for US-facing services. Avoid architectures that require real-time data synchronization across borders unless you are prepared for the compliance overhead.

## What makes it worth the complexity

Running a cross-border operation between the US and China is genuinely difficult. The compliance costs are real. The banking friction is real. The time zone gap between Hawaii and Chengdu (18 hours difference from UTC-10 to UTC+8) makes synchronous communication challenging.

But the advantages are equally real. Access to skilled technical talent at significantly lower cost. Direct presence in the world's second-largest economy. The ability to build multilingual systems with native speakers on both sides. Credibility when selling cross-border services because you actually operate across borders.

For technology services specifically, having a Chinese entity means you can serve Chinese clients directly, invoice in RMB, and operate within the Chinese business ecosystem. You are not an outsider trying to sell into China. You are a local company with international capabilities.

The key is going in with realistic expectations. Budget 6-12 months for setup. Budget for a local registration agent, a local bookkeeper, and an international tax CPA. Build relationships, especially with your banker and your bookkeeper. And document everything, because both tax authorities will ask.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
