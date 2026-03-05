import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const siteUrl = 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hafis Abdul Rasak | Techno Functional Consultant',
  description:
    'Professional portfolio of Hafis Abdul Rasak, Techno Functional Consultant in Dubai, UAE specializing in Odoo ERP, integrations, and analytics.',
  openGraph: {
    title: 'Hafis Abdul Rasak | Techno Functional Consultant',
    description:
      'Explore projects, experience, and services delivered across ERP transformation, integration, and BI.',
    url: siteUrl,
    siteName: 'Hafis Abdul Rasak Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafis Abdul Rasak | Techno Functional Consultant',
    description:
      'Professional portfolio highlighting ERP/Odoo implementations, integrations, and business analytics expertise.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
