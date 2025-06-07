'use server';

import { reviewSchema, type ReviewFormValues } from '@/schemas/reviewSchema';
import { summarizeReview } from '@/ai/flows/summarize-review';
import { redirect } from 'next/navigation';

export interface ReviewSubmissionState {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof ReviewFormValues, string[]>>;
  summary?: string;
}

export async function submitReviewAction(
  prevState: ReviewSubmissionState,
  formData: FormData
): Promise<ReviewSubmissionState> {
  const rawFormData = {
    userName: formData.get('userName') as string || undefined,
    locationName: formData.get('locationName') as string,
    address: formData.get('address') as string,
    cleanliness: parseInt(formData.get('cleanliness') as string, 10),
    smell: parseInt(formData.get('smell') as string, 10),
    comfort: parseInt(formData.get('comfort') as string, 10),
    soapSupplies: parseInt(formData.get('soapSupplies') as string, 10),
    stallSecurity: parseInt(formData.get('stallSecurity') as string, 10),
    // photo: formData.get('photo') as File | undefined, // File handling needs client-side processing first or direct upload
    comments: formData.get('comments') as string,
    agreeToTerms: formData.get('agreeToTerms') === 'on',
    noPeopleInPhoto: formData.get('noPeopleInPhoto') === 'on',
  };
  
  // Note: File handling for 'photo' is simplified here.
  // In a real app, you'd handle file uploads to Firebase Storage separately.
  // For now, we'll just validate its presence if it were passed correctly.
  // The current zod schema expects a FileList-like object if a file is present.

  const validatedFields = reviewSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { comments, ...reviewData } = validatedFields.data;

  try {
    // Call AI to summarize the review
    const aiSummaryResult = await summarizeReview({ reviewText: comments });
    const summary = aiSummaryResult.summary;

    // TODO: Save reviewData, comments, and summary to Firestore
    // TODO: Handle photo upload to Firebase Storage if validatedFields.data.photo exists

    console.log('Review Submitted:', reviewData);
    console.log('Original Comments:', comments);
    console.log('AI Summary:', summary);

    // On successful submission (after saving to DB and processing photo)
    // we redirect. For now, we assume success after AI summary.
  } catch (error) {
    console.error('Error submitting review or generating summary:', error);
    return {
      message: 'An error occurred while submitting your review. Please try again.',
      success: false,
    };
  }
  
  redirect('/thank-you?type=review');
  // Unreachable, but satisfies TS
  return { 
    message: 'Review submitted successfully!', 
    success: true,
  };
}
