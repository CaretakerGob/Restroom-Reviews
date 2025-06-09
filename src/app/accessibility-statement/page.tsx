
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AccessibilityIcon, Settings2 } from "lucide-react"; // Using AccessibilityIcon from lucide-react if available, else just Accessibility
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to accessibility at Restroom Reviews. Learn about the features and standards we aim for.',
};

export default function AccessibilityStatementPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-2">
            <AccessibilityIcon className="h-9 w-9" /> Accessibility Statement
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Restroom Reviews is committed to ensuring digital accessibility for people with disabilities.
            <br />Last Updated: [Date - To be filled]
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-foreground/80 leading-relaxed prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
          <p className="text-center text-xl font-semibold text-destructive my-8 p-4 border border-destructive/50 rounded-md bg-destructive/10">
            Content Coming Soon!
            <br />
            <span className="text-base font-normal">We are currently developing our detailed Accessibility Statement and working to improve our site's accessibility. Please check back later.</span>
          </p>

          <h2 className="text-2xl font-headline text-secondary">1. Our Commitment (Placeholder)</h2>
          <p>
            Restroom Reviews is committed to making our website accessible and user-friendly for everyone, including people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-headline text-secondary">2. Measures to Support Accessibility (Placeholder)</h2>
          <p>
            We are taking the following measures to ensure accessibility of Restroom Reviews:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Integrating accessibility into our design and development processes.</li>
            <li>Providing text alternatives for non-text content where appropriate.</li>
            <li>Ensuring content is navigable via keyboard.</li>
            <li>Aiming for sufficient color contrast.</li>
            <li>Using semantic HTML and ARIA attributes where beneficial.</li>
            <li>Continuously seeking to improve based on user feedback and evolving standards.</li>
          </ul>

          <h2 className="text-2xl font-headline text-secondary">3. Conformance Status (Placeholder)</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. We aim to conform to WCAG 2.1 Level AA.
          </p>
          <p>
            This is an ongoing effort, and while we strive to adhere to the accepted guidelines and standards for accessibility and usability, it is not always possible to do so in all areas of the website.
          </p>

          <h2 className="text-2xl font-headline text-secondary">4. Feedback (Placeholder)</h2>
          <p>
            We welcome your feedback on the accessibility of Restroom Reviews. If you encounter accessibility barriers or have suggestions on how we can improve, please let us know:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Via our <Link href="/contact" className="text-primary underline">Contact Page</Link></li>
            <li>Email: accessibility@restroomreviews.work (Placeholder email)</li>
          </ul>
          <p>We try to respond to feedback within a reasonable timeframe.</p>

          <h2 className="text-2xl font-headline text-secondary">5. Technical Specifications (Placeholder)</h2>
          <p>
            Accessibility of Restroom Reviews relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p>
            These technologies are relied upon for conformance with the accessibility standards used.
          </p>
          
          <h2 className="text-2xl font-headline text-secondary">6. Limitations and Alternatives (Placeholder)</h2>
          <p>
            Despite our best efforts to ensure accessibility of Restroom Reviews, there may be some limitations. Please contact us if you observe an issue.
          </p>

          <h2 className="text-2xl font-headline text-secondary">7. Future Enhancements (Placeholder)</h2>
          <p>
            We are committed to ongoing improvement. Future enhancements may include more rigorous testing, user testing with people with disabilities, and further training for our team.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
