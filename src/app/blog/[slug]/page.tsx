
import { mockBlogPosts } from '@/lib/mockBlogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  // This helps Next.js know which slugs to pre-render at build time
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = mockBlogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound(); // This will render the nearest not-found.js or a default Next.js 404 page
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority // Prioritize loading hero image for blog posts
                data-ai-hint={post.imageHint || "blog header"}
              />
            </div>
          )}
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary">
            {post.title}
          </CardTitle>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
            <div className="flex items-center gap-1.5">
              <User size={16} />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarDays size={16} />
              <span>Published on {formattedDate}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-foreground/90 leading-relaxed">
          {/* Using dangerouslySetInnerHTML for simplicity with HTML in mock data.
              In a real app with user-generated content or Markdown, use a sanitizer or Markdown renderer. */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft size={18} className="mr-2" />
            Back to Flush Journal
          </Link>
        </Button>
      </div>
    </div>
  );
}

// Add basic prose styling to globals.css if not already present or customize further
// For example, in globals.css:
// @layer components {
//   .prose { @apply text-foreground; }
//   .prose h1 { @apply text-primary; }
//   /* ... other prose styles */
// }
// This is usually handled by a typography plugin for Tailwind, but basic overrides can be here.
// For this, I'll rely on the text-foreground/90 and Tailwind's default prose styles if any.
// The provided globals.css doesn't have Tailwind Typography plugin, so HTML elements will have basic styling.
// The content in mockBlogPosts is structured with <p>, <ul>, <ol>, <h3> for basic formatting.
