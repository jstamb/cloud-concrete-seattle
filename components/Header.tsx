'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PHONE_NUMBER, SERVICES } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cloud-gradient rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight uppercase">
                Cloud <span className="text-brand-secondary">Concrete</span>
              </span>
              <span className="text-[10px] text-brand-secondary font-bold tracking-[0.2em] uppercase">Of Seattle</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold text-slate-300">
            <div className="relative group">
              <button className="hover:text-brand-secondary transition-colors uppercase tracking-wider flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="grid grid-cols-1 gap-2">
                  {SERVICES.slice(0, 6).map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-brand-secondary text-xs uppercase tracking-widest py-1 block">
                      {s.name}
                    </Link>
                  ))}
                  <Link href="/services" className="text-brand-secondary text-xs font-black uppercase tracking-widest mt-2 block border-t border-white/5 pt-2">
                    All Services &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/locations" className="hover:text-brand-secondary transition-colors uppercase tracking-wider">Locations</Link>
            <Link href="/blog" className="hover:text-brand-secondary transition-colors uppercase tracking-wider">Blog</Link>
            <Link href="/about" className="hover:text-brand-secondary transition-colors uppercase tracking-wider">About</Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:brightness-110 transition-all shadow-lg flex items-center space-x-2 border border-white/10"
            >
              <svg className="w-4 h-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.455 5.455l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{PHONE_NUMBER}</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 py-8 px-4 space-y-6 overflow-y-auto max-h-[80vh]">
          <div className="space-y-4">
            <p className="text-xs font-black text-brand-secondary uppercase tracking-[0.3em]">Our Services</p>
            {SERVICES.slice(0, 5).map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-sm uppercase tracking-wider pl-4 border-l border-white/10 py-1">
                {s.name}
              </Link>
            ))}
          </div>
          <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-lg uppercase tracking-wider">Locations</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-lg uppercase tracking-wider">Blog</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-lg uppercase tracking-wider">About</Link>
          <a href={`tel:${PHONE_NUMBER}`} className="block w-full text-center bg-brand-primary text-white py-4 rounded-lg font-black text-xl shadow-xl">{PHONE_NUMBER}</a>
        </div>
      )}
    </header>
  );
}
