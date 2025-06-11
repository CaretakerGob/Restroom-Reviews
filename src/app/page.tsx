
import { Button } from '@/components/ui/button';
import ThePorcelainRuleModal from '@/components/ThePorcelainRuleModal';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialSlider from '@/components/TestimonialSlider';
import { HandHelping, Edit3, Users, MapPin, Instagram, Youtube, Info, MessageSquareText, ShieldCheck, Film } from 'lucide-react';

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.73-.21.52-.3.97-.28 1.5.05.92.48 1.86 1.17 2.55.88.88 2.13 1.31 3.31 1.11.09-1.54.03-3.08.02-4.61h2.08Z"/>
  </svg>
);


export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-12 py-12">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rotb-companion.firebasestorage.app/o/Restroom%20Reviews%2FLogos%2FR%26R%20LOGO_THREE_sparkle.png?alt=media&token=0960bfdf-0780-4f91-83eb-61bbddb13280"
        alt="Restroom Reviews Official Logo"
        width={200}
        height={200}
        data-ai-hint="company logo"
        className="rounded-lg shadow-lg"
        priority
      />

      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Restroom Reviews</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Your trusted guide to public restrooms. We believe everyone deserves a clean, comfortable, and safe restroom experience.
          Help us map out the best (and worst!) thrones in town. Share your stall stories and nominate businesses that need a little R&R (Restroom Renovation) for our "Cleanup Crusade"!
        </p>
      </section>

      <section className="w-full bg-card/50 p-6 rounded-lg shadow-md border border-border max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Info className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold text-secondary">First Time Here? Welcome!</h2>
        </div>
        <p className="text-foreground/80 mb-3">
          Glad to have you in the R&R community! Here’s how to get started:
        </p>
        <ul className="list-disc list-inside text-foreground/70 space-y-1 text-left mx-auto max-w-md">
          <li><strong>Share a Stall Story:</strong> Found a great (or ghastly) restroom? Let us know!</li>
          <li><strong>Nominate for Cleanup Crusade:</strong> See a restroom that needs serious help? Nominate it!</li>
          <li><strong>Find a Relief Route:</strong> Use our map to find reviewed restrooms near you.</li>
        </ul>
        <p className="mt-3 text-foreground/80">
          Before you dive in, please check out our <Link href="/porcelain-rule" className="text-primary underline hover:text-accent">Porcelain Rules</Link> to keep things flushing smoothly.
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
        <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="h-7 w-7 text-accent" />
            <h2 className="text-2xl font-bold text-accent">Porcelain Rules</h2>
        </div>
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
            <p className="text-foreground/80">Nominate businesses for our "Cleanup Crusade" and make a real difference.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-accent">Community Powered</h3>
            <p className="text-foreground/80">Join a community dedicated to improving public restroom standards everywhere.</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-3xl pt-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Film className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Hot Off The Presses! 🚽✨</h2>
        </div>
        <p className="text-lg text-foreground/80 mb-8">
          Catch our latest features, fails, and flush-worthy finds on social media!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram Embed Placeholder */}
          <div className="p-4 bg-card rounded-lg shadow-lg border border-border">
            <h3 className="font-bold text-2xl mb-3 text-accent flex items-center gap-2"><Instagram size={28}/>Featured on Instagram</h3>
            <div className="aspect-square bg-muted rounded overflow-hidden mb-4">
              <Image 
                src="https://placehold.co/500x500.png" 
                alt="Instagram Post Placeholder" 
                width={500} 
                height={500} 
                className="object-cover w-full h-full"
                data-ai-hint="social media post" 
              />
            </div>
            <p className="text-sm text-foreground/70 mb-4">Check out our latest "Restroom of the Month" or a hilarious stall story highlight!</p>
            <Button variant="outline" asChild className="w-full">
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                Visit our Instagram <Instagram size={16} className="ml-2"/>
              </a>
            </Button>
          </div>

          {/* TikTok Embed Placeholder */}
          <div className="p-4 bg-card rounded-lg shadow-lg border border-border">
            <h3 className="font-bold text-2xl mb-3 text-accent flex items-center gap-2"><TikTokIcon />Trending on TikTok</h3>
            <div className="aspect-[9/16] bg-muted rounded overflow-hidden mb-4">
              <Image 
                src="https://placehold.co/300x533.png" 
                alt="TikTok Video Placeholder" 
                width={300} 
                height={533} 
                className="object-cover w-full h-full"
                data-ai-hint="short video content"
              />
            </div>
            <p className="text-sm text-foreground/70 mb-4">Laugh (or cry) with our latest restroom reels, cleanup transformations, or funny fails!</p>
            <Button variant="outline" asChild className="w-full">
              <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                Watch on TikTok <TikTokIcon />
              </a>
            </Button>
          </div>
        </div>
         <p className="text-sm text-muted-foreground mt-8">(Psst! Remember to update these links with your actual social media profiles!)</p>
      </section>

       <section className="w-full max-w-2xl pt-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">Follow Us & Join the Movement!</h2>
        <p className="text-lg text-foreground/80 mb-6">
          Get the latest updates, see featured reviews, and join the conversation on our social channels!
          <br /> We'll feature "Restroom of the Month" and "Weekly Hilarious/Heroic Stall Stories" soon!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary-foreground hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground hover:text-accent transition-colors">
            <Instagram size={32} />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-secondary-foreground hover:text-accent transition-colors">
            <Youtube size={32} />
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-secondary-foreground hover:text-accent transition-colors">
            <TikTokIcon />
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-4">(Links are placeholders - update them with your actual social media profiles!)</p>
      </section>

      <section className="w-full max-w-md pt-8">
        <Button size="lg" variant="default" asChild className="shadow-md hover:shadow-lg transition-shadow w-full">
          <Link href="/community"><Users className="mr-2 h-5 w-5" /> Meet the Flush Force</Link>
        </Button>
      </section>
    </div>
  );
}
