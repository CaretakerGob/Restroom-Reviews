
import { Button } from '@/components/ui/button';
import ThePorcelainRuleModal from '@/components/ThePorcelainRuleModal';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialSlider from '@/components/TestimonialSlider';
import { HandHelping, Edit3, Users, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-12 py-12">
      <Image 
        src="https://firebasestorage.googleapis.com/v0/b/rotb-companion.firebasestorage.app/o/Restroom%20Reviews%2FLogos%2FR%26R%20LOGO_THREE_sparkle.png?alt=media&token=0960bfdf-0780-4f91-83eb-61bbddb13280"
        alt="Throne Advisor Official Logo" 
        width={200} 
        height={200} 
        data-ai-hint="company logo"
        className="rounded-lg shadow-lg"
        priority
      />
      
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Throne Advisor</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Your trusted guide to public restrooms. We believe everyone deserves a clean, comfortable, and safe restroom experience.
          Help us map out the best (and worst!) thrones in town. Share your stall stories and nominate businesses that need a little R&R (Restroom Renovation) for our "Cleanup Crusade"!
        </p>
      </section>

      <section className="w-full flex justify-center">
        <TestimonialSlider />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/submit-review"><Edit3 className="mr-2 h-5 w-5" /> Share a Stall Story</Link>
        </Button>
        <Button size="lg" variant="secondary" asChild className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/nominate-business"><HandHelping className="mr-2 h-5 w-5" /> Nominate for Cleanup Crusade</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="shadow-md hover:shadow-lg transition-shadow md:col-span-2">
          <Link href="/map"><MapPin className="mr-2 h-5 w-5" /> Find a Relief Route</Link>
        </Button>
      </section>
      
      <section className="max-w-xl p-6 bg-card rounded-lg shadow-lg border border-border">
        <h2 className="text-2xl font-bold mb-4 text-accent">The Proper Porcelain Policy</h2>
        <p className="text-foreground/80 mb-4">
          Before you contribute, please familiarize yourself with our community guidelines. It's how we keep things flushing smoothly!
        </p>
        <ThePorcelainRuleModal />
      </section>

      <section className="max-w-2xl pt-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">Why Throne Advisor?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-accent">Find Comfort</h3>
            <p className="text-foreground/80">Never get caught out again. Find clean and reliable restrooms when you need them most.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-accent">Share Your Voice</h3>
            <p className="text-foreground/80">Your reviews help others and encourage businesses to maintain better facilities.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-accent">Promote Cleanliness</h3>
            <p className="text-foreground/80">Nominate businesses for our "Cleanup Crusade" and make a real difference.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-accent">Community Powered</h3>
            <p className="text-foreground/80">Join a community dedicated to improving public restroom standards everywhere.</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-md pt-8">
        <Button size="lg" variant="default" asChild className="shadow-md hover:shadow-lg transition-shadow w-full">
          <Link href="/community"><Users className="mr-2 h-5 w-5" /> Meet the Flush Force</Link>
        </Button>
      </section>
    </div>
  );
}
