import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: "Tomi's Portfolio",
  description: "Portfolio Website by Akinwande Tomisin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon-new.png" />
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
