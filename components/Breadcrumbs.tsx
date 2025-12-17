
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="container mx-auto px-4 py-4 text-xs font-black uppercase tracking-widest text-slate-400">
      <ul className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-brand-primary">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.replace(/-/g, ' ');

          return (
            <React.Fragment key={to}>
              <li className="text-slate-300">/</li>
              <li>
                {last ? (
                  <span className="text-brand-primary">{label}</span>
                ) : (
                  <Link to={to} className="hover:text-brand-primary">{label}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
