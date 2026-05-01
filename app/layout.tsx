import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Crypto | Digital Asset Infrastructure for Businesses",
  description:
    "A production-ready marketing website for Atlas Crypto, presenting digital asset infrastructure, secure operational workflows, and integration-ready account environments designed for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-manrope)] antialiased">{children}</body>
    </html>
  );
}
