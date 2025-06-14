
import SocialReviewForm from '@/components/forms/SocialReviewForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Share Your Social Review | R&R',
  description: 'Submit your TikTok, Instagram, YouTube Shorts, or Twitter/X posts about restrooms for the R&R community!',
};

export default function SubmitSocialReviewPage() {
  return (
    <div className="py-8">
      <SocialReviewForm />
    </div>
  );
}
