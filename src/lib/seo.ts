import type { Metadata } from "next";

const SITE_URL = "https://gesedge.com";
const SITE_NAME = "Global Edge Strategies";
const SITE_DESCRIPTION =
  "We build custom AI-powered business systems. From booking platforms to intelligent product catalogs, we create the technology that runs your business. Operating across the US, China, and UK.";

export function createMetadata(overrides: Partial<Metadata> & { path?: string } = {}): Metadata {
  const { path = "", ...rest } = overrides;
  const url = `${SITE_URL}${path}`;
  const rawTitle = rest.title as string | undefined;
  const title = rawTitle
    ? (rawTitle.includes(SITE_NAME) ? rawTitle : `${rawTitle} | ${SITE_NAME}`)
    : `${SITE_NAME} | Custom AI-Powered Business Systems`;

  return {
    title,
    description: (rest.description as string) || SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: title as string,
      description: (rest.description as string) || SITE_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      ...(rest.openGraph || {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title as string,
      description: (rest.description as string) || SITE_DESCRIPTION,
      ...(rest.twitter || {}),
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...rest,
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: "ryan@gesedge.com",
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Ryan Kearney",
    jobTitle: "Founder & Lead Engineer",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "China" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Full-Stack Development",
    "Cross-Border Business Operations",
    "RAG Systems",
    "Business Automation",
  ],
};

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION };
