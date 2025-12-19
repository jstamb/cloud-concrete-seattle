
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const FORM_ID = 'db76c1d5-e77c-46b1-b708-c2b36ba38fae';

const LeadForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const initAttemptRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const currentAttempt = ++initAttemptRef.current;

    const initializeForm = () => {
      // Bail if component unmounted or route changed during async operations
      if (initAttemptRef.current !== currentAttempt || !containerRef.current) return;

      // Clear container completely
      containerRef.current.innerHTML = '';

      // Remove ALL existing DeftForm scripts and iframes
      document.querySelectorAll('script[src*="deftform"]').forEach(s => s.remove());
      document.querySelectorAll('iframe[src*="deftform"]').forEach(f => f.remove());

      // Clear all DeftForm globals to force fresh initialization
      const win = window as any;
      delete win.DeftForm;
      delete win.DeftFormEmbed;
      delete win.__deftform_loaded;

      // Create fresh form div with unique ID to prevent caching issues
      const formDiv = document.createElement('div');
      formDiv.className = 'deftform';
      formDiv.id = `deftform-${Date.now()}`;
      formDiv.setAttribute('data-form-id', FORM_ID);
      formDiv.setAttribute('data-form-width', '100%');
      formDiv.setAttribute('data-form-align', 'center');
      formDiv.setAttribute('data-form-auto-height', '1');
      containerRef.current.appendChild(formDiv);

      // Load fresh script with cache-busting
      const script = document.createElement('script');
      script.src = `https://cdn.deftform.com/embed.js?_=${Date.now()}`;
      script.async = true;
      script.onload = () => {
        // Trigger re-scan if DeftForm has an init method
        if (win.DeftForm && typeof win.DeftForm.init === 'function') {
          win.DeftForm.init();
        }
      };
      document.body.appendChild(script);
    };

    // Small delay ensures DOM is fully ready after route transition
    const timeoutId = setTimeout(initializeForm, 50);

    return () => {
      clearTimeout(timeoutId);
      // Clean up on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [location.pathname]);

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
