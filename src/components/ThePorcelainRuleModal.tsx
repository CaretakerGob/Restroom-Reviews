'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ThePorcelainRuleModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">The Porcelain Rule</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">The Porcelain Rule</DialogTitle>
          <DialogDescription className="text-foreground">
            Our community guidelines for respectful and helpful reviews.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-2 text-sm text-foreground">
          <p><strong>Be Honest & Fair:</strong> Provide genuine feedback based on your experience. Exaggerations or false claims don't help anyone.</p>
          <p><strong>Be Specific:</strong> Details matter! Mention specifics about cleanliness, amenities, smell, and security. "It was clean" is good, but "The floors were spotless and it smelled like lemons" is better.</p>
          <p><strong>Keep it Clean (Figuratively!):</strong> No offensive language, hate speech, or personal attacks. We're here to discuss restrooms, not start flame wars.</p>
          <p><strong>Photos (Optional but Encouraged):</strong> A picture is worth a thousand words. If you upload photos, ensure they are relevant and DO NOT include any people for privacy reasons.</p>
          <p><strong>Respect Privacy:</strong> Do not share personal information about restroom staff or other patrons.</p>
          <p><strong>Constructive Criticism for Nominations:</strong> When nominating a business for the "Clean It Up" program, be clear and constructive about why they need improvement. Help us help them!</p>
          <p>By submitting a review or nomination, you agree to abide by The Porcelain Rule. Let's keep Throne Advisor a helpful and respectful community!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThePorcelainRuleModal;
