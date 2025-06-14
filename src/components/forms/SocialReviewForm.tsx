
'use client';

import { useActionState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { socialReviewSchema, type SocialReviewFormValues, socialPlatformEnum } from '@/schemas/socialReviewSchema';
import { submitSocialReviewAction, type SocialReviewSubmissionState } from '@/actions/socialReviewActions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { LinkIcon, MessageSquareHeart, Camera, HandHeart, Sparkles, UserCircle } from 'lucide-react';
import ThePorcelainRuleModal from '@/components/ThePorcelainRuleModal';

const initialFormState: SocialReviewSubmissionState = {
  message: '',
  success: false,
};

const platformOptions = [
  { value: "tiktok", label: "TikTok" },
  { value: "instagram", label: "Instagram" },
  { value: "youtube_shorts", label: "YouTube Shorts" },
  { value: "twitter_x", label: "Twitter/X" },
];

const SocialReviewForm = () => {
  const [state, formAction] = useActionState(submitSocialReviewAction, initialFormState);
  const { toast } = useToast();
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SocialReviewFormValues>({
    resolver: zodResolver(socialReviewSchema),
    defaultValues: {
      username: '',
      locationName: '',
      platform: undefined, // Or a default like "tiktok"
      postLink: '',
      quickReview: '',
      cleanupAction: false,
      reviewNickname: '',
      agreeToTermsAndRepost: false,
    }
  });

 useEffect(() => {
    if (state.message && !state.success && !isSubmitting) { // Only show toast if not submitting to avoid premature error on first render with validation
      toast({
        title: 'Form Error',
        description: state.message,
        variant: 'destructive',
      });
    }
    // Success redirect is handled by server action
  }, [state, toast, isSubmitting]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary flex items-center gap-2">
          <Camera className="h-8 w-8" /> Share Your Social Restroom Post
        </CardTitle>
        <CardDescription>Spotted a throne room on TikTok, Insta, or YouTube? Share your post with the R&R community!</CardDescription>
      </CardHeader>
      <form action={formAction} onSubmit={handleSubmit((data) => {
          const formData = new FormData();
          Object.keys(data).forEach(key => {
            const value = data[key as keyof SocialReviewFormValues];
            if (typeof value === 'boolean') {
              formData.append(key, value ? 'on' : '');
            } else if (value !== undefined && value !== null) {
              formData.append(key, String(value));
            }
          });
          formAction(formData);
        })}>
        <CardContent className="space-y-6">
          {state.message && !state.success && (
             <Alert variant="destructive">
               <AlertTitle>Submission Error</AlertTitle>
               <AlertDescription>{state.message}</AlertDescription>
             </Alert>
           )}

          <div className="space-y-2">
            <Label htmlFor="username" className="flex items-center gap-1"><UserCircle size={16}/> Your Name or Alias (Optional)</Label>
            <Input id="username" {...register('username')} placeholder="e.g., StallScout24" />
            {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
            {state.errors?.username && <p className="text-sm text-destructive">{state.errors.username.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="locationName">Business or Location Name</Label>
            <Input id="locationName" {...register('locationName')} placeholder="e.g., Grand Central Terminal, The Bean Scene Cafe" />
            {errors.locationName && <p className="text-sm text-destructive">{errors.locationName.message}</p>}
            {state.errors?.locationName && <p className="text-sm text-destructive">{state.errors.locationName.join(', ')}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="platform">Where did you post your review?</Label>
            <Controller
              name="platform"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="Choose a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {platformOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.platform && <p className="text-sm text-destructive">{errors.platform.message}</p>}
            {state.errors?.platform && <p className="text-sm text-destructive">{state.errors.platform.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="postLink" className="flex items-center gap-1"><LinkIcon size={16}/> Link to Your Post</Label>
            <Input id="postLink" type="url" {...register('postLink')} placeholder="https://tiktok.com/yourvideo" />
            {errors.postLink && <p className="text-sm text-destructive">{errors.postLink.message}</p>}
            {state.errors?.postLink && <p className="text-sm text-destructive">{state.errors.postLink.join(', ')}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quickReview" className="flex items-center gap-1"><MessageSquareHeart size={16}/> Quick Review Summary (Optional)</Label>
            <Textarea id="quickReview" {...register('quickReview')} rows={3} placeholder="What made this restroom stand out — good or bad?" />
            {errors.quickReview && <p className="text-sm text-destructive">{errors.quickReview.message}</p>}
            {state.errors?.quickReview && <p className="text-sm text-destructive">{state.errors.quickReview.join(', ')}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="reviewNickname" className="flex items-center gap-1"><Sparkles size={16}/> Would you like to name your review? (Optional)</Label>
            <Input id="reviewNickname" {...register('reviewNickname')} placeholder="e.g., The Stench Chronicles, Porcelain Paradise Found" />
            {errors.reviewNickname && <p className="text-sm text-destructive">{errors.reviewNickname.message}</p>}
            {state.errors?.reviewNickname && <p className="text-sm text-destructive">{state.errors.reviewNickname.join(', ')}</p>}
          </div>
          
          <div className="flex items-start space-x-2 pt-2">
            <Controller
              name="cleanupAction"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="cleanupAction"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  name="cleanupAction"
                  className="mt-1"
                />
              )}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="cleanupAction" className="text-sm font-normal flex items-center gap-1">
                <HandHeart size={16} className="text-green-600"/> I performed a "Clean-It Tag"! (e.g., picked up trash, wiped the mirror, left it better)
              </Label>
              <p className="text-xs text-muted-foreground">
                Awesome! You might get featured or earn a special badge!
              </p>
            </div>
             {errors.cleanupAction && <p className="text-sm text-destructive">{errors.cleanupAction.message}</p>}
             {state.errors?.cleanupAction && <p className="text-sm text-destructive">{state.errors.cleanupAction.join(', ')}</p>}
          </div>

          <div className="flex items-start space-x-2 pt-2">
             <Controller
                name="agreeToTermsAndRepost"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="agreeToTermsAndRepost"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    name="agreeToTermsAndRepost"
                     className="mt-1"
                  />
                )}
              />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="agreeToTermsAndRepost" className="text-sm font-normal flex items-center gap-1">
                I agree to the <ThePorcelainRuleModal /> and give R&R permission to repost my content with credit.
              </Label>
            </div>
          </div>
          {errors.agreeToTermsAndRepost && <p className="text-sm text-destructive">{errors.agreeToTermsAndRepost.message}</p>}
          {state.errors?.agreeToTermsAndRepost && <p className="text-sm text-destructive">{state.errors.agreeToTermsAndRepost.join(', ')}</p>}

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Flushing...' : 'Flush It! (Submit Post)'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SocialReviewForm;
