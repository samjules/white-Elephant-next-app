import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Review Tracker",
  description: "Track and manage your Google reviews effortlessly.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" as string, // ✅ Explicitly cast to string
  keywords: ["Google Reviews", "Review Tracking", "Business Reviews", "SEO"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Google Review Tracker",
    description: "Easily track and manage customer reviews on Google.",
    url: "https://yourwebsite.com",
    siteName: "Google Review Tracker",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={String(metadata.viewport)} /> {/* ✅ Ensure it's a string */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}