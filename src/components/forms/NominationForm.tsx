'use client';

import { useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nominationSchema, type NominationFormValues } from '@/schemas/nominationSchema';
import { submitNominationAction, type NominationSubmissionState } from '@/actions/nominationActions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const initialFormState: NominationSubmissionState = {
  message: '',
  success: false,
};

const NominationForm = () => {
  const [state, formAction] = useActionState(submitNominationAction, initialFormState);
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NominationFormValues>({
    resolver: zodResolver(nominationSchema),
  });

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
      // router.push('/thank-you?type=nomination');
    }
  }, [state, toast, router]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary">Nominate a Business for "Clean It Up"</CardTitle>
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
            <Label htmlFor="photo">Photo (Optional)</Label>
            <Input id="photo" type="file" {...register('photo')} accept="image/*" />
            {errors.photo && <p className="text-sm text-destructive">{errors.photo.message as string}</p>}
            {state.errors?.photo && <p className="text-sm text-destructive">{state.errors.photo.join(', ')}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Nominate Business'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default NominationForm;
