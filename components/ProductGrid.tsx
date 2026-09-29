'use client';

import React, { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS, Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  initialCategory?: string;
}

export default function ProductGrid({ initialCategory = 'all' }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.kategori === activeCategory);

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Category Tabs Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-low p-2 rounded-2xl border border-surface-container">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-body text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-purple-glow'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-card'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="text-xs font-semibold text-on-surface-variant px-3 py-1 bg-surface-card rounded-lg border border-surface-container self-end sm:self-center">
          Menampilkan {filteredProducts.length} Produk
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-surface-low rounded-2xl border border-surface-container flex flex-col items-center justify-center gap-3">
          <p className="font-display text-lg font-bold text-on-surface">Tidak ada produk dalam kategori ini.</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold"
          >
            Tampilkan Semua Produk
          </button>
        </div>
      )}
    </div>
  );
}
