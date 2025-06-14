
'use server';

import { socialReviewSchema, type SocialReviewFormValues, type SocialPlatform } from '@/schemas/socialReviewSchema';
import { redirect } from 'next/navigation';

export interface SocialReviewSubmissionState {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof SocialReviewFormValues, string[]>>;
}

export async function submitSocialReviewAction(
  prevState: SocialReviewSubmissionState,
  formData: FormData
): Promise<SocialReviewSubmissionState> {
  
  const rawFormData = {
    username: formData.get('username') as string || undefined,
    locationName: formData.get('locationName') as string,
    platform: formData.get('platform') as SocialPlatform, // Zod will validate if it's part of the enum
    postLink: formData.get('postLink') as string,
    quickReview: formData.get('quickReview') as string || undefined,
    cleanupAction: formData.get('cleanupAction') === 'on',
    reviewNickname: formData.get('reviewNickname') as string || undefined,
    agreeToTermsAndRepost: formData.get('agreeToTermsAndRepost') === 'on',
  };

  const validatedFields = socialReviewSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.log("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
      message: 'Validation failed. Please check your input.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { ...socialReviewData } = validatedFields.data;

  try {
    // In a real application, you would save this data to a database (e.g., Firestore)
    // or send it to a moderation queue.
    console.log('Social Review Submitted:', socialReviewData);
    // For now, we simulate success.
    
  } catch (error) {
    console.error('Error submitting social review:', error);
    return {
      message: 'An error occurred while submitting your social review. Please try again.',
      success: false,
    };
  }
  
  // If successful, redirect to a thank-you page
  redirect('/thank-you?type=social-submission');
}
