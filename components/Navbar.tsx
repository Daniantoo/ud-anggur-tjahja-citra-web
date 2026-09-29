'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Menu, X, Building2, User } from 'lucide-react';
import { COMPANY_INFO, createWaLink } from '@/data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Kategori Produk', href: '/#kategori-inti' },
    { name: 'Tentang Kami', href: '/#tentang-kami' },
    { name: 'Lokasi Gudang', href: '/#lokasi-gudang' },
    { name: 'Kontak', href: '/#kontak' },
  ];

  const waLink = createWaLink('Halo UD. Anggur Tjahja Citra, saya ingin bertanya mengenai produk sarung tangan, masker kain, dan kain majun.');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-surface-container/80 shadow-sm transition-all">
      <div className="h-20 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-white border border-surface-container flex items-center justify-center p-0.5">
            <Image
              src="/LOGO.jpg"
              alt="Logo UD. Anggur Tjahja Citra"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg text-primary leading-none tracking-tight">
              UD. Anggur Tjahja Citra
            </span>
            <span className="font-body text-[10px] font-bold text-on-surface-variant tracking-wider uppercase mt-1">
              Sarung Tangan • Masker Kain • Kain Majun
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-sm font-semibold transition-colors py-1 relative ${isActive
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-body text-sm font-semibold shadow-purple-glow hover:bg-primary-container transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden sm:inline">Konsultasi WhatsApp</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-high transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-card border-b border-surface-container px-4 pt-3 pb-6 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-low hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="pt-2 border-t border-surface-container mt-1">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-primary text-white font-body text-sm font-semibold flex items-center justify-center gap-2 shadow-purple-glow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Sales B2B via WA</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
