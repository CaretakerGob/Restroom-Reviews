import { Button } from '@/components/ui/button';
import ThePorcelainRuleModal from '@/components/ThePorcelainRuleModal';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-12 py-12">
      <Image 
        src="/logo.png" 
        alt="Restroom Reviews Official Logo" 
        width={200} 
        height={200} 
        data-ai-hint="company logo"
        className="rounded-lg shadow-lg"
        priority
      />
      
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-primary className="text-4xl font-bold mb-6 text-primary"">Restroom Reviews</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Your trusted guide to public restrooms. We believe everyone deserves a clean, comfortable, and safe restroom experience.
          Help us map out the best (and worst!) thrones in town. Submit your reviews and nominate businesses that need a little R&R (Restroom Renovation) for our "Clean It Up" program!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
        <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/submit-review">Submit a Review</Link>
        </Button>
        <Button size="lg" variant="secondary" asChild className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/nominate-business">Nominate a Business</Link>
        </Button>
      </section>
      
      <section className="max-w-xl p-6 bg-card rounded-lg shadow-lg border border-border">
        <h2 className="text-2xl font-bold mb-4 text-accent">The Porcelain Rule</h2>
        <p className="text-foreground/80 mb-4">
          Before you contribute, please familiarize yourself with our community guidelines. It's how we keep things flushing smoothly!
        </p>
        <ThePorcelainRuleModal />
      </section>

      <section className="max-w-2xl pt-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">Why Restroom Reviews?</h2>
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
            <p className="text-foreground/80">Nominate businesses for our "Clean It Up" program and make a real difference.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-accent">Community Powered</h3>
            <p className="text-foreground/80">Join a community dedicated to improving public restroom standards everywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
