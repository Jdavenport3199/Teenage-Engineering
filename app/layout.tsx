import type { Metadata } from "next";
import "./globals.css";
import { sf_pro } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    default: "OP-1 — teenage engineering",
    template: "%s — teenage engineering",
  },
  description:
    "High quality electronic products for people who love sound and music.",
  openGraph: {
    images: "https://teenage-engineering.vercel.app/opengraph-image.png",
  },
  metadataBase: new URL("https://teenage-engineering.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sf_pro.className} antialiased`}>{children}</body>
    </html>
  );
}
