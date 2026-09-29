export interface Product {
  id: string;
  nama: string;
  kategori: 'sarung-tangan' | 'masker' | 'kain-majun';
  kategoriLabel: string;
  deskripsi: string;
  gambarUrl: string;
  linkWhatsapp: string;
  spesifikasi: string[];
  kemasan: string;
  bestseller?: boolean;
  minOrder?: string;
  stokStatus?: 'Ready Stock' | 'Inden' | 'Stok Terbatas';
}

export const COMPANY_INFO = {
  name: 'UD. Anggur Tjahja Citra',
  shortName: 'UD. Anggur Tjahja Citra',
  tagline: 'Penyedia Utama Masker Kain, Sarung Tangan & Kain Majun',
  phone: '0851-0341-0018 / 0813-3373-7018',
  whatsappNumber: '6285103410018',
  email: 'anggurtjahjacitra@yahoo.com',
  address: 'Jl. Raya Babat Jerawat Jl. Mulyomukti No.15, Babat Jerawat, Kec. Pakal, Surabaya, Jawa Timur 60197',
  coordinates: {
    lat: -7.2396049721221685,
    lng: 112.62392269932573,
  },
  operatingHours: {
    weekday: 'Senin - Jumat: 08:00 - 17:00 WIB',
    saturday: 'Sabtu: 08:00 - 14:00 WIB',
    sunday: 'Minggu & Hari Libur: Tutup (WA Darurat Aktif)',
  },
};

export function createWaLink(message: string): string {
  const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/^0/, '62').replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const CATEGORIES = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'sarung-tangan', label: 'Sarung Tangan' },
  { id: 'masker', label: 'Masker Kain' },
  { id: 'kain-majun', label: 'Kain Majun' },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    nama: 'Sarung Tangan Rajut Benang 7 Polkadot (Bintik PVC)',
    kategori: 'sarung-tangan',
    kategoriLabel: 'Sarung Tangan',
    deskripsi: 'Anti-slip cengkeraman mantap, rajutan tebal benang 7 tidak mudah melar, ideal untuk pergerakan material, bongkar muat & pergudangan operasional.',
    gambarUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Sarung%20Tangan%20Rajut%20Benang%207%20Polkadot',
    spesifikasi: ['Material Katun Rajut Benang 7', 'Coating Bintik PVC Anti-Slip', 'Standar Ketahanan Abrasi EN388', 'Warna Natural / Bintik Kuning-Hitam'],
    kemasan: '1 Lusin (12 Pasang) / 1 Karung (50 Lusin)',
    bestseller: true,
    minOrder: '10 Lusin',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-02',
    nama: 'Sarung Tangan PU Coated Palm Fit ESD',
    kategori: 'sarung-tangan',
    kategoriLabel: 'Sarung Tangan',
    deskripsi: 'Presisi tinggi tahan minyak ringan, cocok untuk perakitan komponen elektronik sensitif, komponen presisi, dan mekanik otomotif.',
    gambarUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Sarung%20Tangan%20PU%20Coated%20Palm%20Fit',
    spesifikasi: ['Lapisan Polyurethane (PU) di Telapak', 'Bahan Nilon Lint-Free (Anti Rontok)', 'Fitur Antistatis (ESD Certified)', 'Fleksibilitas & Sensitivitas Tinggi'],
    kemasan: '1 Pasang / Pack 10 Pasang (Box 100 Pasang)',
    bestseller: false,
    minOrder: '20 Pasang',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-03',
    nama: 'Sarung Tangan Nitrile Chemical & Heavy Duty',
    kategori: 'sarung-tangan',
    kategoriLabel: 'Sarung Tangan',
    deskripsi: 'Perlindungan maksimal dari paparan bahan kimia, zat asam, pelarut, dan oli teknis. Formula sintesis nitril berdaya tahan gesek ekstra.',
    gambarUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Sarung%20Tangan%20Nitrile%20Chemical',
    spesifikasi: ['Material 100% NBR Nitrile Heavy Duty', 'Tahan Bahan Kimia & Pelarut Solvent', 'Tekstur Diamond Grip Telapak', 'Panjang 33 cm (Melindungi Lengan)'],
    kemasan: '1 Pasang Plastik Sealed / Karton 120 Pasang',
    bestseller: true,
    minOrder: '12 Pasang',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-04',
    nama: 'Sarung Tangan Kulit Las Heat & Cut Resistant',
    kategori: 'sarung-tangan',
    kategoriLabel: 'Sarung Tangan',
    deskripsi: 'Sarung tangan kulit split cowhide premium untuk pekerjaan pengelasan (welding), pengecoran logam, dan pekerjaan suhu tinggi.',
    gambarUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Sarung%20Tangan%20Kulit%20Las',
    spesifikasi: ['Material Kulit Sapi Split Premium 1.3mm', 'Jahitan Benang Kevlar Anti-Lumer', 'Lapisan Dalam Katun Lembut', 'Tahan Panas hingga 350°C'],
    kemasan: '1 Pasang / 1 Lusin',
    bestseller: false,
    minOrder: '5 Pasang',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-05',
    nama: 'Masker Partikulat KN95 Industri (5-Ply)',
    kategori: 'masker',
    kategoriLabel: 'Masker Industri',
    deskripsi: 'Filtrasi efisiensi >= 95% terhadap debu pabrik, asap pengelasan, serbuk kayu, dan aerosol partikel halus berbahaya di lingkungan kerja.',
    gambarUrl: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Masker%20Partikulat%20KN95%20Industri',
    spesifikasi: ['Konstruksi 5-Layer Meltblown Protection', 'Filtrasi BFE & PFE > 95%', 'Klip Hidung Tersembunyi Aluminium', 'Tali Headloop / Earloop Ergonomis'],
    kemasan: 'Box isi 20 Pcs / Karton 50 Box (1000 Pcs)',
    bestseller: true,
    minOrder: '5 Box',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-06',
    nama: 'Masker Bedah & Harian 3-Ply Earloop Non-Woven',
    kategori: 'masker',
    kategoriLabel: 'Masker Industri',
    deskripsi: 'Bahan adem berpori mikro, nose-clip fleksibel, tahan percikan cairan, pasokan standar wajib pekerja lini produksi manufaktur.',
    gambarUrl: 'https://images.unsplash.com/photo-1586942593568-29364efbe871?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Masker%203-Ply%20Earloop',
    spesifikasi: ['Layer Non-Woven Hydrophobic + Meltblown', 'Izin Edar Kemenkes / Standard BFE 99%', 'Bebas Latex & Bebas Bau Kimia', 'Model Earloop Elastis Nyaman'],
    kemasan: 'Box isi 50 Pcs / Karton 40 Box (2000 Pcs)',
    bestseller: true,
    minOrder: '10 Box',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-07',
    nama: 'Respirator Half Face Double Cartridge Safety',
    kategori: 'masker',
    kategoriLabel: 'Masker Industri',
    deskripsi: 'Respirator reusable dengan filter kartrid ganda untuk perlindungan dari uap organik, gas berbahaya, cat semprot, dan pestisida.',
    gambarUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Respirator%20Half%20Face%20Double%20Cartridge',
    spesifikasi: ['Body Silikon Medis Lembut Lolos Test Fit', 'Bayonet Connection System Compatible', 'Dilengkapi 2x Cartridge Filter RC203', 'Tali Head Harness 4 Point Adjustable'],
    kemasan: 'Set Lengkap (Masker + Cartridge + Cotton Filter)',
    bestseller: false,
    minOrder: '2 Set',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-08',
    nama: 'Kain Majun Putih Jahit Tumpuk Katun Murni 100%',
    kategori: 'kain-majun',
    kategoriLabel: 'Kain Majun',
    deskripsi: 'Bebas kotoran & kancing kawat, daya serap oli mesin, thinner, dan pelarut kimia sangat optimal. Bersih tanpa rontokan serat serabut.',
    gambarUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Kain%20Majun%20Putih%20Katun%20100',
    spesifikasi: ['Bahan 100% Katun Kaos Putih Murni', 'Model Jahit Tumpuk Rapi & Kuat', 'High Oil & Water Absorption Rate', 'Tidak Membekaskan Serat pada Mesin'],
    kemasan: 'Karung Bal 25 Kg / 50 Kg',
    bestseller: true,
    minOrder: '1 Bal (25 Kg)',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-09',
    nama: 'Kain Majun Warna Jahit Sambung Ekonomis',
    kategori: 'kain-majun',
    kategoriLabel: 'Kain Majun',
    deskripsi: 'Pilihan ekonomis untuk pembersihan awal di bengkel mesin, cetak offset printing, dan pabrik alat berat. Tahan gesekan permukaan kasar.',
    gambarUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Kain%20Majun%20Warna%20Jahit%20Sambung',
    spesifikasi: ['Bahan Kaos Katun Campur Warna', 'Jahitan Sambung Rapi', 'Ekonomis Efisien untuk Pembersihan Kasar', 'Sudah Sortir Bebas Logam & Zipper'],
    kemasan: 'Karung Bal 25 Kg / 50 Kg',
    bestseller: true,
    minOrder: '1 Bal (25 Kg)',
    stokStatus: 'Ready Stock',
  },
  {
    id: 'prod-10',
    nama: 'Kain Majun Katun Putih Polos Lembaran (Tanpa Jahit)',
    kategori: 'kain-majun',
    kategoriLabel: 'Kain Majun',
    deskripsi: 'Kain lap katun lembaran utuh tanpa jahitan. Sangat sesuai untuk pembersihan laboratorium, komponen kaca optik, dan polishing akhir.',
    gambarUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    linkWhatsapp: 'https://wa.me/6281198765432?text=Halo%20ProSafety,%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20Kain%20Majun%20Katun%20Putih%20Polos%20Lembaran',
    spesifikasi: ['100% Soft Cotton Sheet Utuh', 'Ukuran Rata-rata 30x40 cm', 'Super Absorbent Zero Scratch Surface', 'Standard Cleanroom Industrial Wiping'],
    kemasan: 'Karung Bal 25 Kg',
    bestseller: false,
    minOrder: '1 Bal (25 Kg)',
    stokStatus: 'Ready Stock',
  },
];
