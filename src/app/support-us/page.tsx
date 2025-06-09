
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Heart, Coffee, Users, Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Restroom Reviews',
  description: 'Help us keep Restroom Reviews running and improve public restrooms everywhere. Learn how you can support our mission.',
};

export default function SupportUsPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
            <Heart className="h-10 w-10" /> Support Restroom Reviews
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Help us keep the porcelain polished and the reviews flowing! Your support enables us to maintain and improve this platform, champion cleaner restrooms, and expand our "Cleanup Crusade."
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 text-center">
          
          <div className="max-w-md mx-auto">
            <Image 
              src="https://placehold.co/600x300.png" 
              alt="Illustration of community supporting a cause"
              width={600} 
              height={300}
              className="rounded-lg shadow-md mb-6"
              data-ai-hint="community support charity"
            />
            <p className="text-foreground/70 mb-6">
              Restroom Reviews is a community-driven initiative. While we're not set up for donations or sponsorships just yet, your enthusiasm and future support mean the world to us!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <Card className="bg-card-foreground/5">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center gap-2"><DollarSign /> Future Ways to Contribute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">We're exploring ways for you to support us financially in the future, such as:</p>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <p><strong>Buy Us a Coffee / Patreon:</strong> Small contributions to help cover server costs and development.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <p><strong>Sponsor a Stall / Cleanup Crusade:</strong> Directly fund a restroom cleanup or contribute to our campaign efforts.</p>
                </div>
                 <p className="text-xs text-muted-foreground mt-2">(These are ideas for the future - stay tuned!)</p>
              </CardContent>
            </Card>

            <Card className="bg-card-foreground/5">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center gap-2"><Gift /> Other Ways to Help Now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                 <p className="text-sm text-muted-foreground">Even without financial contributions, you can make a huge impact:</p>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                   <p><strong>Spread the Word:</strong> Tell your friends, family, and social networks about Restroom Reviews!</p>
                </div>
                <div className="flex items-center gap-2">
                  <Edit3 className="h-5 w-5 text-primary" /> 
                  <p><strong>Submit Reviews & Nominations:</strong> Your content is the lifeblood of our platform.</p>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquarePlus className="h-5 w-5 text-primary" />
                  <p><strong>Provide Feedback:</strong> Help us improve! Use our <Link href="/contact" className="text-primary underline">Contact Page</Link>.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="pt-6">
            <h3 className="text-2xl font-headline text-secondary mb-3">Stay Tuned!</h3>
            <p className="text-foreground/70 max-w-xl mx-auto">
              We'll announce official support channels and sponsorship opportunities here and on our social media. 
              For now, your active participation by reviewing and nominating is the best support we could ask for!
            </p>
            <Button asChild size="lg" className="mt-6 shadow-md">
              <Link href="/community">Visit Flush Force HQ</Link>
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
