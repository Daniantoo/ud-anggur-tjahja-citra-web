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
      <div className="h-20 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink min-w-0 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-white border border-surface-container flex items-center justify-center p-0.5 shrink-0">
            <Image
              src="/LOGO.jpg"
              alt="Logo UD. Anggur Tjahja Citra"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-display font-extrabold text-sm sm:text-base md:text-lg text-primary leading-tight tracking-tight truncate">
              UD. Anggur Tjahja Citra
            </span>
            <span className="font-body text-[8px] sm:text-[10px] font-bold text-on-surface-variant tracking-normal sm:tracking-wider uppercase mt-0.5 truncate block">
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
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi WhatsApp"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-primary text-white font-body text-xs sm:text-sm font-semibold shadow-purple-glow hover:bg-primary-container transition-all hover:scale-[1.02] shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0 fill-white/20" />
            <span className="sm:hidden">Konsultasi WA</span>
            <span className="hidden sm:inline">Konsultasi WhatsApp</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-high transition-colors shrink-0"
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
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
