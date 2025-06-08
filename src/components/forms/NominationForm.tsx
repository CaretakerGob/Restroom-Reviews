
'use client';

import { useActionState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nominationSchema, type NominationFormValues } from '@/schemas/nominationSchema';
import { submitNominationAction, type NominationSubmissionState } from '@/actions/nominationActions';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { UploadCloud, HandHelping } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThePorcelainRuleModal from '@/components/ThePorcelainRuleModal';

const initialFormState: NominationSubmissionState = {
  message: '',
  success: false,
};

const NominationForm = () => {
  const [state, formAction] = useActionState(submitNominationAction, initialFormState);
  const { toast } = useToast();
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<NominationFormValues>({
    resolver: zodResolver(nominationSchema),
    defaultValues: {
      userNameEmail: '',
      businessName: '',
      businessLocation: '',
      reason: '',
      photo: undefined,
      noPeopleInPhoto: false,
      agreeToTerms: false,
    }
  });

  const watchedPhoto = watch('photo');

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
    }
  }, [state, toast, router]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary flex items-center gap-2">
          <HandHelping className="h-8 w-8" /> Nominate for the Cleanup Crusade
        </CardTitle>
        <CardDescription>Know a place that needs some R&R (Restroom Renovation)? Let us know!</CardDescription>
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
            <Label htmlFor="userNameEmail">Your Name/Email (Optional)</Label>
            <Input id="userNameEmail" type="email" {...register('userNameEmail')} />
            {errors.userNameEmail && <p className="text-sm text-destructive">{errors.userNameEmail.message}</p>}
            {state.errors?.userNameEmail && <p className="text-sm text-destructive">{state.errors.userNameEmail.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" {...register('businessName')} />
            {errors.businessName && <p className="text-sm text-destructive">{errors.businessName.message}</p>}
            {state.errors?.businessName && <p className="text-sm text-destructive">{state.errors.businessName.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessLocation">Business Location (Address or City/Area)</Label>
            <Input id="businessLocation" {...register('businessLocation')} />
            {errors.businessLocation && <p className="text-sm text-destructive">{errors.businessLocation.message}</p>}
            {state.errors?.businessLocation && <p className="text-sm text-destructive">{state.errors.businessLocation.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Nomination</Label>
            <Textarea id="reason" {...register('reason')} rows={5} />
            {errors.reason && <p className="text-sm text-destructive">{errors.reason.message}</p>}
            {state.errors?.reason && <p className="text-sm text-destructive">{state.errors.reason.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label>Photo (Optional)</Label>
            <div className="flex items-center gap-3">
              <Label
                htmlFor="nomination-photo-input"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'cursor-pointer'
                )}
              >
                <UploadCloud className="mr-2 h-4 w-4" />
                Choose File
              </Label>
              <Input
                id="nomination-photo-input"
                type="file"
                {...register('photo')}
                accept="image/*"
                className="sr-only"
              />
              {watchedPhoto && watchedPhoto.length > 0 ? (
                <span className="text-sm text-muted-foreground truncate max-w-xs">{watchedPhoto[0].name}</span>
              ) : (
                <span className="text-sm text-muted-foreground">No file selected</span>
              )}
            </div>
            {errors.photo && <p className="text-sm text-destructive mt-1">{errors.photo.message as string}</p>}
            {state.errors?.photo && <p className="text-sm text-destructive mt-1">{state.errors.photo.join(', ')}</p>}
            
            {watchedPhoto && watchedPhoto.length > 0 && (
              <div className="flex items-center space-x-2 mt-2">
                <Controller
                  name="noPeopleInPhoto"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="nominationNoPeopleInPhoto"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      name="noPeopleInPhoto"
                    />
                  )}
                />
                <Label htmlFor="nominationNoPeopleInPhoto" className="text-sm font-normal">
                  I confirm no people appear in my photo.
                </Label>
              </div>
            )}
            {errors.noPeopleInPhoto && <p className="text-sm text-destructive">{errors.noPeopleInPhoto.message}</p>}
            {state.errors?.noPeopleInPhoto && <p className="text-sm text-destructive">{state.errors.noPeopleInPhoto.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="nominationAgreeToTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      name="agreeToTerms"
                    />
                  )}
                />
              <Label htmlFor="nominationAgreeToTerms" className="text-sm font-normal flex items-center gap-1">
                I agree to <ThePorcelainRuleModal />
              </Label>
            </div>
            {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms.message}</p>}
            {state.errors?.agreeToTerms && <p className="text-sm text-destructive">{state.errors.agreeToTerms.join(', ')}</p>}
          </div>

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default NominationForm;
