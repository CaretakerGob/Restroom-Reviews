
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Settings2 } from "lucide-react"; // Using Settings2 for "work in progress"
import Image from "next/image";

export default function InteractiveMapPage() {
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
        <CardContent className="space-y-6 flex flex-col items-center justify-center text-center min-h-[400px]">
          <Settings2 className="h-24 w-24 text-primary opacity-50 mb-6" />
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
            alt="Map coming soon"
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
