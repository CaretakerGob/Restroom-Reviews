
'use server';
/**
 * @fileOverview A Genkit flow to generate an image for the community page.
 *
 * - generateCommunityImage - A function that generates an image.
 * - GenerateCommunityImageInput - The input type for the generateCommunityImage function.
 * - GenerateCommunityImageOutput - The return type for the generateCommunityImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCommunityImageInputSchema = z.object({
  prompt: z.string().describe('The prompt to use for image generation.'),
});
export type GenerateCommunityImageInput = z.infer<typeof GenerateCommunityImageInputSchema>;

const GenerateCommunityImageOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "The generated image as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateCommunityImageOutput = z.infer<typeof GenerateCommunityImageOutputSchema>;

export async function generateCommunityImage(input: GenerateCommunityImageInput): Promise<GenerateCommunityImageOutput> {
  return generateCommunityImageFlow(input);
}

const generateCommunityImageFlow = ai.defineFlow(
  {
    name: 'generateCommunityImageFlow',
    inputSchema: GenerateCommunityImageInputSchema,
    outputSchema: GenerateCommunityImageOutputSchema,
  },
  async (input) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed or did not return a URL.');
    }
    
    return {imageDataUri: media.url};
  }
);
