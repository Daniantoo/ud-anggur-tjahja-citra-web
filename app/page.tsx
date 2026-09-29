import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import AboutKeunggulan from '@/components/AboutKeunggulan';
import KategoriHighlight from '@/components/KategoriHighlight';
import ProductGrid from '@/components/ProductGrid';
import MapSection from '@/components/MapSection';
import B2bCtaSection from '@/components/B2bCtaSection';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT & KEUNGGULAN SECTION */}
      <AboutKeunggulan />

      {/* 3. HIGHLIGHT 3 KATEGORI UTAMA (KATALOG INTI PENGADAAN) */}
      <KategoriHighlight />

      {/* 4. GOOGLE MAPS & WAREHOUSE LOCATION SECTION */}
      <MapSection />

      {/* 5. B2B CTA & RFQ SECTION */}
      <B2bCtaSection />
    </div>
  );
}
