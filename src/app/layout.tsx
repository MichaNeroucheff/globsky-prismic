import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import {createClient, repositoryName} from "@/prismicio";
import {PrismicPreview} from "@prismicio/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Glucone Prismic Test",
    description: settings.data.meta_description || "Test de Prismic",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
      {children}
      <div className="fixed bg-gradient-to-tl from-gray-50 to-gray-300 z-[-1] inset-0 opacity-50"></div>
      <PrismicPreview repositoryName={repositoryName} />
      </body>
      </html>
  );
}
