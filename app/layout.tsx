import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: "Tomi's Portfolio",
  description: "Portfolio Website by Akinwande Tomisin",
  icons:{
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png'} 
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png'} 
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${inter.className} antialiased dark:bg-black dark:text`}
      >
        {children}
      </body>
    </html>
  );
}
