
import React from 'react';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      <SEO 
        title="About Our Seattle Concrete Company" 
        description="Learn about Cloud Concrete of Seattle, our history, our commitment to quality, and why we are the preferred choice for concrete work in the Pacific Northwest."
      />
      
      <div className="bg-brand-dark py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/id/102/1600/900" alt="Concrete Crew" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Our <span className="text-brand-secondary italic tracking-normal">Mission</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Seattle's premier concrete artisans, combining structural engineering with aesthetic perfection.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-brand-dark mb-8 tracking-tight uppercase">Building Seattle's Future</h2>
            <div className="w-20 h-1.5 bg-brand-primary mb-10"></div>
            <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-lg">
              <p>Founded in the heart of Seattle, Cloud Concrete began with a simple mission: to provide homeowners and businesses with concrete solutions that actually last in the unique Pacific Northwest climate.</p>
              <p>We realized that many contractors were applying "standard" methods that didn't account for Seattle's persistent moisture, varied soil conditions, and freeze-thaw cycles. We decided to be different.</p>
              <p>Today, Cloud Concrete of Seattle is recognized as the regional leader in precision flatwork and structural concrete. Our crews are composed of local experts who understand the chemistry of curing in our humidity and the engineering required for our hillsides. Every project we undertake is an opportunity to contribute to the architectural legacy of our city.</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img src="https://picsum.photos/id/122/800/800" alt="Concrete Finish" className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary rounded-full z-0 opacity-20 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-secondary rounded-full z-0 opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-brand-dark mb-4 uppercase tracking-tight">Our Core Values</h2>
                <p className="text-slate-500 font-medium">The principles that guide every pour we make.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Integrity", desc: "We never cut corners on subgrade preparation or reinforcement.", color: "bg-brand-primary" },
                    { title: "Precision", desc: "Laser-leveled finishes and exact slope management for perfect drainage.", color: "bg-brand-secondary" },
                    { title: "Innovation", desc: "Using advanced PNW-specific admixtures for maximum durability.", color: "bg-brand-dark" },
                    { title: "Community", desc: "Supporting local Seattle districts through quality infrastructure.", color: "bg-slate-400" }
                ].map((val, i) => (
                    <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className={`w-10 h-10 ${val.color} rounded-lg mb-6 group-hover:scale-110 transition-transform`}></div>
                        <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{val.title}</h3>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 mb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32"></div>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-black text-brand-dark mb-8 uppercase tracking-tight leading-tight">Committed to Sustainable <br/><span className="text-brand-primary italic tracking-normal">Seattle Construction</span></h2>
                <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10">
                    As a local Seattle business, we are deeply committed to reducing our environmental impact. We utilize low-carbon concrete mixes, prioritize recycled aggregates, and specialize in pervious concrete solutions that help manage our city's stormwater runoff naturally. Our goal is to build long-lasting structures that serve the community while respecting the natural beauty of the Pacific Northwest.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white px-6 py-3 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">Pervious Expert</div>
                    <div className="bg-white px-6 py-3 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">Eco-Conscious Curing</div>
                    <div className="bg-white px-6 py-3 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">Recycled Aggregate Prep</div>
                </div>
            </div>
        </div>

        <Gallery />
      </div>
    </div>
  );
};

export default About;
