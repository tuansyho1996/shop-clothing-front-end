// components/BlogCard.tsx
import Link from 'next/link';

export default function BlogCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                    <p className="text-gray-700 line-clamp-2">{post.description}</p>
                </div>
            </div>
        </Link>
    );
}
