
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Users, Construction, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { generateCommunityImage } from "@/ai/flows/generate-community-image-flow";

export default async function CommunityPage() {
  let imageDataUri = "https://placehold.co/600x300.png"; // Default placeholder
  let imageAlt = "Flush Force community features coming soon placeholder";
  let generatedImageHint; // No hint if generated

  try {
    const imageResult = await generateCommunityImage({ 
      prompt: "A vibrant and inclusive illustration representing the 'Flush Force' community teamwork and achievement. Depict diverse, stylized characters, the Flush Force, celebrating or collaborating joyfully on a project related to improving public restrooms. The style should be modern, friendly, and inviting. Avoid text in the image." 
    });
    if (imageResult.imageDataUri) {
      imageDataUri = imageResult.imageDataUri;
      imageAlt = "AI Generated image representing the Flush Force community teamwork and achievement";
    }
  } catch (error) {
    console.error("Failed to generate community image:", error);
    // imageDataUri will remain the default placeholder
    generatedImageHint = "community teamwork"; // Fallback hint if generation fails
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
            <Users className="h-10 w-10" /> 🏆 Flush Force HQ
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Our community hub for top reviewers, MVPs, and fun badges is under construction!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 flex flex-col items-center justify-center text-center">
          
          <div className="flex flex-col items-center text-center p-6 bg-amber-100/50 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 shadow-md max-w-2xl">
            <Construction className="h-16 w-16 text-amber-500 mb-4" />
            <h2 className="text-3xl font-headline text-secondary mb-2">
              Feature Under Construction!
            </h2>
            <p className="text-xl text-foreground/70 mt-2 mb-6">
              We're busy building this awesome space to celebrate our amazing contributors. Check back soon!
            </p>
            <Image
              src={imageDataUri}
              alt={imageAlt}
              width={600}
              height={300}
              className="rounded-lg shadow-md opacity-80"
              priority={imageDataUri.startsWith('data:')} 
              data-ai-hint={generatedImageHint} 
            />
          </div>

          <div className="w-full max-w-3xl space-y-6 pt-6">
            <h3 className="text-2xl font-headline text-secondary border-b pb-2">What's Coming?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <Star className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Flush Force Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">See who's leading the charge in submitting the most helpful and detailed restroom reviews.</p>
                </CardContent>
              </Card>
              <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <Award className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Toilet Titans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Highlighting members who go above and beyond in contributing to a cleaner restroom world.</p>
                </CardContent>
              </Card>
              <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <BadgeCheck className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Lavatory Legend Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Earn cool badges like "Toilet Whisperer," "Wipe Watcher," "Five-Star Flusher," and more for your contributions!</p>
                </CardContent>
              </Card>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
