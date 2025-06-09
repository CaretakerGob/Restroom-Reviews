
export const dynamic = 'force-dynamic'; // Ensures the page is dynamically rendered

import React, { Suspense } from 'react';
import ConfettiPlaceholder from '@/components/ui/ConfettiPlaceholder';
import ThankYouContent from './ThankYouContent';

export default function ThankYouPage() {
  return (
    <ConfettiPlaceholder>
      <Suspense fallback={<div className="text-center"><p className="text-foreground/80 text-lg">Loading details...</p></div>}>
        <ThankYouContent />
      </Suspense>
    </ConfettiPlaceholder>
  );
}
