
import type { BlogPost } from '@/lib/mockBlogPosts';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, User } from 'lucide-react';

interface BlogPostPreviewCardProps {
  post: BlogPost;
}

export default function BlogPostPreviewCard({ post }: BlogPostPreviewCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        {post.imageUrl && (
          <div className="relative w-full h-48">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={post.imageHint || "blog image"}
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-headline text-primary leading-tight hover:underline">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-2 pt-0">
          <p className="text-sm text-foreground/80 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground justify-between items-center pt-3">
          <div className="flex items-center gap-1.5">
            <User size={14} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            <span>{formattedDate}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
