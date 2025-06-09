
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
        <Button variant="outline" size="sm" className="text-xs p-1 md:p-2 md:text-sm">View Porcelain Rules</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">Porcelain Rules</DialogTitle>
          <DialogDescription className="text-foreground">
            Key community guidelines for respectful reviews & nominations. Our "PP" (Primary Principles!) help keep things flushing smoothly.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-3 text-sm text-foreground">
          <p><strong>Be Honest & Fair:</strong> Provide genuine feedback.</p>
          <p><strong>Be Specific:</strong> Details matter!</p>
          <p><strong>Keep it Clean (Figuratively!):</strong> No offensive language.</p>
          <p><strong>Photo Submissions: Privacy First:</strong> DO NOT include any people in photos.</p>
          <p><strong>Respect Privacy (General):</strong> Focus on the facility.</p>
          <p><strong>Constructive Criticism for Nominations:</strong> Be clear and constructive.</p>
          
          <div className="pt-2 mt-2 border-t">
            <h4 className="font-semibold text-base text-secondary mt-2 mb-1">Content Submission & Usage:</h4>
            <p>By submitting content, you grant Restroom Reviews a license to use it and confirm you have rights to share it (especially photos without people).</p>
          </div>

          <p className="mt-4">
            For full details, please see the <Link href="/porcelain-rule" className="text-primary underline hover:text-accent" target="_blank" rel="noopener noreferrer">full Porcelain Rules page</Link>.
          </p>
          <p className="font-semibold mt-2">By submitting any content, you agree to abide by the Porcelain Rules in their entirety. Let's keep Restroom Reviews a helpful and respectful community!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThePorcelainRuleModal;
