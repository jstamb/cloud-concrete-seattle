'use client';

import Link from 'next/link';
import { PHONE_NUMBER } from '@/lib/constants';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] md:hidden">
      <div className="bg-brand-dark/95 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 text-sm uppercase tracking-widest shadow-lg"
        >
          <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.455 5.455l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Our Team
        </a>
        <Link
          href="/contact"
          className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-secondary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
