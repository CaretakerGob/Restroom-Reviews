
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { TrendingUp, Rocket, Users, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-headline text-primary text-center">About Restroom Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team working on restroom improvements"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full md:w-1/2 object-cover"
              data-ai-hint="community people"
            />
            <div className="md:w-1/2">
              <p>
                Restroom Reviews was born from a simple, universal need: finding a clean, safe, and comfortable public restroom.
                We've all been there – that desperate search, the anxiety of the unknown, the relief of finding a decent facility, or the dismay of a… less-than-stellar experience.
              </p>
              <p className="mt-4">
                Our mission is to empower individuals with the information they need to navigate the world of public restrooms with confidence.
                By creating a community-driven platform, we aim to shine a light on the best thrones out there and encourage improvements where they're needed most through our "Cleanup Crusade" initiative.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-headline text-secondary pt-6 border-t mt-6">Our Vision</h2>
          <p>
            We envision a world where access to clean and well-maintained public restrooms is a given, not a gamble.
            Through transparent reviews and our "Cleanup Crusade" initiative, we strive to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Provide a reliable resource for finding quality restrooms.</li>
            <li>Encourage businesses and public entities to prioritize restroom hygiene and maintenance.</li>
            <li>Foster a community that values and advocates for better public amenities.</li>
            <li>Make every pit stop a pleasant one!</li>
          </ul>

          <h2 className="text-3xl font-headline text-secondary pt-6 border-t mt-6">How It Works</h2>
          <p>
            Restroom Reviews is powered by you! Users like yourself can:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Share Stall Stories:</strong> Share your detailed experiences, rating restrooms on key aspects like cleanliness, smell, comfort, supplies, and security.</li>
            <li><strong>Upload Photos:</strong> A picture speaks volumes! (Just remember The Proper Porcelain Policy - no people in photos!)</li>
            <li><strong>Nominate for "Cleanup Crusade":</strong> Know a restroom that desperately needs attention? Nominate it for our program, and we'll work to encourage positive change.</li>
            <li><strong>Drop Anonymous Tips:</strong> Heard a horror story or found a hidden gem but don't want to do a full review? Let us know!</li>
          </ul>
          
          <h2 className="text-3xl font-headline text-secondary pt-6 border-t mt-6 flex items-center gap-2"><Calendar className="h-7 w-7" />Our Story / The Journey of R&R</h2>
          <Card className="bg-card-foreground/5 p-4">
            <CardContent className="space-y-3 text-base">
                <div className="flex items-start gap-3">
                    <Rocket className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">The Spark (Early 2024)</h4>
                        <p className="text-sm text-muted-foreground">Born from too many "uh-oh" restroom moments, the idea for a dedicated review platform takes shape.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">Community Launch (Mid 2024)</h4>
                        <p className="text-sm text-muted-foreground">Restroom Reviews officially opens its stall doors to the public! First reviews and nominations start trickling in.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">The Future (Now & Beyond!)</h4>
                        <p className="text-sm text-muted-foreground">Expanding features like the Flush Force HQ, Lavatory Locator enhancements, the Cleanup Crusade Impact Gallery, and much more. Join us as we grow!</p>
                    </div>
                </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-xl font-semibold">
            Join us in our quest for restroom royalty. Together, we can make every pit stop a pleasant one!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
