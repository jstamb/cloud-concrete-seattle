
import React from 'react';
import { useLocation } from 'react-router-dom';

const FORM_ID = 'db76c1d5-e77c-46b1-b708-c2b36ba38fae';

const LeadForm: React.FC = () => {
  const location = useLocation();

  // Create iframe content with the form - isolates DeftForm JS in its own context
  const iframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, -apple-system, sans-serif; }
      </style>
    </head>
    <body>
      <div class="deftform"
        data-form-id="${FORM_ID}"
        data-form-width="100%"
        data-form-align="center"
        data-form-auto-height="1">
      </div>
      <script src="https://cdn.deftform.com/embed.js" async></script>
    </body>
    </html>
  `;

  // Use location.pathname as key to force iframe reload on navigation
  const iframeKey = `deftform-${location.pathname.replace(/\//g, '-')}`;

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(15,7,22,0.3)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16"></div>

      <h3 className="text-3xl font-black mb-6 text-brand-dark tracking-tight relative z-10">Request Free Quote</h3>

      <iframe
        key={iframeKey}
        srcDoc={iframeContent}
        className="w-full border-0 min-h-[400px] relative z-10"
        style={{ overflow: 'hidden' }}
        scrolling="no"
        title="Contact Form"
        sandbox="allow-scripts allow-forms allow-same-origin"
      />

      <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-wider relative z-10">
        Licensed • Bonded • Insured
      </p>
    </div>
  );
};

export default LeadForm;
