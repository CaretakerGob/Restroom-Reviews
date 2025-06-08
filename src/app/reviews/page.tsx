
'use client';

import { useState, useEffect, useMemo } from 'react';
import { mockReviewsData, type Review } from '@/lib/mockReviews';
import ReviewCard from '@/components/ReviewCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter } from 'lucide-react';

type FilterType = 'all' | 'highestRated' | 'cleanest' | 'needsImprovement';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  useEffect(() => {
    // In a real app, you'd fetch reviews here.
    // For now, sort mock data by date descending by default for "All"
    const sortedInitialData = [...mockReviewsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setReviews(sortedInitialData);
  }, []);

  const filteredAndSortedReviews = useMemo(() => {
    let processedReviews = [...reviews];

    switch (activeFilter) {
      case 'highestRated':
        processedReviews.sort((a, b) => b.overallRating - a.overallRating || new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'cleanest':
        processedReviews.sort((a, b) => b.cleanliness - a.cleanliness || new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'needsImprovement':
        processedReviews.sort((a, b) => a.cleanliness - b.cleanliness || new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'all':
      default:
        // Default sort is by date (already applied in useEffect or could be reapplied here)
        processedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
    }
    return processedReviews;
  }, [reviews, activeFilter]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Wall of Thrones</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Browse recent restroom reviews from our community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('all')}
              className="shadow-sm"
            >
              <Filter size={16} className="mr-2" /> All Reviews
            </Button>
            <Button
              variant={activeFilter === 'highestRated' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('highestRated')}
              className="shadow-sm"
            >
              Highest Rated
            </Button>
            <Button
              variant={activeFilter === 'cleanest' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('cleanest')}
              className="shadow-sm"
            >
              Cleanest
            </Button>
            <Button
              variant={activeFilter === 'needsImprovement' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('needsImprovement')}
              className="shadow-sm"
            >
              Needs Improvement
            </Button>
          </div>

          {filteredAndSortedReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <p className="text-center text-foreground/70 text-lg">
              No reviews match the current filter.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
