
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

// Map blog posts to concrete images
const BLOG_IMAGES: Record<string, string> = {
  'concrete-driveway-cost-seattle': '/images/concrete-50.jpeg',
  'stamped-concrete-vs-pavers': '/images/concrete-55.jpeg',
  'concrete-solutions-seattle-rain': '/images/concrete-60.jpeg',
  'seattle-concrete-permits': '/images/concrete-65.jpeg',
  'seattle-soil-foundation-tips': '/images/concrete-70.jpeg',
  'best-time-to-pour-seattle': '/images/concrete-75.jpeg',
  'stamped-patterns-seattle': '/images/concrete-80.jpeg',
  'eco-friendly-concrete-seattle': '/images/concrete-85.jpeg',
  'prepare-property-concrete': '/images/concrete-90.jpeg',
  'historic-concrete-restoration': '/images/concrete-95.jpeg',
};

const BlogIndex: React.FC = () => {
  // Extract unique categories
  const categories = Array.from(new Set(BLOG_POSTS.map(p => p.category)));

  return (
    <div className="pb-32">
      <div className="bg-brand-dark py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Concrete Insights <br/><span className="text-brand-secondary italic">& Advice</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Expert tips, design inspiration, and local Seattle guides for your next concrete project.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {BLOG_POSTS.map(post => (
                <article key={post.slug} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col">
                  <div className="h-60 bg-slate-200 overflow-hidden relative">
                    <div className="absolute top-4 left-4 bg-brand-primary text-brand-secondary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10">
                      {post.category}
                    </div>
                    <img
                      src={BLOG_IMAGES[post.slug] || '/images/concrete-100.jpeg'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex-grow">
                    <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">{post.date} • By {post.author}</p>
                    <h2 className="text-2xl font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-slate-600 font-medium mb-6 line-clamp-3 text-sm">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs">
                      Read Full Guide <span>&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:w-1/4 space-y-12">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
              <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-brand-secondary">Categories</h4>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <Link 
                      to={`/blog/category/${cat.toLowerCase().replace(/ /g, '-')}`} 
                      className="text-slate-400 hover:text-white font-bold flex items-center justify-between text-sm group"
                    >
                      {cat}
                      <span className="text-brand-primary group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-primary p-10 rounded-[2.5rem] text-white">
              <h4 className="text-xl font-black mb-4 leading-tight">Need a Project Quote?</h4>
              <p className="text-white/80 text-sm font-medium mb-8">Our estimators are currently serving Ballard, Fremont, and Queen Anne today.</p>
              <Link 
                to="/contact" 
                className="block text-center bg-brand-dark text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
              >
                Book Inspection
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
