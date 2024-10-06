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
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
