
import React, { useEffect, useRef } from 'react';

const LeadForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the form div
    const formDiv = document.createElement('div');
    formDiv.className = 'deftform';
    formDiv.setAttribute('data-form-id', 'db76c1d5-e77c-46b1-b708-c2b36ba38fae');
    formDiv.setAttribute('data-form-width', '100%');
    formDiv.setAttribute('data-form-align', 'center');
    formDiv.setAttribute('data-form-auto-height', '1');

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(formDiv);

    // Load script dynamically after form div exists
    const loadScript = () => {
      // Remove any existing DeftForm scripts first
      const existingScripts = document.querySelectorAll('script[src*="deftform"]');
      existingScripts.forEach(s => s.remove());

      // Clear DeftForm global if it exists
      if ((window as any).DeftForm) {
        delete (window as any).DeftForm;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.deftform.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(15,7,22,0.3)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16"></div>

      <h3 className="text-3xl font-black mb-6 text-brand-dark tracking-tight relative z-10">Request Free Quote</h3>

      <div ref={containerRef} className="relative z-10 min-h-[300px]" />

      <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-wider relative z-10">
        Licensed • Bonded • Insured
      </p>
    </div>
  );
};

export default LeadForm;
