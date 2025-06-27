import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "iRealty",
  description:
    "iRealty. Real Estate, Reimagined. Marketplace for buying and selling properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
