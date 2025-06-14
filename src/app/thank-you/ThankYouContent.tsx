
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'submission';

  let message = "Your submission has been successfully processed. We appreciate your contribution to making restrooms better for everyone!";
  if (type === 'review') {
    message = "Your review has been successfully submitted. Thank you for sharing your experience!";
  } else if (type === 'nomination') {
    message = "Your nomination has been successfully submitted. Thank you for helping us identify areas for improvement!";
  } else if (type === 'social-submission') {
    message = "Your social media post has been successfully submitted for review. Thanks for sharing with the R&R community! We'll check it out soon.";
  }


  return (
    <>
      <p className="text-foreground/90 text-xl mb-8">{message}</p>
      <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
        <Link href="/">Return to Homepage</Link>
      </Button>
      {type === 'social-submission' && (
         <Button asChild variant="outline" size="lg" className="mt-4 shadow-md hover:shadow-lg transition-shadow">
            <Link href="/submit-social-review">Submit Another Post</Link>
        </Button>
      )}
    </>
  );
}
