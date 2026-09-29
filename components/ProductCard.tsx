'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Check, Package, Shield } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryBadgeStyles = {
    'sarung-tangan': 'bg-primary-fixed text-primary',
    masker: 'bg-secondary-fixed text-secondary',
    'kain-majun': 'bg-surface-highest text-on-surface',
  };

  return (
    <div className="group flex flex-col rounded-2xl bg-surface-card border border-surface-container shadow-sm hover-lift overflow-hidden">
      {/* 1:1 Aspect Ratio Image Container */}
      <div className="relative w-full aspect-square bg-surface-container overflow-hidden">
        <Image
          src={product.gambarUrl}
          alt={product.nama}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category Tag Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-md font-body text-[11px] font-extrabold uppercase tracking-wider shadow-sm ${
              categoryBadgeStyles[product.kategori] || 'bg-surface-high text-primary'
            }`}
          >
            {product.kategoriLabel}
          </span>
        </div>

        {/* Bestseller Tag */}
        {product.bestseller && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-md bg-primary text-white font-body text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              Bestseller
            </span>
          </div>
        )}

        {/* 1:1 Ratio Label */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white font-body text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-sm">
          1:1 Rasio
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="font-display text-lg font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">
            {product.nama}
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
            {product.deskripsi}
          </p>

          {/* Quick Specifications */}
          {product.spesifikasi && product.spesifikasi.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {product.spesifikasi.slice(0, 3).map((spec, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-low text-on-surface-variant font-body text-[11px] font-medium border border-surface-container"
                >
                  <Check className="w-3 h-3 text-secondary shrink-0" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Kemasan & WhatsApp Action Block */}
        <div className="flex flex-col gap-3 pt-3 bg-surface-low p-3.5 rounded-xl border border-surface-container">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-primary" />
              Kemasan:
            </span>
            <span className="font-semibold text-on-surface text-right">
              {product.kemasan}
            </span>
          </div>

          <a
            href={product.linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-primary text-white font-body text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-purple-glow hover:bg-primary-container transition-all hover:scale-[1.01]"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Pesan via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
