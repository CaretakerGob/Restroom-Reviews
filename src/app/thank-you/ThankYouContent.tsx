
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
  }

  return (
    <>
      <p className="text-foreground/90 text-xl mb-8">{message}</p>
      <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </>
  );
}
