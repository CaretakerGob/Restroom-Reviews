
'use client';

import type { Video } from '@/lib/mockVideos';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Film, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
          {video.type === 'youtube' && <Youtube className="h-6 w-6 text-red-600" />}
          {video.type === 'tiktok_placeholder' && <Film className="h-6 w-6 text-black dark:text-white" />}
          {video.type === 'custom_iframe' && <Film className="h-6 w-6 text-foreground" />}
          {video.title}
        </CardTitle>
        {video.uploader && (
          <CardDescription className="text-xs text-muted-foreground">
            Uploaded by: {video.uploader}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow space-y-3 pt-2">
        {video.type === 'youtube' && (
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.sourceUrl}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        )}
        {video.type === 'tiktok_placeholder' && (
          <Link href={video.sourceUrl} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="relative aspect-video w-full rounded-md overflow-hidden border">
              <Image
                src={video.thumbnailUrl}
                alt={`Thumbnail for ${video.title}`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                data-ai-hint={video.dataAiHint || 'video thumbnail'}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold flex items-center gap-2">
                  Watch on TikTok <ExternalLink size={18} />
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Note: Full TikTok embeds require specific code. Click to view on TikTok.
            </p>
          </Link>
        )}
        {video.type === 'custom_iframe' && (
           <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={video.sourceUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        )}
        {video.description && (
          <p className="text-sm text-foreground/80 leading-relaxed mt-2">
            {video.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
