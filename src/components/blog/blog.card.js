// components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }) {
    return (
        <Link href={`/blogs/${blog.blog_slug}`} className="group">
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <Image
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
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
