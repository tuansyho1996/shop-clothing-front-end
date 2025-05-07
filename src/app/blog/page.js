// app/blog/page.tsx
import BlogCard from "@/components/blog/blog.card"
const blogPosts = [
  {
    slug: 'norse-style-in-modern-fashion',
    title: 'Norse Style in Modern Fashion',
    description: 'Discover how Norse mythology inspires today’s streetwear and luxury clothing.',
    image: '/images/norse-fashion.jpg',
    date: '2025-05-01',

  },
  {
    slug: 'egyptian-gods-on-tshirts',
    title: 'Egyptian Gods on T-Shirts',
    description: 'Explore our latest designs featuring Anubis, Ra, and more in premium print.',
    image: '/images/egyptian-tees.jpg',
    date: '2025-04-15',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Mythology Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
