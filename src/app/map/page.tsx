
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Search, Filter, MapPin, Settings2, Construction, AlertTriangle, History, Navigation } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Label } from '@/components/ui/label';


const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[500px] rounded-lg" />,
});

const mockReviews = [
  { id: '1', locationName: 'Grand Central', address: 'New York', latitude: 40.7527, longitude: -73.9772, overallRating: 4 },
  { id: '2', locationName: 'The Bean Scene', address: 'Pleasantville', latitude: 34.0522, longitude: -118.2437, overallRating: 5 },
];

export default function InteractiveMapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('all');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleFilterChange = (value: string) => {
    setFilterCriteria(value);
    console.log('Filter changed to:', value);
  };

  const showComingSoonMessage = true; 

  if (showComingSoonMessage) {
    return (
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
              <MapPin className="h-10 w-10" /> 📍 Lavatory Locator
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              Our interactive map is getting a major upgrade! Find relief routes near you soon.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col items-center justify-center text-center min-h-[500px]">
            <Construction className="h-24 w-24 text-primary opacity-50 mb-6" />
            <h2 className="text-3xl font-headline text-secondary">
              Our Map Pipes are Being Rerouted!
            </h2>
            <p className="text-xl text-foreground/70 mt-2 max-w-xl">
              This exciting feature is currently under construction and will be flowing soon! We're working on:
            </p>
            <ul className="list-disc list-inside text-left text-foreground/70 mt-4 space-y-2 max-w-md">
                <li>Detailed search and filtering (by name, rating, "Cleaned by R&R", tags like restaurant/park).</li>
                <li><strong>Panic Potty Portal / Emergency Mode:</strong> One-tap directions to the cleanest, highest-rated restroom nearby when you're in a hurry!</li>
                <li>User location auto-detection for "restrooms near me".</li>
            </ul>
            <p className="text-md text-muted-foreground mt-4">
              Check back later for the ultimate restroom finding experience!
            </p>
            <Image
              src="https://placehold.co/600x300.png"
              alt="Map coming soon illustration"
              width={600}
              height={300}
              className="mt-8 rounded-lg shadow-md opacity-70"
              data-ai-hint="construction map compass"
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Actual map display (currently unreachable due to showComingSoonMessage = true)
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
