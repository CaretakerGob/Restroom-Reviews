// Summarizes restroom review text to highlight key points about cleanliness and features.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReviewInputSchema = z.object({
  reviewText: z
    .string()
    .describe('The text of the restroom review to be summarized.'),
});

export type SummarizeReviewInput = z.infer<typeof SummarizeReviewInputSchema>;

const SummarizeReviewOutputSchema = z.object({
  summary: z.string().describe('The summarized version of the restroom review.'),
});

export type SummarizeReviewOutput = z.infer<typeof SummarizeReviewOutputSchema>;

export async function summarizeReview(input: SummarizeReviewInput): Promise<SummarizeReviewOutput> {
  return summarizeReviewFlow(input);
}

const summarizeReviewPrompt = ai.definePrompt({
  name: 'summarizeReviewPrompt',
  input: {schema: SummarizeReviewInputSchema},
  output: {schema: SummarizeReviewOutputSchema},
  prompt: `Summarize the following restroom review, focusing on key aspects like cleanliness, amenities, and overall experience:\n\n{{{reviewText}}}`,
});

const summarizeReviewFlow = ai.defineFlow(
  {
    name: 'summarizeReviewFlow',
    inputSchema: SummarizeReviewInputSchema,
    outputSchema: SummarizeReviewOutputSchema,
  },
  async input => {
    const {output} = await summarizeReviewPrompt(input);
    return output!;
  }
);
