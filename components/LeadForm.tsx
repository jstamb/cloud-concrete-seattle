
import React, { useEffect, useRef, useState } from 'react';

// Track if script has been loaded globally
let scriptLoaded = false;

const LeadForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const loadForm = () => {
      if (containerRef.current) {
        // Clear and recreate the form div
        containerRef.current.innerHTML = '';

        const formDiv = document.createElement('div');
        formDiv.className = 'deftform';
        formDiv.setAttribute('data-form-id', 'db76c1d5-e77c-46b1-b708-c2b36ba38fae');
        formDiv.setAttribute('data-form-width', '100%');
        formDiv.setAttribute('data-form-align', 'center');
        formDiv.setAttribute('data-form-auto-height', '1');
        containerRef.current.appendChild(formDiv);

        // If script already loaded, try to reinitialize
        if (scriptLoaded && (window as any).DeftForm) {
          try {
            (window as any).DeftForm.init();
          } catch (e) {
            // Ignore init errors
          }
        }
      }
    };

    // Load script only once
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://cdn.deftform.com/embed.js';
      script.async = true;
      script.onload = () => {
        scriptLoaded = true;
        loadForm();
      };
      document.body.appendChild(script);
    } else {
      loadForm();
    }

    // Force re-render after a short delay to let DeftForm initialize
    const timer = setTimeout(() => {
      setFormKey(k => k + 1);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(15,7,22,0.3)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16"></div>

      <h3 className="text-3xl font-black mb-6 text-brand-dark tracking-tight relative z-10">Request Free Quote</h3>

      <div ref={containerRef} key={formKey} className="relative z-10 min-h-[300px]">
        <div
          className="deftform"
          data-form-id="db76c1d5-e77c-46b1-b708-c2b36ba38fae"
          data-form-width="100%"
          data-form-align="center"
          data-form-auto-height="1"
        ></div>
      </div>

      <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-wider relative z-10">
        Licensed • Bonded • Insured
      </p>
    </div>
  );
};

export default LeadForm;
