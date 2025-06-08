
import { mockBlogPosts } from '@/lib/mockBlogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = mockBlogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound(); 
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
                priority 
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
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft size={18} className="mr-2" />
            Back to Bathroom Buzz
          </Link>
        </Button>
      </div>
    </div>
  );
}
