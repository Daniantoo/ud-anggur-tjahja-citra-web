'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import B2bCtaSection from '@/components/B2bCtaSection';
import { ShieldCheck, Filter } from 'lucide-react';

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('kategori') || 'all';

  return (
    <div className="w-full flex flex-col min-h-screen bg-surface">
      {/* Catalog Header Banner */}
      <section className="w-full bg-surface-low border-b border-surface-container py-12 lg:py-16">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-body text-xs font-bold w-fit">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Katalog Resmi</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface">
            Katalog Produk Perlengkapan
          </h1>

          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            Eksplor pasokan sarung tangan, masker kain dan kain majun. Seluruh produk siap diorder dalam jumlah partai besar dengan harga distributor.
          </p>
        </div>
      </section>

      {/* Main Catalog Content Area */}
      <section className="w-full py-12 lg:py-16">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <ProductGrid initialCategory={categoryParam} />
        </div>
      </section>

      {/* B2B CTA Footer Banner */}
      <B2bCtaSection />
    </div>
  );
}

export default function ProdukPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-20 text-center font-body text-sm text-on-surface-variant">
          Memuat Katalog Produk...
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
