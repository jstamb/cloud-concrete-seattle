import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h1 className="text-8xl font-black text-brand-primary mb-6">404</h1>
          <h2 className="text-3xl font-black text-brand-dark mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-10 font-medium">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
