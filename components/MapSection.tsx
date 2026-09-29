'use client';

import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Building2, MapPin, Clock, Navigation, Calendar, Truck, Layers, Plus, Minus } from 'lucide-react';
import { COMPANY_INFO, createWaLink } from '@/data/products';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '460px',
  borderRadius: '1rem',
};

export default function MapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const hasApiKey = Boolean(apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE');

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: hasApiKey ? apiKey : '',
  });

  const center = {
    lat: COMPANY_INFO.coordinates.lat,
    lng: COMPANY_INFO.coordinates.lng,
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}`;
  const waVisitLink = createWaLink('Halo UD. Anggur Tjahja Citra, kami ingin menjadwalkan kunjungan gudang.');

  return (
    <section id="lokasi-gudang" className="w-full py-20 bg-surface-low border-t border-surface-container">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="font-body text-xs font-bold text-primary tracking-widest uppercase">
            Lokasi & Pergudangan
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface">
            Kunjungi Gudang Kami
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Terletak strategis di kawasan industri untuk kemudahan pickup mandiri armada logistik Anda.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Warehouse Information Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-surface-card border border-surface-container p-7 sm:p-8 shadow-sm flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-purple-glow">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-surface leading-tight">
                    Central Warehouse & Office
                  </h3>
                  <span className="font-body text-xs text-secondary font-bold uppercase tracking-wider">
                    Hub Distribusi Utama
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 bg-surface-low p-4 rounded-xl border border-surface-container">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-body text-xs font-bold text-on-surface">
                    Alamat Gudang
                  </span>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex flex-col gap-3">
                <span className="font-body text-xs font-bold text-on-surface flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Jadwal Operasional</span>
                </span>
                <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 px-3 rounded-lg bg-surface-low border border-surface-container">
                    <span className="text-on-surface-variant font-medium">Senin - Jumat</span>
                    <span className="font-bold text-on-surface">08.00 - 17.00 WIB</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 rounded-lg bg-surface-low border border-surface-container">
                    <span className="text-on-surface-variant font-medium">Sabtu</span>
                    <span className="font-bold text-on-surface">08.00 - 14.00 WIB</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 rounded-lg bg-red-50 text-red-700 border border-red-100 font-semibold">
                    <span>Minggu & Hari Libur</span>
                    <span>Tutup (WA Aktif)</span>
                  </div>
                </div>
              </div>

              {/* Fleet Access Compatibility */}
              <div className="flex flex-col gap-2">
                <span className="font-body text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Armada
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Pickup'].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-surface-low text-on-surface font-body text-xs font-semibold border border-surface-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-body text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-purple-glow hover:bg-primary-container transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah</span>
              </a>
              <a
                href={waVisitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-surface-low text-primary font-body text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-high transition-all border border-surface-container"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwalkan Kunjungan</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Container (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-card border border-surface-container overflow-hidden shadow-sm relative min-h-[460px] flex flex-col">
            {hasApiKey && isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{
                  disableDefaultUI: false,
                  zoomControl: true,
                }}
              >
                <MarkerF position={center} title="ProSafety Central Hub" />
              </GoogleMap>
            ) : (
              /* Fallback Google Maps iframe view when NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not configured */
              <div className="relative w-full h-full min-h-[460px] flex flex-col justify-between">
                <iframe
                  title="Google Maps Location ProSafety Industrial Supply"
                  src={`https://maps.google.com/maps?q=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}&z=15&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlay Pin Header Badge */}
                <div className="relative z-10 p-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-card/90 backdrop-blur-md shadow-md text-on-surface font-body text-xs font-bold border border-white/40">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>Babat Jerawat, Surabaya</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-primary text-white shadow-md font-body text-xs font-bold">
                    Hub Utama Aktif
                  </div>
                </div>

                {/* Footer Coordinate Tag */}
                <div className="relative z-10 p-4 mt-auto flex items-end justify-between pointer-events-none">
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
