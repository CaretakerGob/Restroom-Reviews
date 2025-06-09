
import { MetadataRoute } from 'next';
// import { mockBlogPosts } from '@/lib/mockBlogPosts'; // If you want to include blog posts
// import { mockReviewsData } from '@/lib/mockReviews'; // If you want to include individual reviews (can get very large)

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.restroomreviews.work'; // Fallback, replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/about',
    '/admin',
    '/anonymous-tips',
    '/blog',
    '/community',
    '/contact',
    '/map',
    '/nominate-business',
    '/porcelain-rule',
    '/reviews',
    '/submit-review',
    '/thank-you',
    '/videos',
    '/privacy-policy',
    '/terms-of-use',
    '/accessibility-statement',
    '/support-us',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'daily' : 'weekly', // Adjust as needed
    priority: route === '/' ? 1.0 : 0.8, // Adjust as needed
  }));

  // Example for dynamic blog posts (uncomment and adapt if needed)
  // const blogPosts = mockBlogPosts.map((post) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.date).toISOString(),
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...blogPosts, // Add dynamic routes here
  ];
}
