import { useState } from 'react';

const images = [
  { src: '/images/concrete-23.jpeg', title: 'Stamped Patio in Ballard', category: 'Decorative' },
  { src: '/images/concrete-15.jpeg', title: 'Modern Driveway in Queen Anne', category: 'Residential' },
  { src: '/images/concrete-20.jpeg', title: 'Structural Foundation in West Seattle', category: 'Structural' },
  { src: '/images/concrete-25.jpeg', title: 'Colored Concrete Walkway', category: 'Decorative' },
  { src: '/images/concrete-87.jpeg', title: 'Retaining Wall Project', category: 'Structural' },
  { src: '/images/concrete-35.jpeg', title: 'Commercial Slab Pour', category: 'Commercial' },
];

const categories = ['All', 'Residential', 'Decorative', 'Structural', 'Commercial'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6">Recent Project Gallery</h2>
          <div className="w-24 h-2 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 font-medium">Visualizing excellence in every pour. Browse our recent work across Seattle.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
                filter === cat
                  ? 'bg-brand-primary text-white shadow-xl'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-video cursor-pointer">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-brand-secondary text-xs font-black uppercase tracking-widest mb-2">{img.category}</span>
                <h4 className="text-white text-xl font-black leading-tight">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
