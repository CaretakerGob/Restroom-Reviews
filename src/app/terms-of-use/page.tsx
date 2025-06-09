
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the Terms of Use for Restroom Reviews. Understand the rules and guidelines for using our platform.',
};

export default function TermsOfUsePage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-2">
            <FileText className="h-9 w-9" /> Terms of Use
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Welcome to Restroom Reviews! These terms govern your use of our website and services.
            <br />Last Updated: [Date - To be filled]
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-foreground/80 leading-relaxed prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
          <p className="text-center text-xl font-semibold text-destructive my-8 p-4 border border-destructive/50 rounded-md bg-destructive/10">
            Content Coming Soon!
            <br />
            <span className="text-base font-normal">We are currently drafting our comprehensive Terms of Use. Please check back later for full details.</span>
          </p>

          <h2 className="text-2xl font-headline text-secondary">1. Acceptance of Terms (Placeholder)</h2>
          <p>
            By accessing or using Restroom Reviews (the "Service"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to all of these Terms, do not use the Service.
          </p>

          <h2 className="text-2xl font-headline text-secondary">2. User Conduct and Content (Placeholder)</h2>
          <p>
            You are responsible for your conduct and any content you submit, post, or display on or via the Service. You agree to abide by our community guidelines, known as the <Link href="/porcelain-rule" className="text-primary underline">Porcelain Rules</Link>, which is incorporated by reference into these Terms.
          </p>
          <p>
            Prohibited content and activities will include, but are not limited to: illegal content, harassment, impersonation, intellectual property infringement, and posting content with identifiable individuals without consent (especially in photos).
          </p>

          <h2 className="text-2xl font-headline text-secondary">3. User Submissions (Placeholder)</h2>
          <p>
            By submitting content (reviews, nominations, photos, comments, etc.), you grant Restroom Reviews a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the Service and Restroom Reviews' (and its successors' and affiliates') business.
          </p>
          <p>
            You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish content you submit. Crucially, you confirm that no identifiable individuals are depicted in any photos you upload, as per the <Link href="/porcelain-rule" className="text-primary underline">Porcelain Rules</Link>.
          </p>
          <p>
            We reserve the right to remove or modify user content for any reason, including content that we believe violates these Terms or our policies.
          </p>


          <h2 className="text-2xl font-headline text-secondary">4. Intellectual Property (Placeholder)</h2>
          <p>
            The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Restroom Reviews and its licensors.
          </p>

          <h2 className="text-2xl font-headline text-secondary">5. Disclaimers and Limitation of Liability (Placeholder)</h2>
          <p>
            The Service is provided "as is." Restroom Reviews makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties. We do not warrant that the information provided by users is accurate, complete, or current.
          </p>
          <p>
            In no event shall Restroom Reviews be liable for any damages arising out of the use or inability to use the Service.
          </p>

          <h2 className="text-2xl font-headline text-secondary">6. Termination (Placeholder)</h2>
          <p>
            We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-headline text-secondary">7. Governing Law (Placeholder)</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction - To be filled], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-headline text-secondary">8. Changes to Terms (Placeholder)</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>

          <h2 className="text-2xl font-headline text-secondary">9. Contact Us (Placeholder)</h2>
          <p>
            If you have any questions about these Terms, please contact us via our <Link href="/contact" className="text-primary underline">Contact Page</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
