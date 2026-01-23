import Link from 'next/link';
import { PHONE_NUMBER, BUSINESS_NAME, SERVICES, NEIGHBORHOODS } from '@/lib/constants';

export default function Footer() {
  const northSeattle = NEIGHBORHOODS.filter(n =>
    ["Ballard", "Fremont", "Queen Anne", "Magnolia", "Wallingford", "Green Lake", "Greenwood", "Phinney Ridge"].includes(n.name)
  );

  const southSeattle = NEIGHBORHOODS.filter(n =>
    ["Beacon Hill", "Columbia City", "Georgetown", "Rainier Beach", "Mount Baker", "Seward Park"].includes(n.name)
  );

  return (
    <footer className="bg-brand-dark text-slate-300 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
          {/* Branding Column */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <Link href="/" className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-1">
                Cloud <span className="text-brand-secondary">Concrete</span>
              </Link>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium max-w-xs">
              Seattle&apos;s leading concrete contractors providing high-quality residential, commercial, and decorative concrete solutions. We specialize in structural longevity and aesthetic perfection across every district of Seattle, WA.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-all cursor-pointer group">
                <svg className="w-5 h-5 group-hover:text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-all cursor-pointer group">
                <svg className="w-5 h-5 group-hover:text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
            </div>

            {/* South Seattle nested below brand for unique layout */}
            <div className="pt-8">
              <h4 className="text-white font-black mb-6 uppercase tracking-widest text-[10px]">South Seattle</h4>
              <ul className="space-y-3">
                {southSeattle.map(n => (
                  <li key={n.slug}>
                    <Link href={`/locations/${n.slug}`} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors block">
                      {n.name}, WA
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link href="/locations" className="text-[11px] font-black uppercase tracking-widest text-brand-secondary flex items-center gap-2 hover:gap-3 transition-all">
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
                  <Link href={`/services/${s.slug}`} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors block">
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
                  <Link href={`/locations/${n.slug}`} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors block">
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
                <li><Link href="/about" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Latest News</Link></li>
                <li><Link href="/contact" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Privacy</Link></li>
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
  );
}
