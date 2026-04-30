import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Crypto | Crypto Accounts for Businesses",
  description:
    "A premium marketing landing page for Atlas Crypto, presenting institutional crypto account infrastructure today and a coming-soon AI client assistant vision for future engagement workflows.",
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
