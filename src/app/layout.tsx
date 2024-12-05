import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heat Transfer Summary",
  description: "Summary of heat transfer by Adi Haditya N",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}