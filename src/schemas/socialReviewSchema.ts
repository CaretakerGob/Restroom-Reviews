
import { z } from 'zod';

export const socialPlatformEnum = z.enum(["tiktok", "instagram", "youtube_shorts", "twitter_x"], {
  required_error: "Please select a platform.",
});
export type SocialPlatform = z.infer<typeof socialPlatformEnum>;

export const socialReviewSchema = z.object({
  username: z.string().max(100, { message: "Username cannot exceed 100 characters." }).optional(),
  locationName: z.string().min(2, { message: "Location name must be at least 2 characters." }).max(150, { message: "Location name cannot exceed 150 characters." }),
  platform: socialPlatformEnum,
  postLink: z.string().url({ message: "Please enter a valid URL for your post." }),
  quickReview: z.string().max(500, { message: "Quick review cannot exceed 500 characters." }).optional(),
  cleanupAction: z.boolean().optional().default(false),
  reviewNickname: z.string().max(100, { message: "Nickname cannot exceed 100 characters." }).optional(),
  agreeToTermsAndRepost: z.boolean().refine(val => val === true, { message: "You must agree to the Porcelain Rules and grant repost permission." }),
});

export type SocialReviewFormValues = z.infer<typeof socialReviewSchema>;
