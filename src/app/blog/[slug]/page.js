// app/blog/[slug]/page.tsx

import { getBlog } from "@/services/service.blog";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);
  return {
    title: blog?.blog_title,
    description: blog?.blog_content,
  };
}

export default async function BlogPostPage({ params }) {
  const blog = await getBlog(params.slug);
  if (!blog) return <div className="p-10 text-center">Blog post not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{blog.blog_title}</h1>
      <Image
        src={blog.blog_image}
        alt={blog.blog_title}
        height={600}
        width={800}
        className="w-full h-auto object-cover rounded-lg mb-6"
      />
      <p className="text-sm text-gray-500 mb-4">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <article dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
    </div>
  );
}
