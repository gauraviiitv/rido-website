import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "./globals.css";
import Footer from "../components/Footer";
import Help from '../components/HelpButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rido Cabs",
  description: "Developed by Gaurav Prakash",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
          <div>{children}</div>
          <Help />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}