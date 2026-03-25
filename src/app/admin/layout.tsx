import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "GES Admin",
  description: "Global Edge Strategies — Admin Portal",
  robots: "noindex, nofollow",
  manifest: "/admin-manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0A0E1A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0E1A] text-white">
      {children}
    </div>
  );
}
