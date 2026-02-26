import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./Components/LayoutWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ... existing metadata ...
  title: {
    template: "%s | Jimmypass Travel Agency",
    default: "Jimmypass Travel Agency",
  },
  description: "Educational & Consultancy Services Ltd.",
  keywords: ["Jimmypass Travel Agency", "Travel Agency", "Consultancy Services"],
  authors: [{ name: "Jimmypass Travel Agency" }],
  openGraph: {
    title: "Jimmypass Travel Agency",
    description: "Educational & Consultancy Services Ltd.",
    type: "website",
    locale: "en_US",
    siteName: "Jimmypass Travel Agency",
  },
  twitter: {
    title: "Jimmypass Travel Agency",
    description: "Educational & Consultancy Services Ltd.",
    card: "summary_large_image",
    site: "@jimmypass",
    creator: "@jimmypass",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-1024x1024.png", sizes: "1024x1024", type: "image/png" },
      { url: "/favicon-2048x2048.png", sizes: "2048x2048", type: "image/png" },
      { url: "/favicon-4096x4096.png", sizes: "4096x4096", type: "image/png" },
      { url: "/favicon-8192x8192.png", sizes: "8192x8192", type: "image/png" },
      { url: "/favicon-16384x16384.png", sizes: "16384x16384", type: "image/png" },
      { url: "/favicon-32768x32768.png", sizes: "32768x32768", type: "image/png" },
      { url: "/favicon-65536x65536.png", sizes: "65536x65536", type: "image/png" },
      { url: "/favicon-131072x131072.png", sizes: "131072x131072", type: "image/png" },
      { url: "/favicon-262144x262144.png", sizes: "262144x262144", type: "image/png" },
      { url: "/favicon-524288x524288.png", sizes: "524288x524288", type: "image/png" },
      { url: "/favicon-1048576x1048576.png", sizes: "1048576x1048576", type: "image/png" },
      { url: "/favicon-2097152x2097152.png", sizes: "2097152x2097152", type: "image/png" },
      { url: "/favicon-4194304x4194304.png", sizes: "4194304x4194304", type: "image/png" },
      { url: "/favicon-8388608x8388608.png", sizes: "8388608x8388608", type: "image/png" },
      { url: "/favicon-16777216x16777216.png", sizes: "16777216x16777216", type: "image/png" },
      { url: "/favicon-33554432x33554432.png", sizes: "33554432x33554432", type: "image/png" },
      { url: "/favicon-67108864x67108864.png", sizes: "67108864x67108864", type: "image/png" },
      { url: "/favicon-134217728x134217728.png", sizes: "134217728x134217728", type: "image/png" },
      { url: "/favicon-268435456x268435456.png", sizes: "268435456x268435456", type: "image/png" },
      { url: "/favicon-536870912x536870912.png", sizes: "536870912x536870912", type: "image/png" },
      { url: "/favicon-1073741824x1073741824.png", sizes: "1073741824x1073741824", type: "image/png" },
      { url: "/favicon-2147483648x2147483648.png", sizes: "2147483648x2147483648", type: "image/png" },
      { url: "/favicon-4294967296x4294967296.png", sizes: "4294967296x4294967296", type: "image/png" },
      { url: "/favicon-8589934592x8589934592.png", sizes: "8589934592x8589934592", type: "image/png" },
      { url: "/favicon-17179869184x17179869184.png", sizes: "17179869184x17179869184", type: "image/png" },
      { url: "/favicon-34359738368x34359738368.png", sizes: "34359738368x34359738368", type: "image/png" },
      { url: "/favicon-68719476736x68719476736.png", sizes: "68719476736x68719476736", type: "image/png" },
      { url: "/favicon-137438953472x137438953472.png", sizes: "137438953472x137438953472", type: "image/png" },
      { url: "/favicon-274877906944x274877906944.png", sizes: "274877906944x274877906944", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${font.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
          <SpeedInsights />
        </LayoutWrapper>
      </body>
    </html>
  );
}
