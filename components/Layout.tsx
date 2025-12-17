
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, BUSINESS_NAME, SERVICES, NEIGHBORHOODS } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import StickyCTA from './StickyCTA';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter neighborhoods for footer columns
  const northSeattle = NEIGHBORHOODS.filter(n => 
    ["Ballard", "Fremont", "Queen Anne", "Magnolia", "Wallingford", "Green Lake", "Greenwood", "Phinney Ridge"].includes(n.name)
  );
  
  const southSeattle = NEIGHBORHOODS.filter(n => 
    ["Beacon Hill", "Columbia City", "Georgetown", "Rainier Beach", "Mount Baker", "Seward Park"].includes(n.name)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Dark Background for Logo */}
      <header className="sticky top-0 z-50 bg-brand-dark border-b border-white/10 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cloud-gradient rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="grid grid-cols-1 gap-2">
                    {SERVICES.slice(0, 6).map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="hover:text-brand-secondary text-xs uppercase tracking-widest py-1 block">{s.name}</Link>
                    ))}
                    <Link to="/services" className="text-brand-secondary text-xs font-black uppercase tracking-widest mt-2 block border-t border-white/5 pt-2">All Services &rarr;</Link>
                  </div>
                </div>
              </div>
              <Link to="/locations" className="hover:text-brand-secondary transition-colors uppercase tracking-wider">Locations</Link>
              <Link to="/blog" className="hover:text-brand-secondary transition-colors uppercase tracking-wider">Blog</Link>
              <Link to="/about" className="hover:text-brand-secondary transition-colors uppercase tracking-wider">About</Link>
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
          <div className="lg:hidden bg-brand-dark border-t border-white/10 py-8 px-4 space-y-6 animate-in fade-in slide-in-from-top-4 overflow-y-auto max-h-[80vh]">
            <div className="space-y-4">
              <p className="text-xs font-black text-brand-secondary uppercase tracking-[0.3em]">Our Services</p>
              {SERVICES.slice(0, 5).map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-sm uppercase tracking-wider pl-4 border-l border-white/10 py-1">{s.name}</Link>
              ))}
            </div>
            <Link to="/locations" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-lg uppercase tracking-wider">Locations</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-lg uppercase tracking-wider">Blog</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-white text-lg uppercase tracking-wider">About</Link>
            <a href={`tel:${PHONE_NUMBER}`} className="block w-full text-center bg-brand-primary text-white py-4 rounded-lg font-black text-xl shadow-xl">{PHONE_NUMBER}</a>
          </div>
        )}
      </header>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Sticky Mobile CTA */}
      <StickyCTA />

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
            {/* Branding Column */}
            <div className="space-y-8">
              <div className="flex flex-col">
                <Link to="/" className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-1">
                  Cloud <span className="text-brand-secondary">Concrete</span>
                </Link>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm font-medium max-w-xs">
                Seattle's leading concrete contractors providing high-quality residential, commercial, and decorative concrete solutions. We specialize in structural longevity and aesthetic perfection across every district of Seattle, WA.
              </p>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-all cursor-pointer group">
                  <svg className="w-5 h-5 group-hover:text-brand-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-all cursor-pointer group">
                  <svg className="w-5 h-5 group-hover:text-brand-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
              </div>

              {/* South Seattle nested below brand for unique layout */}
              <div className="pt-8">
                <h4 className="text-white font-black mb-6 uppercase tracking-widest text-[10px]">South Seattle</h4>
                <ul className="space-y-3">
                  {southSeattle.map(n => (
                    <li key={n.slug}>
                      <Link to={`/locations/${n.slug}`} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors block">
                        {n.name}, WA
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link to="/locations" className="text-[11px] font-black uppercase tracking-widest text-brand-secondary flex items-center gap-2 hover:gap-3 transition-all">
                      All Seattle Districts &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Services Column */}
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Core Services</h4>
              <ul className="space-y-3">
                {SERVICES.map(s => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors block">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* North Seattle Column */}
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">North Seattle</h4>
              <ul className="space-y-3">
                {northSeattle.map(n => (
                  <li key={n.slug}>
                    <Link to={`/locations/${n.slug}`} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors block">
                      {n.name}, WA
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / Quick Links Column */}
            <div className="space-y-12">
              <div>
                <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">About Us</Link></li>
                  <li><Link to="/blog" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Latest News</Link></li>
                  <li><Link to="/contact" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Privacy</Link></li>
                </ul>
              </div>
              <div className="bg-brand-primary/5 p-6 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-3">Call Our Team</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-black text-white hover:text-brand-secondary transition-colors">{PHONE_NUMBER}</a>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-2">Mon-Sat: 7am - 6pm</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                Nothing Too Big Concrete <span className="w-1 h-1 bg-brand-primary rounded-full"></span> WA Lic# NOTHITB775KE
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
