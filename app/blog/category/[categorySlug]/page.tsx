import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/JsonLd';
import { BLOG_POSTS, BLOG_IMAGES } from '@/lib/constants';

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateStaticParams() {
  const categories = Array.from(new Set(BLOG_POSTS.map(p => p.category)));
  return categories.map((category) => ({
    categorySlug: category.toLowerCase().replace(/ /g, '-'),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const categoryTitle = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${categoryTitle} | Concrete Blog`,
    description: `Read all our articles about ${categoryTitle}. Expert concrete advice, tips, and local Seattle guides.`,
  };
}

export default async function BlogCategory({ params }: Props) {
  const { categorySlug } = await params;

  // Basic slug to title conversion
  const categoryTitle = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.category.toLowerCase().replace(/ /g, '-') === categorySlug
  );

  return (
    <div className="pb-32">
      <BreadcrumbSchema items={[
        { name: 'Blog', url: '/blog' },
        { name: categoryTitle, url: `/blog/category/${categorySlug}` },
      ]} />

      <div className="bg-brand-dark py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/blog" className="text-brand-secondary font-black uppercase tracking-widest text-xs mb-4 inline-block hover:underline">&larr; Back to all posts</Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6">{categoryTitle}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Deep dives and expert insights into {categoryTitle.toLowerCase()}.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map(post => (
              <article key={post.slug} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col">
                <div className="h-60 bg-slate-200 overflow-hidden relative">
                  <Image
                    src={BLOG_IMAGES[post.slug] || '/images/concrete-100.jpeg'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">{post.date} &bull; By {post.author}</p>
                  <h2 className="text-2xl font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 font-medium mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-sm">
                    Read Article <span>&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black text-slate-400">No posts found in this category yet.</h3>
            <Link href="/blog" className="text-brand-primary font-black uppercase tracking-widest text-sm mt-8 inline-block">View All Posts</Link>
          </div>
        )}
      </div>
    </div>
  );
}
