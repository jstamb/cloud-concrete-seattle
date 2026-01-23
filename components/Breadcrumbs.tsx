'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="container mx-auto px-4 py-4 text-xs font-black uppercase tracking-widest text-slate-400">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-brand-primary">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="text-slate-300">/</span>
              {last ? (
                <span className="text-brand-primary">{label}</span>
              ) : (
                <Link href={to} className="hover:text-brand-primary">{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
