
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
import Link from 'next/link';

const ThePorcelainRuleModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">The Porcelain Rule</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">The Porcelain Rule</DialogTitle>
          <DialogDescription className="text-foreground">
            Our community guidelines for respectful and helpful reviews & nominations.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-3 text-sm text-foreground">
          <p><strong>Be Honest & Fair:</strong> Provide genuine feedback based on your experience. Exaggerations or false claims don't help anyone.</p>
          <p><strong>Be Specific:</strong> Details matter! Mention specifics about cleanliness, amenities, smell, and security.</p>
          <p><strong>Keep it Clean (Figuratively!):</strong> No offensive language, hate speech, or personal attacks.</p>
          <p><strong>Photo Submissions: Privacy First:</strong> If you upload photos, ensure they are relevant and DO NOT include any people or personally identifiable information.</p>
          <p><strong>Respect Privacy (General):</strong> Do not share personal information about restroom staff or other patrons.</p>
          <p><strong>Constructive Criticism for Nominations:</strong> When nominating for "Clean It Up," be clear and constructive.</p>
          
          <div className="pt-2 mt-2 border-t">
            <h4 className="font-semibold text-base text-secondary mt-2 mb-1">Content Submission & Usage:</h4>
            <p>By submitting reviews, nominations, or photos ("Submissions"), you agree:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>You confirm no identifiable individuals are in any photos.</li>
              <li>You grant Restroom Reviews a license to use, review, edit, adapt, publish, and display your Submissions.</li>
              <li>You understand Restroom Reviews may manage submissions according to our content strategy and guidelines.</li>
            </ul>
            <p className="mt-1">We are committed to respecting privacy and these guidelines in all uses of submitted material.</p>
          </div>

          <p className="mt-4">
            For full details, please see the <Link href="/porcelain-rule" className="text-primary underline hover:text-accent">full Porcelain Rule page</Link>.
          </p>
          <p className="font-semibold mt-2">By submitting any content, you agree to abide by The Porcelain Rule in its entirety. Let's keep Restroom Reviews a helpful and respectful community!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThePorcelainRuleModal;
