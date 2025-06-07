'use server';

import { nominationSchema, type NominationFormValues } from '@/schemas/nominationSchema';
import { redirect } from 'next/navigation';

export interface NominationSubmissionState {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof NominationFormValues, string[]>>;
}

export async function submitNominationAction(
  prevState: NominationSubmissionState,
  formData: FormData
): Promise<NominationSubmissionState> {
  
  const rawFormData = {
    userNameEmail: formData.get('userNameEmail') as string || undefined,
    businessName: formData.get('businessName') as string,
    businessLocation: formData.get('businessLocation') as string,
    reason: formData.get('reason') as string,
    // photo: formData.get('photo') as File | undefined, // File handling simplified
  };

  const validatedFields = nominationSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { ...nominationData } = validatedFields.data;

  try {
    // TODO: Save nominationData to Firestore
    // TODO: Handle photo upload to Firebase Storage if validatedFields.data.photo exists

    console.log('Nomination Submitted:', nominationData);
    
  } catch (error) {
    console.error('Error submitting nomination:', error);
    return {
      message: 'An error occurred while submitting your nomination. Please try again.',
      success: false,
    };
  }
  
  redirect('/thank-you?type=nomination');
   // Unreachable, but satisfies TS
  return { 
    message: 'Nomination submitted successfully!', 
    success: true,
  };
}
