
'use client'; // This page now needs to be a client component for dynamic import and map interaction

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Filter, Star, Edit3, Search, Compass, Crosshair, PlusCircle } from "lucide-react";
import dynamic from 'next/dynamic';
import { mockReviewsData } from '@/lib/mockReviews'; // Import mock data

// Dynamically import the map component with SSR turned off
const InteractiveMapWithNoSSR = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] md:h-[500px] bg-muted rounded-lg flex items-center justify-center"><p>Loading map...</p></div>,
});

export default function InteractiveMapPage() {
  const reviews = mockReviewsData; // Use the imported mock data

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-2">
            <Compass className="h-10 w-10" /> Interactive Restroom Map
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Find, review, and pin restrooms near you or at your destination.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="p-4 border rounded-lg bg-card-foreground/5 shadow">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-grow flex items-center gap-2">
                <Input type="text" placeholder="Search by address, city, or landmark..." className="bg-background" />
                <Button variant="outline" size="icon" aria-label="Search">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                <Crosshair className="mr-2 h-5 w-5" /> Use My Location (Future)
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" />All</Button>
              <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100 hover:text-green-700"><Star className="mr-2 h-4 w-4 text-green-500 fill-green-500" />Clean</Button>
              <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-100 hover:text-red-700"><MapPin className="mr-2 h-4 w-4 text-red-500 fill-red-500" />Avoid</Button>
              <Button variant="ghost" size="sm"><Edit3 className="mr-2 h-4 w-4" />Recently Reviewed</Button>
              <Button variant="ghost" size="sm" className="text-teal-600 hover:bg-teal-100 hover:text-teal-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Cleaned by R&R
              </Button>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-lg shadow-inner border border-border overflow-hidden">
            <InteractiveMapWithNoSSR reviews={reviews} />
          </div>
          <div className="text-center">
            <Button variant="default" className="mt-6 shadow-md">
                <PlusCircle className="mr-2 h-5 w-5" /> Pin a New Restroom (Future)
            </Button>
          </div>
          

          <div className="pt-8">
            <h3 className="text-3xl font-headline text-secondary mb-6 text-center">Map Features Roadmap</h3>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/80">
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-accent flex items-center gap-2">
                    <Compass className="h-6 w-6" /> Real-time Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Use your device's GPS to find the closest restrooms or manually search any location worldwide.</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-accent flex items-center gap-2">
                    <Filter className="h-6 w-6" /> Advanced Filtering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sort by overall rating, cleanliness, "Cleaned by R&R" status, specific amenities, and more.</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-accent flex items-center gap-2">
                    <Star className="h-6 w-6" /> Instant Review Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tap on a map pin to instantly see summary ratings, photos, and full reviews for any restroom.</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-accent flex items-center gap-2">
                    <Edit3 className="h-6 w-6" /> On-the-Go Submissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily add new restrooms or submit reviews for existing ones directly from the map interface.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground pt-6">
            We're actively developing this feature. Stay tuned for a revolutionary way to navigate public restrooms! Some features like 'Use My Location' and 'Pin a New Restroom' are planned for the future.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
