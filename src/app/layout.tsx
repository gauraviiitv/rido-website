import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Help from '../components/HelpButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rido Cabs",
  description: "Developed by Gaurav Prakash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
          <div>{children}</div>
          <Help />
      </body>
    </html>
  );
}