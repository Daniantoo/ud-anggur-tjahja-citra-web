import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Headset, CheckCircle2, Truck, FileText, Clock, Box } from 'lucide-react';
import { COMPANY_INFO, createWaLink } from '@/data/products';

export default function HeroSection() {
  const waSalesLink = createWaLink('Halo UD. Anggur Tjahja Citra, saya ingin meminta penawaran harga untuk produk sarung tangan, masker kain, dan kain majun.');

  return (
    <section className="relative w-full bg-surface-low overflow-hidden pb-16 pt-8 lg:pt-14 lg:pb-24 border-b border-surface-container">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Headline & Introduction */}
        <div className="flex flex-col items-start max-w-4xl gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-primary font-body text-xs sm:text-sm font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>Penyedia Kebutuhan Operasional Berkualitas</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.15]">
            Memenuhi Kebutuhan Sarung Tangan, Masker Kain, dan Kain Majun
          </h1>

          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Spesialis suplai sarung tangan, masker kain, dan kain majun untuk kebutuhan operasional anda.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/#kategori-inti"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-white font-body text-sm sm:text-base font-bold shadow-purple-glow hover:bg-primary-container transition-all hover:scale-[1.02]"
            >
              <span>Lihat Produk Unggulan</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={waSalesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-card text-primary font-body text-sm sm:text-base font-bold shadow-sm hover:bg-surface-container transition-all border border-surface-high"
            >
              <Headset className="w-5 h-5 text-primary" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-4 font-body text-xs sm:text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-on-surface">Stok Selalu Tersedia</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest hidden sm:inline-block" />
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-on-surface">Jasa Antar Menggunakan Pick Up</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest hidden sm:inline-block" />
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-on-surface">Transaksi Aman dan Terpercaya</span>
            </div>
          </div>
        </div>

        {/* Hero Banner 2 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {/* Card 1: Anggur Tjahja Citra (2).png */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-950 group flex items-center justify-center border border-surface-container">
            <Image
              src="/Anggur Tjahja Citra (2).png"
              alt=""
              fill
              className="w-full h-full object-cover blur-xl opacity-80 scale-110 pointer-events-none"
            />
            <Image
              src="/Anggur Tjahja Citra (2).png"
              alt="Armada UD Anggur Tjahja Citra"
              fill
              priority
              className="w-full h-full object-contain relative z-10 group-hover:scale-[1.03] transition-transform duration-500 py-1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-20" />
            <div className="absolute top-3.5 right-3.5 bg-black/70 text-white font-body text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/20 z-30">
              Armada UD Anggur Tjahja Citra
            </div>
          </div>

          {/* Card 2: Gudang.png */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-950 group flex items-center justify-center border border-surface-container">
            <Image
              src="/Gudang.png"
              alt=""
              fill
              className="w-full h-full object-cover blur-xl opacity-80 scale-110 pointer-events-none"
            />
            <Image
              src="/Gudang.png"
              alt="Stok Gudang UD Anggur Tjahja Citra"
              fill
              priority
              className="w-full h-full object-contain relative z-10 group-hover:scale-[1.03] transition-transform duration-500 py-1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-20" />
            <div className="absolute top-3.5 right-3.5 bg-black/70 text-white font-body text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/20 z-30">
              Gudang UD. Anggur Tjahja Citra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
