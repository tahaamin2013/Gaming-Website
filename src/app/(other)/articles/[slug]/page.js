import ScrollProgressBar from '@/src/components/Blog/BlogReader/ScrollProgressBar';
import dynamic from 'next/dynamic';
const Floating_Bar = dynamic(() => import('@/src/components/Blog/BlogReader/Floating Bar'), {
  ssr: false
});

// Inside your BlogPage component
const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      <ScrollProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <BlogReader parmy={params} blogy={blog} />
        <Floating_Bar />
      </article>
    </>
  );
}

export default BlogPage;
