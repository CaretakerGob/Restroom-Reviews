'use client';
import ConfettiPlaceholder from '@/components/ui/ConfettiPlaceholder';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'submission';

  let message = "Your submission has been successfully processed. We appreciate your contribution to making restrooms better for everyone!";
  if (type === 'review') {
    message = "Your review has been successfully submitted. Thank you for sharing your experience!";
  } else if (type === 'nomination') {
    message = "Your nomination has been successfully submitted. Thank you for helping us identify areas for improvement!";
  }

  return (
    <div className="relative min-h-[calc(100vh-var(--header-height)-var(--footer-height))] flex flex-col items-center justify-center text-center py-12 px-4">
      <ConfettiPlaceholder />
      <div className="z-10 relative bg-background/80 p-8 rounded-lg shadow-xl max-w-lg backdrop-blur-sm mt-[-10vh]">
        {/* Content is now inside ConfettiPlaceholder, this is a fallback or additional content area if needed */}
        <p className="text-foreground/90 text-xl mb-8">{message}</p>
        <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
