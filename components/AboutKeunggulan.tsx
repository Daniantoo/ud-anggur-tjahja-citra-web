import React from 'react';
import { Warehouse, Tag, Truck, ShieldCheck } from 'lucide-react';

export default function AboutKeunggulan() {
  const features = [
    {
      icon: Warehouse,
      title: 'Stok Selalu Ready',
      description: 'Kami menjamin kontinuitas pasokan setiap hari kerja tanpa risiko kelangkaan stok darurat.',
      iconBg: 'bg-primary-fixed text-primary',
    },
    {
      icon: Tag,
      title: 'Harga Bersaing & Grosir',
      description: 'Penawaran harga distributor langsung dari produsen untuk volume partai besar.',
      iconBg: 'bg-secondary-fixed text-secondary',
    },
    {
      icon: Truck,
      title: 'Pengiriman Terjadwal',
      description: 'Kami menyediakan jasa antar dengan minimal order menggunakan Pick Up.',
      iconBg: 'bg-surface-high text-primary',
    },
  ];

  return (
    <section id="tentang-kami" className="w-full py-20 bg-surface">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14 items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="font-body text-xs font-bold text-primary tracking-widest uppercase">
            Tentang UD. Anggur Tjahja Citra
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface leading-snug">
            Komitmen Kami Menyediakan Pasokan Kebutuhan Operasional Tanpa Hambatan
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Sebagai distributor dan supplier masker kain, sarung tangan dan kain majun, kami memahami kebutuhan operasional Anda. Kami siap menjadi mitra pengadaan jangka panjang.
          </p>
        </div>

        {/* Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-surface-low shadow-sm border border-surface-container flex flex-col items-center text-center gap-5 hover-lift"
              >
                <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
