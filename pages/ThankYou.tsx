
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PHONE_NUMBER } from '../constants';

const ThankYou: React.FC = () => {
  return (
    <div className="pb-32">
      <SEO
        title="Thank You | Cloud Concrete of Seattle"
        description="Thank you for contacting Cloud Concrete of Seattle. We'll be in touch shortly."
      />

      <div className="min-h-[70vh] flex items-center justify-center py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">
              Thank You!
            </h1>

            <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed">
              We've received your request and will be in touch within 24 hours to discuss your project.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mb-10">
              <h2 className="text-lg font-black text-brand-dark mb-4 uppercase tracking-wider">What Happens Next</h2>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span className="text-slate-600 font-medium">Our team reviews your project details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span className="text-slate-600 font-medium">We'll call to schedule a free on-site consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span className="text-slate-600 font-medium">You'll receive a detailed written estimate</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-500 mb-8">
              Need to reach us sooner? Call us at{' '}
              <a href={`tel:${PHONE_NUMBER}`} className="text-brand-primary font-bold hover:underline">
                {PHONE_NUMBER}
              </a>
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
