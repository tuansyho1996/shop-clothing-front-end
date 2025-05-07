// app/blog/[slug]/page.tsx



const blogContent = {
  'norse-style-in-modern-fashion': {
    title: 'Norse Style in Modern Fashion',
    content: `Norse mythology continues to shape modern fashion with strong symbols like Thor’s hammer, ravens, and runes...`,
  },
  'egyptian-gods-on-tshirts': {
    title: 'Egyptian Gods on T-Shirts',
    content: `Our latest collection explores ancient Egyptian deities through bold graphic design and cultural homage...`,
  },
};

export default function BlogPostPage({ params }) {
  const post = blogContent[params.slug];

  if (!post) return <div className="p-10 text-center">Blog post not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <article className="text-lg leading-7 text-gray-800 whitespace-pre-line">
        {post.content}
      </article>
    </div>
  );
}
