import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata, jsonLd, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = createMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationJsonLd)}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}