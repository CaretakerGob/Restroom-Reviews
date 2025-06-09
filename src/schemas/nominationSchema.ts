
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const nominationSchema = z.object({
  userNameEmail: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters." }),
  businessLocation: z.string().min(5, { message: "Business location must be at least 5 characters." }),
  reason: z.string().min(20, { message: "Reason must be at least 20 characters." }).max(1000, { message: "Reason cannot exceed 1000 characters." }),
  photo: z.any()
    .refine((fileList) => { // Changed to fileList to reflect HTML input type="file"
      if (!fileList || fileList.length === 0) return true; // Optional, so no file is fine
      return fileList[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (fileList) => {
        if (!fileList || fileList.length === 0) return true; // Optional
        return ACCEPTED_IMAGE_TYPES.includes(fileList[0]?.type);
      },
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
  noPeopleInPhoto: z.boolean().optional().default(false),
  agreeToTerms: z.boolean().refine(val => val === true, { message: "You must agree to The Proper Porcelain Policy." }),
  allowSocialShare: z.boolean().optional().default(false), // New field
}).superRefine((data, ctx) => {
  if (data.photo && data.photo.length > 0 && !data.noPeopleInPhoto) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please confirm no people appear in the photo if you upload one.",
      path: ["noPeopleInPhoto"],
    });
  }
});

export type NominationFormValues = z.infer<typeof nominationSchema>;
