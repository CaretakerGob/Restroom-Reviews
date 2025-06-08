
'use client';

import type { Review } from '@/lib/mockReviews';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import StarRating from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { CalendarDays, UserCircle } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const briefComment = review.comments.length > 150 
    ? `${review.comments.substring(0, 147)}...` 
    : review.comments;

  const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      {review.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={review.imageUrl}
            alt={`Restroom at ${review.locationName}`}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint="restroom interior"
          />
          {review.isCleanedByRR && (
            <Badge variant="default" className="absolute top-2 right-2 bg-green-500 text-white">
              CLEANED by R&R
            </Badge>
          )}
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-headline text-primary">{review.locationName}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">{review.address}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <StarRating initialValue={review.overallRating} readonly size={20} />
           {!review.imageUrl && review.isCleanedByRR && (
             <Badge variant="default" className="bg-green-500 text-white">CLEANED by R&R</Badge>
           )}
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed">{briefComment}</p>
        
        <div className="text-xs text-muted-foreground space-y-1 pt-2">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            <span>{formattedDate}</span>
          </div>
          {review.user && (
            <div className="flex items-center gap-1.5">
              <UserCircle size={14} />
              <span>Reviewed by: {review.user}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <p className="text-xs text-accent">Overall Cleanliness: {review.cleanliness}/5</p>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
