
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import { SERVICES, NEIGHBORHOODS, PHONE_NUMBER } from '../constants';

const ServiceLocationDetail: React.FC = () => {
  const { combinedSlug } = useParams<{ combinedSlug: string }>();
  
  // Smart lookup: Find service and neighborhood by checking combined slug
  // We prioritize longer service slugs first to avoid partial matches
  let service = null;
  let location = null;

  if (combinedSlug) {
    // Attempt to match by checking all known services
    for (const s of SERVICES) {
      if (combinedSlug.startsWith(s.slug + '-')) {
        const potentialLocSlug = combinedSlug.replace(s.slug + '-', '');
        const foundLoc = NEIGHBORHOODS.find(n => n.slug === potentialLocSlug);
        if (foundLoc) {
          service = s;
          location = foundLoc;
          break;
        }
      }
    }
  }

  if (!service || !location) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-3xl font-black text-brand-dark mb-4">Project Page Not Found</h2>
        <p className="text-slate-500 mb-8">The specific service or location combination you're looking for doesn't exist.</p>
        <Link to="/" className="text-brand-primary font-black uppercase tracking-widest">Return Home</Link>
      </div>
    );
  }

  // Localized insights
  const localInsights: Record<string, string> = {
    "Ballard": "Ballard properties often face unique challenges with tree root intrusion and soil settling near the historic ship canal district. Our crews are experts at navigating the tight street access common in this vibrant neighborhood.",
    "Queen Anne": "The steep topography of Queen Anne requires advanced structural engineering. We specialize in hillside stabilization and heavy-duty reinforced foundations that prevent slab migration on the hill's famous slopes.",
    "West Seattle": "West Seattle's coastal humidity and salt air demand premium-grade sealants. We ensure every project in this neighborhood is protected against spalling and moisture ingress, a must for coastal PNW properties.",
    "Capitol Hill": "The dense urban fabric of Capitol Hill means we often manage complex site logistics and small-footprint pours. We are adept at working around historic structures and narrow property lines to deliver modern concrete performance.",
    "Magnolia": "Magnolia's bluff-side properties must prioritize sophisticated drainage systems. We integrate sub-surface water management into every concrete design to protect the stability of the hillside and your home's foundation.",
    "Fremont": "Fremont's eclectic residential lots often feature unique architectural styles. Our decorative and stamped concrete options are a favorite here, allowing homeowners to match the creative spirit of the 'Center of the Universe'.",
    "Green Lake": "In the Green Lake area, we focus on aesthetically pleasing walkways and patios that blend seamlessly with the neighborhood's active, park-like atmosphere. Proper soil compaction is key here near the lake's water table.",
    "Beacon Hill": "Beacon Hill's varied residential zones benefit from our durable driveway and sidewalk solutions. We understand the local permitting nuances for this diverse and growing Seattle district."
  };

  const dynamicSections = [
    {
      title: "Engineered for the Pacific Northwest",
      content: `In ${location.name}, Seattle's weather is a primary factor in any concrete project. With an average of 37 inches of rain per year, a ${service.name.toLowerCase()} must be built with a superior drainage plan. At Cloud Concrete, we don't just pour concrete; we engineer systems. We start with a deep 4-6 inch compacted gravel base to ensure a stable subgrade that won't shift during our rainy winters. Our high-PSI mixes are specifically designed to handle the freeze-thaw cycles that can cause inferior slabs to crack and spall.`
    },
    {
      title: "Local Property Values and Curb Appeal",
      content: `A professional ${service.name.toLowerCase()} in ${location.name} is one of the highest ROI improvements you can make to your property. Whether you're in the heart of the ${location.zip || 'Seattle'} area or near the neighborhood's parks, a clean, well-executed concrete installation significantly boosts curb appeal. For homeowners looking to stand out, our stamped and colored options provide a high-end look that replicates the beauty of natural stone or slate with the unmatched durability and lower cost of concrete.`
    },
    {
      title: "Structural Integrity and Seismic Safety",
      content: `Seattle is in a high-seismic zone, making structural integrity a top priority for any concrete work in ${location.name}. We use Grade 60 rebar and precision-cut expansion joints to allow the slab to expand and contract naturally without structural failure. For foundations and retaining walls, our engineering exceeds the minimum City of Seattle building codes, giving you peace of mind that your ${service.name.toLowerCase()} will stand the test of time and environmental stress.`
    }
  ];

  const neighborhoodFlavor = localInsights[location.name] || 
    `${location.name}'s unique local conditions, from soil composition to average property slopes, are all factored into our structural designs. We have successfully completed dozens of projects in this area, becoming the trusted local choice for homeowners who value precision and longevity.`;

  return (
    <div className="pb-32">
      <SEO 
        title={`${service.name} in ${location.name}, Seattle | Cloud Concrete`} 
        description={`Expert ${service.name.toLowerCase()} installation and repair in ${location.name}, Seattle. Fully licensed and bonded local concrete contractors serving ${location.zip || 'the Greater Seattle area'}. Request your free quote today!`}
      />
      
      <div className="bg-brand-dark py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={`https://picsum.photos/seed/${service.slug}${location.slug}/1600/900`} alt={`${service.name} in ${location.name}`} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-brand-primary/20 border border-brand-primary/30 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              Authorized {location.name} Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              {service.name} <br/><span className="text-brand-secondary italic">in {location.name}, Seattle</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 font-medium max-w-2xl">
              Delivering high-performance {service.name.toLowerCase()} solutions designed for the unique terrain and climate of {location.name}, WA.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href={`tel:${PHONE_NUMBER}`} className="bg-brand-primary text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl flex items-center gap-3">
                Call Our {location.name} Crew: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/3">
            <div className="prose prose-slate prose-xl max-w-none">
              <h2 className="text-4xl font-black text-brand-dark mb-8 tracking-tight">The Preferred Choice for {service.name} in {location.name}</h2>
              <div className="w-20 h-2 bg-brand-primary mb-10"></div>
              
              <p className="text-slate-600 font-medium leading-relaxed mb-10">
                At Cloud Concrete of Seattle, we pride ourselves on being more than just a concrete company—we are consultants for your property's long-term health. When we handle a {service.name.toLowerCase()} project in {location.name}, we perform a complete site audit to ensure that your new concrete is built on a stable subgrade with proper water diversion. We understand that properties in this district often have unique topographical features, from historic grading to coastal soil profiles, that require a customized approach to structural reinforcement.
              </p>

              <div className="bg-slate-900 text-white p-12 rounded-[3rem] mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full -mr-24 -mt-24"></div>
                <h3 className="text-2xl font-black text-brand-secondary mb-4 uppercase tracking-tight">Neighborhood Expertise: {location.name}</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-6">{neighborhoodFlavor}</p>
                <div className="flex gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service Area: {location.name}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Seattle City Limits</span>
                </div>
              </div>

              {dynamicSections.map((section, idx) => (
                <div key={idx} className="mb-16">
                  <h3 className="text-3xl font-black text-brand-dark mb-6 tracking-tight">{section.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{section.content}</p>
                </div>
              ))}

              <h3 className="text-3xl font-black mb-8 tracking-tight">Our Professional {location.name} Project Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black text-brand-primary mb-3">1. Topographical Site Analysis</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">We evaluate the slope, existing drainage, and soil compaction of your {location.name} property to create a custom engineering plan.</p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black text-brand-primary mb-3">2. Permit & Right-of-Way Coordination</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">For work involving sidewalks or curbs in {location.name}, we manage all SDOT permit applications to ensure 100% legal compliance.</p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black text-brand-primary mb-3">3. Precision Base & Rebar Prep</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">We never skip the 4-inch gravel base and Grade 60 rebar. This is the foundation of a {service.name.toLowerCase()} that lasts 30+ years.</p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black text-brand-primary mb-3">4. Artisan Finishing & Sealing</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">Our finishers deliver the perfect texture, whether it's a safe broom finish or a decorative stamp, followed by professional sealing.</p>
                </div>
              </div>

              <div className="bg-brand-secondary/10 p-12 rounded-[3rem] border border-brand-secondary/20 mb-16">
                <h3 className="text-2xl font-black text-brand-dark mb-6 tracking-tight">Local Reputation & Trust</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  Homeowners in {location.name} choose Cloud Concrete because we are a local business that lives and works in Seattle. We don't use subcontractors; our in-house crew handles every step of your project. We stand behind our structural integrity with a full 10-year warranty, the most robust in the Seattle market. We invite you to check our recent project references in the area to see why we are the top-rated concrete contractors in the district.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white px-5 py-2.5 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">Licensed in WA State</span>
                  <span className="bg-white px-5 py-2.5 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">A+ Better Business Bureau</span>
                  <span className="bg-white px-5 py-2.5 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">Fully Bonded & Insured</span>
                </div>
              </div>

              <div className="text-center py-10">
                <h3 className="text-3xl font-black text-brand-dark mb-6">Serving Every Block of {location.name}</h3>
                <p className="text-slate-500 font-medium mb-10">If your property is within the Seattle city limits near {location.zip || location.name}, we are your local experts. Request a quote today and see the Cloud Concrete difference.</p>
                <Link to="/contact" className="bg-brand-primary text-white px-12 py-5 rounded-xl font-black text-xl shadow-2xl hover:scale-105 transition-all inline-block">
                  Request Free {location.name} Estimate
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <LeadForm />
              <div className="mt-10 p-10 bg-brand-dark text-white rounded-[2.5rem] shadow-2xl">
                <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-brand-secondary">Other Services in {location.name}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {SERVICES.filter(s => s.slug !== service.slug).slice(0, 12).map(s => (
                    <Link key={s.slug} to={`/${s.slug}-${location.slug}`} className="text-sm font-bold text-slate-400 hover:text-white transition-all flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-150 transition-transform"></span>
                      {s.name} in {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocationDetail;
