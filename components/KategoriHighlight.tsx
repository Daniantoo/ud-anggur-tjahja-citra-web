import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, createWaLink } from '@/data/products';

export default function KategoriHighlight() {
  const categories = [
    {
      id: 'sarung-tangan',
      title: 'Sarung Tangan',
      description: 'Sarung tangan kerja berkualitas tinggi. Pilihan lengkap sarung tangan rajut katun, bintik (polkadot PVC), dan berbagai tipe untuk kebutuhan operasional.',
      image: '/Sarung Tangan.png',
      badge: 'Stok Ready',
      badgeColor: 'bg-primary text-white',
      linkText: 'Tanyakan Stok Sarung Tangan',
      waMessage: 'Halo UD. Anggur Tjahja Citra, saya ingin menanyakan stok dan harga untuk Sarung Tangan.',
    },
    {
      id: 'masker-kain',
      title: 'Masker Kain',
      description: 'Masker kain nyaman dan tahan lama untuk kebutuhan perlindungan harian operasional usaha dan lingkungan kerja.',
      image: '/Masker Kain.png',
      badge: 'Nyaman & Awet',
      badgeColor: 'bg-secondary text-white',
      linkText: 'Tanyakan Stok Masker Kain',
      waMessage: 'Halo UD. Anggur Tjahja Citra, saya ingin menanyakan stok dan harga untuk Masker Kain.',
    },
    {
      id: 'kain-majun',
      title: 'Kain Majun',
      description: 'Kain majun & lap pembersih dari bahan katun murni dengan daya serap tinggi untuk mesin dan peralatan industri.',
      image: '/Majun_Kain Lap.png',
      badge: 'Daya Serap Tinggi',
      badgeColor: 'bg-surface-highest text-on-surface font-bold',
      linkText: 'Tanyakan Stok Kain Majun',
      waMessage: 'Halo UD. Anggur Tjahja Citra, saya ingin menanyakan stok dan harga untuk Kain Majun.',
    },
  ];

  return (
    <section id="kategori-inti" className="w-full py-20 bg-surface-low border-y border-surface-container">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
          <span className="font-body text-xs font-bold text-secondary uppercase tracking-widest">
            Katalog Inti Pengadaan
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface">
            Kategori Produk Unggulan
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Tiga lini produk utama pasokan UD. Anggur Tjahja Citra untuk memenuhi kebutuhan operasional usaha Anda.
          </p>
        </div>

        {/* 3 Major Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const waLink = createWaLink(cat.waMessage);
            return (
              <div
                key={cat.id}
                className="group flex flex-col rounded-2xl bg-surface-card border border-surface-container overflow-hidden shadow-sm hover-lift"
              >
                {/* Aspect Ratio 1:1 Image */}
                <div className="relative w-full aspect-square bg-slate-950 overflow-hidden flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt=""
                    fill
                    className="w-full h-full object-cover blur-lg opacity-40 scale-110 pointer-events-none"
                  />
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="w-full h-full object-contain relative z-10 p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full ${cat.badgeColor} font-body text-xs uppercase font-bold tracking-wider shadow-sm`}>
                      {cat.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white font-body text-[10px] font-medium px-2.5 py-1 rounded backdrop-blur-sm border border-white/10 z-20">
                    {cat.title}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-xl font-bold text-on-surface">
                      {cat.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-primary font-body text-sm font-bold group-hover:text-primary-container transition-colors pt-2 border-t border-surface-low"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{cat.linkText}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
