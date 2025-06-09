
'use client';

import { useActionState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewSchema, type ReviewFormValues } from '@/schemas/reviewSchema';
import { submitReviewAction, type ReviewSubmissionState } from '@/actions/reviewActions';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import StarRating from '@/components/ui/StarRating';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { UploadCloud, Edit3, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThePorcelainRuleModal from '@/components/ThePorcelainRuleModal';

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
      userName: '',
      locationName: '',
      address: '',
      cleanliness: 0,
      smell: 0,
      comfort: 0,
      soapSupplies: 0,
      stallSecurity: 0,
      photo: undefined,
      noPeopleInPhoto: false,
      comments: '',
      agreeToTerms: false,
      allowSocialShare: false, // New field
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
  }, [state, toast, router]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary flex items-center gap-2">
           <Edit3 className="h-8 w-8" /> Share Your Stall Story
        </CardTitle>
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
                        const hiddenInput = document.getElementById(`${rating.name}-hiddenInput`) as HTMLInputElement | null;
                        if (hiddenInput) hiddenInput.value = String(value);
                      }}
                    />
                  )}
                />
                <input type="hidden" id={`${rating.name}-hiddenInput`} name={rating.name} defaultValue="0" />
                {errors[rating.name as keyof ReviewFormValues] && (
                  <p className="text-sm text-destructive">{errors[rating.name as keyof ReviewFormValues]?.message}</p>
                )}
                 {state.errors?.[rating.name as keyof ReviewFormValues] && <p className="text-sm text-destructive">{state.errors[rating.name as keyof ReviewFormValues]?.join(', ')}</p>}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label>Photo (Optional)</Label>
            <div className="flex items-center gap-3">
                <Label
                    htmlFor="review-photo-input"
                    className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'cursor-pointer'
                    )}
                >
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Choose File
                </Label>
                <Input
                    id="review-photo-input"
                    type="file"
                    {...register('photo')}
                    accept="image/*"
                    className="sr-only"
                />
                {photoFile && photoFile.length > 0 ? (
                    <span className="text-sm text-muted-foreground truncate max-w-xs">{photoFile[0].name}</span>
                ) : (
                    <span className="text-sm text-muted-foreground">No file selected</span>
                )}
            </div>
            {errors.photo && <p className="text-sm text-destructive mt-1">{errors.photo.message as string}</p>}
            {state.errors?.photo && <p className="text-sm text-destructive mt-1">{state.errors.photo.join(', ')}</p>}

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
            {state.errors?.noPeopleInPhoto && <p className="text-sm text-destructive">{state.errors.noPeopleInPhoto.join(', ')}</p>}
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
                    name="agreeToTerms"
                  />
                )}
              />
            <Label htmlFor="agreeToTerms" className="text-sm font-normal flex items-center gap-1">
              I agree to <ThePorcelainRuleModal />
            </Label>
          </div>
          {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms.message}</p>}
          {state.errors?.agreeToTerms && <p className="text-sm text-destructive">{state.errors.agreeToTerms.join(', ')}</p>}

          <div className="flex items-start space-x-2 pt-2">
            <Controller
              name="allowSocialShare"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="allowSocialShare"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  name="allowSocialShare"
                  className="mt-1"
                />
              )}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="allowSocialShare" className="text-sm font-normal flex items-center gap-1">
                <Share2 size={14} className="mr-1"/> Okay to feature this submission on social media?
              </Label>
              <p className="text-xs text-muted-foreground">
                If selected, we may reach out to you. Your username may be shown.
              </p>
            </div>
          </div>
          {/* No error display for this optional field for now */}

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Stall Story'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ReviewForm;
