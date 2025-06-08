
import { mockVideosData, type Video } from '@/lib/mockVideos';
import VideoCard from '@/components/VideoCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VideosPage() {
  // In a real app, you'd fetch videos here.
  const videos: Video[] = mockVideosData;

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Restroom Reels</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Watch transformations, horror stories, and community highlights!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-center text-foreground/70 text-lg">
              No videos available at the moment. Check back soon!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
