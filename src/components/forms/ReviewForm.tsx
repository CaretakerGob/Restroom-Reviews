'use client';

import { useActionState, useEffect } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewSchema, type ReviewFormValues } from '@/schemas/reviewSchema';
import { submitReviewAction, type ReviewSubmissionState } from '@/actions/reviewActions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import StarRating from '@/components/ui/StarRating';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const initialFormState: ReviewSubmissionState = {
  message: '',
  success: false,
};

const ReviewForm = () => {
  const [state, formAction] = useActionState(submitReviewAction, initialFormState);
  const { toast } = useToast();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      cleanliness: 0,
      smell: 0,
      comfort: 0,
      soapSupplies: 0,
      stallSecurity: 0,
      agreeToTerms: false,
      noPeopleInPhoto: false,
    },
  });

  const photoFile = watch('photo');

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      // Redirect is handled by server action now
      // router.push('/thank-you?type=review');
    }
  }, [state, toast, router]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary">Submit a Restroom Review</CardTitle>
        <CardDescription>Share your experience to help others and improve facilities.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          {state.message && !state.success && (
             <Alert variant="destructive">
               <AlertTitle>Submission Error</AlertTitle>
               <AlertDescription>{state.message}</AlertDescription>
             </Alert>
           )}

          <div className="space-y-2">
            <Label htmlFor="userName">Your Name (Optional)</Label>
            <Input id="userName" {...register('userName')} />
            {errors.userName && <p className="text-sm text-destructive">{errors.userName.message}</p>}
            {state.errors?.userName && <p className="text-sm text-destructive">{state.errors.userName.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="locationName">Location Name</Label>
            <Input id="locationName" {...register('locationName')} />
            {errors.locationName && <p className="text-sm text-destructive">{errors.locationName.message}</p>}
            {state.errors?.locationName && <p className="text-sm text-destructive">{state.errors.locationName.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register('address')} />
            {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
            {state.errors?.address && <p className="text-sm text-destructive">{state.errors.address.join(', ')}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'cleanliness', label: 'Cleanliness' },
              { name: 'smell', label: 'Smell' },
              { name: 'comfort', label: 'Comfort' },
              { name: 'soapSupplies', label: 'Soap/Supplies' },
              { name: 'stallSecurity', label: 'Stall Security' },
            ].map(rating => (
              <div key={rating.name} className="space-y-2">
                <Label>{rating.label}</Label>
                <Controller
                  name={rating.name as keyof ReviewFormValues}
                  control={control}
                  render={({ field }) => (
                    <StarRating
                      initialValue={field.value as number}
                      onChange={(value) => {
                        setValue(rating.name as keyof ReviewFormValues, value, { shouldValidate: true });
                         // For useFormState, we need to manually create FormData compatible input
                        const hiddenInput = document.getElementById(`${rating.name}-hiddenInput`) as HTMLInputElement | null;
                        if (hiddenInput) hiddenInput.value = String(value);
                      }}
                    />
                  )}
                />
                {/* Hidden input for formAction compatibility */}
                <input type="hidden" id={`${rating.name}-hiddenInput`} name={rating.name} defaultValue="0" />

                {errors[rating.name as keyof ReviewFormValues] && (
                  <p className="text-sm text-destructive">{errors[rating.name as keyof ReviewFormValues]?.message}</p>
                )}
                 {state.errors?.[rating.name as keyof ReviewFormValues] && <p className="text-sm text-destructive">{state.errors[rating.name as keyof ReviewFormValues]?.join(', ')}</p>}
              </div>
            ))}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="photo">Photo (Optional)</Label>
            <Input id="photo" type="file" {...register('photo')} accept="image/*" />
            {errors.photo && <p className="text-sm text-destructive">{errors.photo.message as string}</p>}
            {state.errors?.photo && <p className="text-sm text-destructive">{state.errors.photo.join(', ')}</p>}

            {photoFile && photoFile.length > 0 && (
              <div className="flex items-center space-x-2 mt-2">
                <Controller
                  name="noPeopleInPhoto"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="noPeopleInPhoto"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      name="noPeopleInPhoto"
                    />
                  )}
                />
                <Label htmlFor="noPeopleInPhoto" className="text-sm font-normal">
                  I confirm no people appear in my photo.
                </Label>
              </div>
            )}
            {errors.noPeopleInPhoto && <p className="text-sm text-destructive">{errors.noPeopleInPhoto.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">Description / Comments</Label>
            <Textarea id="comments" {...register('comments')} rows={5} />
            {errors.comments && <p className="text-sm text-destructive">{errors.comments.message}</p>}
            {state.errors?.comments && <p className="text-sm text-destructive">{state.errors.comments.join(', ')}</p>}
          </div>

          <div className="flex items-center space-x-2">
             <Controller
                name="agreeToTerms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="agreeToTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    name="agreeToTerms" // Ensure name attribute for formAction
                  />
                )}
              />
            <Label htmlFor="agreeToTerms" className="text-sm font-normal">
              I agree to The Porcelain Rule.
            </Label>
          </div>
          {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms.message}</p>}
          {state.errors?.agreeToTerms && <p className="text-sm text-destructive">{state.errors.agreeToTerms.join(', ')}</p>}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ReviewForm;
