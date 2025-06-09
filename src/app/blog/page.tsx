
import { mockBlogPosts } from '@/lib/mockBlogPosts';
import BlogPostPreviewCard from '@/components/BlogPostPreviewCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareText } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-2">
            <MessageSquareText className="h-9 w-9" /> 💬 Bathroom Buzz
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            News, tips, musings, and "Weekly Spotlights" from the world of restrooms. (More articles and features coming soon!)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {mockBlogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBlogPosts
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((post) => (
                  <BlogPostPreviewCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-foreground/70 text-lg">
              No posts yet. Check back soon for our latest buzz!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
