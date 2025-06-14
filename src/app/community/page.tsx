
export const dynamic = 'force-dynamic'; // Ensures the page is dynamically rendered

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BadgeCheck, CheckSquare, Construction, Crown, DollarSign, Eye, GalleryHorizontalEnd, Shield, ShoppingBag, Trophy, Users, Zap, Wrench, Gift, FileText, Package, Shirt, SparklesIcon, AirVent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { generateCommunityImage } from "@/ai/flows/generate-community-image-flow";

export default async function CommunityPage() {
  let imageDataUri = "https://placehold.co/600x300.png";
  let imageAlt = "Flush Force community features coming soon placeholder";
  let generatedImageHint;

  try {
    const imageResult = await generateCommunityImage({
      prompt: "A vibrant and inclusive illustration representing the 'Flush Force' community teamwork and achievement, featuring stylized characters celebrating around a sparkling clean toilet trophy. Include subtle hints of badges or awards. The style should be modern, friendly, and inviting. Avoid text in the image."
    });
    if (imageResult.imageDataUri) {
      imageDataUri = imageResult.imageDataUri;
      imageAlt = "AI Generated image representing the Flush Force community teamwork and achievement";
    }
  } catch (error) {
    console.error("Failed to generate community image (expected during build if API key is not set, will fallback):", error);
    imageDataUri = "https://placehold.co/600x300.png";
    imageAlt = "Flush Force community features placeholder - image generation failed";
    generatedImageHint = "community teamwork achievement";
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
            <Users className="h-10 w-10" /> 🏆 Flush Force HQ
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Our community hub for top reviewers, MVPs, an awesome badge system, future merch, and more is evolving!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 flex flex-col items-center justify-center text-center">

          <div className="flex flex-col items-center text-center p-6 bg-amber-100/50 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 shadow-md max-w-2xl">
            <Construction className="h-16 w-16 text-amber-500 mb-4" />
            <h2 className="text-3xl font-headline text-secondary mb-2">
              More Awesome Features Under Construction!
            </h2>
            <p className="text-xl text-foreground/70 mt-2 mb-6">
              We're busy building this space to celebrate our amazing contributors. Get ready for leaderboards, detailed badge tracking, the "Cleanup Crusade Impact Gallery", fan spotlights, and more! Check back soon for "Potty Prestige" and XP trackers!
            </p>
            <Image
              src={imageDataUri}
              alt={imageAlt}
              width={600}
              height={300}
              className="rounded-lg shadow-md opacity-80"
              priority={imageDataUri.startsWith('data:')}
              data-ai-hint={generatedImageHint || "community teamwork achievement"}
            />
          </div>

          <div className="w-full max-w-4xl space-y-6 pt-6">
            <h3 className="text-2xl font-headline text-secondary border-b pb-2">What's Coming to Flush Force HQ?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <Trophy className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Flush Force Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Climb the ranks! See who's leading as "Toilet Titans" and "Bowl Bosses" in submitting helpful reviews. (Coming Soon!)</p>
                </CardContent>
              </Card>
              <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <Award className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Community MVPs & Spotlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Highlighting members who go above and beyond. We'll also feature "Restroom of the Month" and hilarious/heroic stall stories! (Coming Soon!)</p>
                </CardContent>
              </Card>
              <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <BadgeCheck className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Lavatory Legend Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Earn R&R Branded Badges like:
                    <ul className="list-disc list-inside pl-2 mt-1 text-xs">
                        <li><Zap size={12} className="inline mr-1" /> Throne Tester (First Review)</li>
                        <li><Users size={12} className="inline mr-1" /> Flush Force (5+ Reviews)</li>
                        <li><Shield size={12} className="inline mr-1" /> Porcelain Paladin (First Nomination Accepted)</li>
                        <li><Eye size={12} className="inline mr-1" /> Stall Sentinel (Report Privacy Violation)</li>
                        <li><Crown size={12} className="inline mr-1" /> Toilet Titan (Top Leaderboard)</li>
                        <li><Trophy size={12} className="inline mr-1" /> Lavatory Legend (Consistent Top Ratings)</li>
                        <li><CheckSquare size={12} className="inline mr-1" /> Wipe Watcher (Report Supply Issues)</li>
                        <li><Wrench size={12} className="inline mr-1" /> Relief Ranger (Community Cleanup)</li>
                        <li><Gift size={12} className="inline mr-1" /> Plunger Patron (Donate to support a cleanup)</li>
                        <li><FileText size={12} className="inline mr-1" /> Flush Fashionista (Purchased/Gifted Merch)</li>
                    </ul>
                     (Full tracking and display coming soon!)
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card-foreground/5 md:col-span-2 lg:col-span-3">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <GalleryHorizontalEnd className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Cleanup Crusade Impact Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Witness the transformations! A gallery showcasing before & after photos of restrooms revitalized through the "Cleanup Crusade" program, thanks to community nominations. Option to “Nominate Again” if standards slip. (Coming Soon!)</p>
                </CardContent>
              </Card>
              
              {/* Phase 1 Merch Drop Campaign Section */}
              <Card className="bg-card-foreground/10 lg:col-span-3 p-6 shadow-xl border-primary/50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-headline text-primary flex items-center justify-center gap-2">
                    <ShoppingBag className="h-8 w-8" /> Phase 1 Merch Drop – Flush Force Edition
                  </CardTitle>
                  <CardDescription className="text-md text-foreground/80 max-w-lg mx-auto">
                    Join the movement, wear the mission. Limited early-release gear for our day-one community members. Light the match, wipe the mirror, leave it better than you found it.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Flush Force Gloves */}
                    <Card className="border-border/30 flex flex-col items-center">
                      <CardHeader className="p-3 w-full">
                        <div className="relative w-full aspect-square">
                          <Image src="https://placehold.co/300x300.png" alt="Flush Force Gloves" fill className="rounded-md object-cover" data-ai-hint="nitrile gloves box" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0 text-center flex-grow flex flex-col justify-between w-full">
                        <div>
                          <h4 className="font-semibold text-lg text-accent flex items-center justify-center gap-1"><Package size={18}/> Flush Force Gloves</h4>
                          <p className="text-xs text-muted-foreground mt-1">Black nitrile gloves with an R&R seal wrap band. Sanitary, stylish, savage.</p>
                        </div>
                        <Button variant="secondary" size="sm" className="mt-3 w-full" disabled>Coming Soon</Button>
                      </CardContent>
                    </Card>
                    {/* Wipe Warrior Shirts */}
                    <Card className="border-border/30 flex flex-col items-center">
                       <CardHeader className="p-3 w-full">
                        <div className="relative w-full aspect-square">
                          <Image src="https://placehold.co/300x300.png" alt="Wipe Warrior Tee" fill className="rounded-md object-cover" data-ai-hint="minimalist white tee" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0 text-center flex-grow flex flex-col justify-between w-full">
                        <div>
                          <h4 className="font-semibold text-lg text-accent flex items-center justify-center gap-1"><Shirt size={18}/> Wipe Warrior Tee</h4>
                          <p className="text-xs text-muted-foreground mt-1">Minimalist white tee with the “Porcelain Rule Enforcer” seal. Soft, breathable, battle-ready.</p>
                        </div>
                        <Button variant="secondary" size="sm" className="mt-3 w-full" disabled>Coming Soon</Button>
                      </CardContent>
                    </Card>
                    {/* Certified Clean Stickers */}
                    <Card className="border-border/30 flex flex-col items-center">
                       <CardHeader className="p-3 w-full">
                        <div className="relative w-full aspect-square">
                          <Image src="https://placehold.co/300x300.png" alt="Certified Clean Sticker Pack" fill className="rounded-md object-cover" data-ai-hint="sticker sheet icons" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0 text-center flex-grow flex flex-col justify-between w-full">
                        <div>
                          <h4 className="font-semibold text-lg text-accent flex items-center justify-center gap-1"><SparklesIcon size={18}/> Certified Clean Sticker Pack</h4>
                          <p className="text-xs text-muted-foreground mt-1">8-pack of waterproof vinyl badge icons including Flush Force, Stall Sentinel, and Toilet Titan.</p>
                        </div>
                        <Button variant="secondary" size="sm" className="mt-3 w-full" disabled>Coming Soon</Button>
                      </CardContent>
                    </Card>
                     {/* Flush Force Freshener */}
                    <Card className="border-border/30 flex flex-col items-center">
                       <CardHeader className="p-3 w-full">
                        <div className="relative w-full aspect-square">
                          <Image src="https://placehold.co/300x300.png" alt="Flush Force Air Freshener" fill className="rounded-md object-cover" data-ai-hint="car air freshener" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0 text-center flex-grow flex flex-col justify-between w-full">
                        <div>
                          <h4 className="font-semibold text-lg text-accent flex items-center justify-center gap-1"><AirVent size={18}/> Flush Force Freshener</h4>
                          <p className="text-xs text-muted-foreground mt-1">Mint-orange blend. Hangs proud. Smells like justice.</p>
                        </div>
                        <Button variant="secondary" size="sm" className="mt-3 w-full" disabled>Coming Soon</Button>
                      </CardContent>
                    </Card>
                  </div>
                   <p className="text-sm text-muted-foreground text-center pt-6">
                    Future drops may include: Volunteer Tees, Holographic Badges, and the “Flush Fashion” Zine!
                  </p>
                  <p className="text-xs text-foreground/60 text-center mt-2">(Actual merch store and final designs are on the way!)</p>
                </CardContent>
              </Card>

               <Card className="bg-card-foreground/5 lg:col-span-3">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                  <DollarSign className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl text-accent">Support Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Love what we do? Want to help us improve more restrooms and expand our features?
                    Consider supporting Restroom Reviews! (Details coming soon on our <Link href="/support-us" className="text-primary underline hover:text-accent-foreground">Support Us page</Link>).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );

    