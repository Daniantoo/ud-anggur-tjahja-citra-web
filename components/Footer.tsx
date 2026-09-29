import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Clock, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-low border-t border-surface-container">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-white border border-surface-container flex items-center justify-center p-0.5">
                <Image
                  src="/LOGO.jpg"
                  alt="Logo UD. Anggur Tjahja Citra"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-primary">
                UD. Anggur Tjahja Citra
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Mitra pengadaan terpercaya masker kain, sarung tangan dan kain majun berkualitas tinggi untuk kebutuhan operasional anda.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-base font-bold text-on-surface">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-xs sm:text-sm">
              <li>
                <Link href="/produk?kategori=sarung-tangan" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Sarung Tangan</span>
                </Link>
              </li>
              <li>
                <Link href="/produk?kategori=masker" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Masker Kain</span>
                </Link>
              </li>
              <li>
                <Link href="/produk?kategori=kain-majun" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Kain Majun</span>
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Hubungi Kami</span>
                </Link>
              </li>
              <li>
                <Link href="/#lokasi-gudang" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Lokasi Gudang</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Operating Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-base font-bold text-on-surface">
              Jam Operasional
            </h4>
            <div className="p-4 rounded-xl bg-surface-card border border-surface-container flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="font-body text-xs sm:text-sm">
                  <span className="block font-bold text-on-surface">Senin - Sabtu</span>
                  <span className="block text-on-surface-variant">08:00 - 17:00 WIB</span>
                </div>
              </div>
              <div className="pt-2 border-t border-surface-container text-xs text-on-surface-variant">
                Minggu & Hari Libur: Tutup
              </div>
            </div>
            <span className="font-body text-[11px] font-semibold text-secondary uppercase tracking-wider">
              Siap melayani kebutuhan operasional anda kapan saja
            </span>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-base font-bold text-on-surface">
              Kontak Kami
            </h4>
            <div className="flex flex-col gap-3 font-body text-xs sm:text-sm text-on-surface-variant">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-on-surface font-semibold">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-on-surface font-semibold">+{COMPANY_INFO.whatsappNumber} (WhatsApp)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-on-surface-variant">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
