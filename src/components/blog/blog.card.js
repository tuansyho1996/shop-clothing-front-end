// components/BlogCard.tsx
import Link from 'next/link';

export default function BlogCard({ blog }) {
    return (
        <Link href={`/blogs/${blog.blog_slug}`} className="group">
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{blog.blog_title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                    <p className="text-gray-700 line-clamp-2">{blog.blog_content}</p>
                </div>
            </div>
        </Link>
    );
}
