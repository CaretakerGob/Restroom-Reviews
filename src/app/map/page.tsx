
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Filter, Star, Edit3 } from "lucide-react";

export default function InteractiveMapPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-2">
            <MapPin className="h-10 w-10" /> Interactive Restroom Map
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Find and pin restrooms near you or at your destination. (Feature Under Construction)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-foreground/70">
            This map will allow you to visually explore restroom locations. You'll be able to use GPS to find nearby options or manually search for addresses.
          </p>
          
          <div className="relative w-full h-[400px] md:h-[600px] bg-muted rounded-lg shadow-inner flex items-center justify-center border border-border">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Placeholder for interactive map interface"
              width={800}
              height={600}
              className="object-cover opacity-30 rounded-lg"
              data-ai-hint="map interface"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <MapPin size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">Interactive Map Coming Soon!</h3>
                <p className="text-muted-foreground">Imagine a world of restrooms at your fingertips...</p>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-2xl font-headline text-secondary mb-4 text-center">Planned Features:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-foreground/80">
              <div className="p-4 bg-card-foreground/5 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-6 w-6 text-accent" />
                  <h4 className="font-semibold text-lg">Find & Pin</h4>
                </div>
                <p>Use GPS or manual input to locate and add restrooms to the map.</p>
              </div>
              <div className="p-4 bg-card-foreground/5 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="h-6 w-6 text-accent" />
                  <h4 className="font-semibold text-lg">Smart Filters</h4>
                </div>
                <p>Filter by "Clean," "Avoid," "Recently Reviewed," "Cleaned by R&R," and more.</p>
              </div>
              <div className="p-4 bg-card-foreground/5 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-accent" />
                  <h4 className="font-semibold text-lg">View Reviews</h4>
                </div>
                <p>Tap a pin to see detailed reviews, ratings, and photos for that location.</p>
              </div>
              <div className="p-4 bg-card-foreground/5 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Edit3 className="h-6 w-6 text-accent" />
                  <h4 className="font-semibold text-lg">Submit On-the-Go</h4>
                </div>
                <p>Easily submit new reviews directly from the map interface.</p>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground pt-4">
            We're working hard to bring this interactive experience to life. Stay tuned for updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
