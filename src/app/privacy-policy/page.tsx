
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy for Restroom Reviews to understand how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-2">
            <ShieldCheck className="h-9 w-9" /> Privacy Policy
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Your privacy is important to us. This policy explains how Restroom Reviews handles your information.
            <br />Last Updated: [Date - To be filled]
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-foreground/80 leading-relaxed prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
          <p className="text-center text-xl font-semibold text-destructive my-8 p-4 border border-destructive/50 rounded-md bg-destructive/10">
            Content Coming Soon!
            <br />
            <span className="text-base font-normal">We are currently drafting our comprehensive Privacy Policy. Please check back later for full details.</span>
          </p>

          <h2 className="text-2xl font-headline text-secondary">1. Introduction (Placeholder)</h2>
          <p>
            Welcome to Restroom Reviews ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
          </p>

          <h2 className="text-2xl font-headline text-secondary">2. Information We Collect (Placeholder)</h2>
          <p>
            We will outline the types of personal and non-personal information we collect, such as:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Information you provide to us (e.g., when submitting reviews, nominations, creating an account (future feature), or contacting us). This may include username (optional), email address (optional for nominations), review content, and photos.</li>
            <li>Information collected automatically (e.g., IP address, browser type, device information, usage data through cookies and similar technologies - if implemented).</li>
          </ul>

          <h2 className="text-2xl font-headline text-secondary">3. How We Use Your Information (Placeholder)</h2>
          <p>
            This section will detail how collected information is used, for purposes such as:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>To provide, operate, and maintain our services.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To understand and analyze how you use our services.</li>
            <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes (with consent where required).</li>
            <li>To process your submissions (reviews, nominations).</li>
            <li>For compliance purposes, including enforcing our Terms of Use and other legal rights.</li>
          </ul>

          <h2 className="text-2xl font-headline text-secondary">4. Sharing Your Information (Placeholder)</h2>
          <p>
            We will describe if and how your information is shared with third parties, such as:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>With service providers (e.g., hosting, AI services for summaries, analytics).</li>
            <li>For legal reasons or to prevent harm.</li>
            <li>With your consent (e.g., if you opt-in to have your review featured on social media).</li>
            <li>Anonymized or aggregated data may be shared for analytical purposes.</li>
          </ul>
          <p>User-generated content like reviews (and optional usernames) are public by nature on our platform.</p>


          <h2 className="text-2xl font-headline text-secondary">5. Cookies and Tracking Technologies (Placeholder)</h2>
          <p>
            Details on the use of cookies and similar technologies will be provided here, if applicable.
          </p>

          <h2 className="text-2xl font-headline text-secondary">6. Data Security (Placeholder)</h2>
          <p>
            We will outline the measures taken to protect your information.
          </p>

          <h2 className="text-2xl font-headline text-secondary">7. Your Privacy Rights (Placeholder)</h2>
          <p>
            Information on your rights regarding your personal data (e.g., access, correction, deletion), depending on your jurisdiction.
          </p>

           <h2 className="text-2xl font-headline text-secondary">8. Children's Privacy (Placeholder)</h2>
          <p>
            Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-2xl font-headline text-secondary">9. Changes to This Policy (Placeholder)</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date.
          </p>

          <h2 className="text-2xl font-headline text-secondary">10. Contact Us (Placeholder)</h2>
          <p>
            If you have questions or comments about this policy, you may contact us through our <Link href="/contact" className="text-primary underline">Contact Page</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
