
import { mockBlogPosts } from '@/lib/mockBlogPosts';
import BlogPostPreviewCard from '@/components/BlogPostPreviewCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Flush Journal</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            News, tips, and musings from the world of restrooms.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {mockBlogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBlogPosts
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
                .map((post) => (
                  <BlogPostPreviewCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-foreground/70 text-lg">
              No blog posts yet. Check back soon!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
