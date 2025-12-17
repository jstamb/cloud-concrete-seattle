
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { NEIGHBORHOODS } from '../constants';

const LocationsHub: React.FC = () => {
  const coreSeattle = NEIGHBORHOODS.filter(n => parseInt(n.zip) >= 98101 && parseInt(n.zip) <= 98199);
  const greaterSeattle = NEIGHBORHOODS.filter(n => parseInt(n.zip) < 98101 || parseInt(n.zip) > 98199);

  return (
    <div className="pb-32">
      <SEO
        title="Concrete Contractor Near Me | Seattle Neighborhoods Served"
        description="Find a concrete contractor near you in Seattle. We serve Ballard, Queen Anne, Capitol Hill, West Seattle & all neighborhoods. Licensed, bonded & insured. Call (206) 495-0997."
      />

      <div className="bg-brand-dark py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Concrete Contractor <br/><span className="text-brand-secondary italic">Near You</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Your local Seattle concrete contractor. Find your neighborhood below for service details and free estimates.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="mb-24">
          <h2 className="text-4xl font-black text-brand-dark mb-12 text-center tracking-tight uppercase">Concrete Contractor by Seattle Neighborhood</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreSeattle.map(n => (
              <Link 
                key={n.slug} 
                to={`/locations/${n.slug}`}
                className="p-6 bg-white border border-slate-100 rounded-2xl text-center hover:shadow-xl hover:border-brand-primary/20 transition-all group"
              >
                <span className="font-black text-slate-800 text-sm uppercase tracking-wider group-hover:text-brand-primary transition-colors block">{n.name}</span>
                <div className="text-[10px] text-slate-400 font-bold mt-1 group-hover:text-brand-primary/50 uppercase tracking-widest">{n.zip}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-black text-brand-dark mb-12 text-center tracking-tight uppercase">Greater Seattle Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {greaterSeattle.map(n => (
              <Link 
                key={n.slug} 
                to={`/locations/${n.slug}`}
                className="p-6 bg-white border border-slate-100 rounded-2xl text-center hover:shadow-xl hover:border-brand-primary/20 transition-all group"
              >
                <span className="font-black text-slate-800 text-sm uppercase tracking-wider group-hover:text-brand-primary transition-colors block">{n.name}</span>
                <div className="text-[10px] text-slate-400 font-bold mt-1 group-hover:text-brand-primary/50 uppercase tracking-widest">{n.zip || 'WA'}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full -mr-32 -mt-32"></div>
          <h3 className="text-3xl font-black mb-6 relative z-10 uppercase tracking-tight">Need Service Elsewhere?</h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-medium relative z-10">We frequently handle projects beyond these core areas for larger structural and commercial builds. Contact us today to see if your property is within our extended service range.</p>
          <Link to="/contact" className="bg-brand-primary text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transition-all relative z-10">
            Check Service Availability
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationsHub;
