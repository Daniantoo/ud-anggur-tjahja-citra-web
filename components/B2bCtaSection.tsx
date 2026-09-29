'use client';

import React from 'react';
import { MessageCircle, Download, Briefcase, CheckCircle2, Truck, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, createWaLink } from '@/data/products';

export default function B2bCtaSection() {
  const waKamLink = createWaLink('Halo UD. Anggur Tjahja Citra, kami bermaksud mendiskusikan penawaran khusus untuk pengadaan rutin / tender usaha kami.');

  return (
    <section id="kontak" className="w-full py-16 bg-surface">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Purple Gradient Mega Card */}
        <div className="relative w-full rounded-3xl purple-gradient-card p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          {/* Ambient Glowing Geometry Background */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="flex flex-col gap-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-body text-xs sm:text-sm font-bold w-fit border border-white/20">
                <Briefcase className="w-4 h-4" />
                <span>Layanan via WhatsApp</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold leading-snug">
                Butuh Produk Kami Untuk Perusahaan Anda?
              </h2>

              <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed">
                Dapatkan penawaran terbaik dari kami untuk kebutuhan perusahaan Anda
              </p>

              {/* Benefits Checklist */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2 font-body text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span className="font-semibold">Harga Grosir Terbaik</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-300" />
                  <span className="font-semibold">Layanan Jasa Antar</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span className="font-semibold">Stok Selalu Ready</span>
                </div>
              </div>
            </div>

            {/* Right Action Stack */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 min-w-[280px]">
              <a
                href={waKamLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-white text-primary font-body text-sm font-extrabold flex items-center justify-center gap-3 shadow-xl hover:bg-surface-low transition-all text-center hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 text-primary fill-primary/10" />
                <span>Hubungi Kami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
