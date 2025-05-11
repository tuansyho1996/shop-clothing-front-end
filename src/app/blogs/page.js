// app/blog/page.tsx
import BlogCard from "@/components/blog/blog.card"
import { getBlog } from "@/services/service.blog";

export const metadata = {
  title: 'Mythology Blog',
  description: 'Explore the world of mythology through our blog posts.',
}

export default async function BlogPage() {
  const blogs = await getBlog('all')
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Mythology Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogs?.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
