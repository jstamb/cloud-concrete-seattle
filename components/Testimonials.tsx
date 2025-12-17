
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 uppercase tracking-tight">Seattle <span className="text-brand-primary">Verified Reviews</span></h2>
          <div className="w-24 h-1.5 bg-brand-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 font-medium">Read why property owners from Ballard to West Seattle trust Cloud Concrete for their most important structural investments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group">
              <div>
                <div className="flex text-brand-secondary mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-brand-dark font-medium leading-relaxed italic mb-8 group-hover:text-brand-primary transition-colors duration-300">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center font-black text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-dark uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{testimonial.location}, Seattle District</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white border border-slate-100 p-8 rounded-[3rem] shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
                {[1,2,3,4,5].map(n => <div key={n} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden shadow-sm"><img src={`https://i.pravatar.cc/100?u=${n + 10}`} alt="User" /></div>)}
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">450+ Local Clients</p>
          </div>
          <div className="h-4 w-px bg-slate-200 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-brand-dark tracking-tighter">4.9/5.0</span>
            <div className="flex text-brand-primary">
               {[1,2,3,4,5].map(n => <svg key={n} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Google Business Profile</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
