
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const reviewSchema = z.object({
  userName: z.string().optional(),
  locationName: z.string().min(2, { message: "Location name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  cleanliness: z.number().min(1, {message: "Rating must be at least 1 star."}).max(5),
  smell: z.number().min(1, {message: "Rating must be at least 1 star."}).max(5),
  comfort: z.number().min(1, {message: "Rating must be at least 1 star."}).max(5),
  soapSupplies: z.number().min(1, {message: "Rating must be at least 1 star."}).max(5),
  stallSecurity: z.number().min(1, {message: "Rating must be at least 1 star."}).max(5),
  photo: z.any()
    .refine((fileList) => {
      if (!fileList || fileList.length === 0) return true; 
      return fileList[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (fileList) => {
        if (!fileList || fileList.length === 0) return true; 
        return ACCEPTED_IMAGE_TYPES.includes(fileList[0]?.type)
      },
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
  noPeopleInPhoto: z.boolean().optional().default(false),
  comments: z.string().min(10, { message: "Comments must be at least 10 characters." }).max(1000, { message: "Comments cannot exceed 1000 characters." }),
  agreeToTerms: z.boolean().refine(val => val === true, { message: "You must agree to the Porcelain Rules." }),
  allowSocialShare: z.boolean().optional().default(false),
}).superRefine((data, ctx) => {
  if (data.photo && data.photo.length > 0 && !data.noPeopleInPhoto) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please confirm no people appear in the photo if you upload one.",
      path: ["noPeopleInPhoto"],
    });
  }
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;
