
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
        <div className="w-24 h-24 bg-brand-secondary/30 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black mb-4 text-brand-dark tracking-tight">Project Logged!</h3>
        <p className="text-slate-600 font-medium leading-relaxed">We've received your request. An estimator will reach out within 24 hours to schedule your site visit.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(15,7,22,0.3)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16"></div>
      
      <h3 className="text-3xl font-black mb-8 text-brand-dark tracking-tight">Request Free Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Your Name" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:outline-none transition-all font-medium"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="(206) _" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:outline-none transition-all font-medium"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Service Required</label>
          <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:outline-none transition-all font-bold appearance-none">
            <option>Concrete Driveway</option>
            <option>Stamped Concrete</option>
            <option>Concrete Patio</option>
            <option>Foundation Work</option>
            <option>Retaining Wall</option>
            <option>Commercial Flatwork</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Seattle Neighborhood</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Ballard or Fremont" 
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Project Scope</label>
          <textarea 
            rows={3} 
            placeholder="Tell us about the project dimensions and goals..." 
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:outline-none transition-all font-medium"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-brand-primary hover:brightness-110 text-white font-black py-5 rounded-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm mt-4"
        >
          Send Quote Request
        </button>
        <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-wider">
          Licensed • Bonded • Insured
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
