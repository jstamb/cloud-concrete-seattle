
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import { BLOG_POSTS, PHONE_NUMBER, BUSINESS_NAME } from '../constants';

// Map blog posts to concrete images
const BLOG_IMAGES: Record<string, string> = {
  'concrete-driveway-cost-seattle': '/images/concrete-50.jpeg',
  'stamped-concrete-vs-pavers': '/images/concrete-55.jpeg',
  'concrete-solutions-seattle-rain': '/images/concrete-60.jpeg',
  'seattle-concrete-permits': '/images/concrete-65.jpeg',
  'seattle-soil-foundation-tips': '/images/concrete-70.jpeg',
  'best-time-to-pour-seattle': '/images/concrete-75.jpeg',
  'stamped-patterns-seattle': '/images/concrete-80.jpeg',
  'eco-friendly-concrete-seattle': '/images/concrete-85.jpeg',
  'prepare-property-concrete': '/images/concrete-90.jpeg',
  'historic-concrete-restoration': '/images/concrete-95.jpeg',
};

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <div className="py-20 text-center">Post not found</div>;

  return (
    <div className="pb-32">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        schemaType="Article"
        schemaData={{
          "headline": post.title,
          "author": {
            "@type": "Organization",
            "name": BUSINESS_NAME
          },
          "publisher": {
            "@type": "Organization",
            "name": BUSINESS_NAME,
            "logo": {
              "@type": "ImageObject",
              "url": "https://cloudconcreteseattle.com/images/logo.png"
            }
          },
          "datePublished": "2024-01-01", // Should ideally be dynamic
          "image": `https://cloudconcreteseattle.com${BLOG_IMAGES[post.slug] || '/images/concrete-100.jpeg'}`
        }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link to="/blog" className="text-brand-primary font-black uppercase tracking-widest text-sm mb-8 inline-block hover:gap-4 transition-all">
            &larr; Back to Blog
          </Link>
          <div className="mb-10">
            <span className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-xs">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>By {post.author}</span>
            </div>
          </div>
          
          <img
            src={BLOG_IMAGES[post.slug] || '/images/concrete-100.jpeg'}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-[3rem] mb-16 shadow-2xl"
          />

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <div className="prose prose-slate prose-xl max-w-none">
                <p className="text-xl font-bold text-slate-700 mb-8 leading-relaxed italic border-l-8 border-brand-primary pl-6">
                  {post.excerpt}
                </p>
                <div
                  className="font-medium text-slate-600 leading-relaxed space-y-6 [&_a]:text-brand-primary [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-dark"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              
              <div className="mt-16 p-10 bg-brand-dark rounded-[3rem] text-white">
                <h3 className="text-3xl font-black mb-4">Ready to Start Your Project?</h3>
                <p className="text-slate-400 mb-8 font-medium">Get a professional consultation and quote from Seattle's concrete experts.</p>
                <a href={`tel:${PHONE_NUMBER}`} className="bg-brand-primary text-white px-8 py-4 rounded-xl font-black inline-block shadow-xl hover:brightness-110 transition-all uppercase tracking-widest">
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <LeadForm />
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                  <h4 className="text-lg font-black mb-4 uppercase tracking-widest text-brand-dark">Related Posts</h4>
                  <div className="space-y-4">
                    {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="block group">
                        <h5 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">{p.title}</h5>
                        <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-widest">{p.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
