import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'UD. Anggur Tjahja Citra - Suplai Sarung Tangan, Masker & Kain Majun',
  description:
    'Distributor utama sarung tangan, masker kain, dan kain majun untuk berbagai kebutuhan.',
  keywords: [
    'sarung tangan kerja',
    'sarung tangan rajut bintik',
    'masker kain',
    'masker kain colored',
    'kain majun katun',
    'kain majun putih',
    'distributor alat keselamatan kerja',
    'UD. Anggur Tjahja Citra',
  ],
  authors: [{ name: 'UD. Anggur Tjahja Citra' }],
  openGraph: {
    title: 'UD. Anggur Tjahja Citra - Suplai Masker Kain, Sarung Tangan, dan Kain Majun',
    description:
      'Penyedia utama masker kain, sarung tangan, dan kain majun untuk pabrik dan manufaktur skala nasional.',
    url: '-',
    siteName: 'UD. Anggur Tjahja Citra',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
