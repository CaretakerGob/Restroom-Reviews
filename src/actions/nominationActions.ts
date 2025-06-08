
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
    photo: formData.get('photo') as File | undefined, // File handling simplified, schema expects FileList-like
    noPeopleInPhoto: formData.get('noPeopleInPhoto') === 'on',
    agreeToTerms: formData.get('agreeToTerms') === 'on',
  };

  // Adjust 'photo' for schema validation if it's a File object
  const photoFile = formData.get('photo');
  let photoForValidation: any = undefined;
  if (photoFile instanceof File && photoFile.size > 0) {
    // Zod schema expects a FileList-like object or an array of files
    photoForValidation = [photoFile];
  }


  const validatedFields = nominationSchema.safeParse({
    ...rawFormData,
    photo: photoForValidation, // Use the adjusted photo data for validation
  });

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
    // TODO: Handle photo upload to Firebase Storage if validatedFields.data.photo (which will be a FileList-like) exists and has content

    console.log('Nomination Submitted:', nominationData);
    
  } catch (error) {
    console.error('Error submitting nomination:', error);
    return {
      message: 'An error occurred while submitting your nomination. Please try again.',
      success: false,
    };
  }
  
  redirect('/thank-you?type=nomination');
}
