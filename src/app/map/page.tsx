
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Search, Filter, MapPin, Settings2, Construction } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

// Dynamically import the map component to ensure it's client-side only
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[500px] rounded-lg" />,
});

// Mock reviews data - in a real app, this would come from an API
const mockReviews = [
  { id: '1', locationName: 'Grand Central', address: 'New York', latitude: 40.7527, longitude: -73.9772, overallRating: 4 },
  { id: '2', locationName: 'The Bean Scene', address: 'Pleasantville', latitude: 34.0522, longitude: -118.2437, overallRating: 5 },
  // Add more mock reviews as needed
];

export default function InteractiveMapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('all');

  // Placeholder for search/filter logic
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleFilterChange = (value: string) => {
    setFilterCriteria(value);
    console.log('Filter changed to:', value);
  };

  const showComingSoonMessage = true; // Set to true to show coming soon message

  if (showComingSoonMessage) {
    return (
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
              <MapPin className="h-10 w-10" /> 📍 Lavatory Locator
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              Our map feature is currently under construction. Find relief routes near you soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col items-center justify-center text-center min-h-[500px]">
            <Construction className="h-24 w-24 text-primary opacity-50 mb-6" />
            <h2 className="text-3xl font-headline text-secondary">
              Our Map Pipes are a Bit Clogged...
            </h2>
            <p className="text-xl text-foreground/70 mt-2">
              This exciting feature is currently under construction and will be flowing soon!
            </p>
            <p className="text-md text-muted-foreground mt-4">
              We're working hard to bring you an amazing interactive map experience. Check back later!
            </p>
            <Image
              src="https://placehold.co/600x300.png"
              alt="Map coming soon illustration"
              width={600}
              height={300}
              className="mt-8 rounded-lg shadow-md opacity-70"
              data-ai-hint="construction map"
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
            <MapPin className="h-10 w-10" /> 📍 Lavatory Locator
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Find, review, and pin restrooms near you or at your destination.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 border rounded-lg bg-card-foreground/5">
            <div className="md:col-span-2">
              <Label htmlFor="search-location" className="text-sm font-medium text-foreground/80">Search Location</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  id="search-location"
                  type="text"
                  placeholder="Enter address, city, or landmark..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-background"
                />
                <Button onClick={handleSearch} aria-label="Search">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="filter-reviews" className="text-sm font-medium text-foreground/80">Filter by</Label>
              <Select value={filterCriteria} onValueChange={handleFilterChange}>
                <SelectTrigger id="filter-reviews" className="mt-1 bg-background">
                  <SelectValue placeholder="Select filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Restrooms</SelectItem>
                  <SelectItem value="highest_rated">Highest Rated</SelectItem>
                  <SelectItem value="cleanest">Cleanest</SelectItem>
                  <SelectItem value="recently_cleaned">Recently Cleaned by R&R</SelectItem>
                  <SelectItem value="needs_improvement">Needs Improvement</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-lg shadow-md overflow-hidden border">
            <InteractiveMap reviews={mockReviews} />
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

// Ensure Label is imported or defined if used standalone like above. Assuming it comes from '@/components/ui/label'
import { Label } from '@/components/ui/label';
