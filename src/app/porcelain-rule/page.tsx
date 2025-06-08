
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, ShieldCheck } from "lucide-react";

const rules = [
  { 
    title: "Be Honest & Fair", 
    description: "Provide genuine feedback based on your experience. Exaggerations or false claims don't help anyone create a better restroom experience for all." 
  },
  { 
    title: "Be Specific", 
    description: "Details matter! Mention specifics about cleanliness, amenities, smell, and security. \"It was clean\" is good, but \"The floors were spotless and it smelled like lemons\" is even better." 
  },
  { 
    title: "Keep it Clean (Figuratively!)", 
    description: "No offensive language, hate speech, or personal attacks. We're here to discuss restrooms, not start flame wars. Respectful discourse is key." 
  },
  { 
    title: "Photo Submissions: Privacy First", 
    description: "A picture is worth a thousand words. If you upload photos, ensure they are relevant and crucially, DO NOT include any people or personally identifiable information. This is vital for respecting everyone's privacy." 
  },
  { 
    title: "Respect Privacy (General)", 
    description: "Do not share personal information about restroom staff or other patrons. Focus on the facility itself, not individuals." 
  },
  { 
    title: "Constructive Criticism for Nominations", 
    description: "When nominating a business for the \"Clean It Up\" program, be clear and constructive about why they need improvement. Help us help them make positive changes." 
  },
];

const submissionTerms = {
  title: "Content Submission & Usage",
  description: "By submitting reviews, nominations, or photos ('Submissions'), you agree to the following: 1. You confirm that no identifiable individuals are depicted in any photos you upload, in line with our Photo Submissions rule. 2. You grant Restroom Reviews a non-exclusive, royalty-free, worldwide license to use, review, edit, adapt, publish, translate, create derivative works from, distribute, and display your Submissions in any media. 3. You understand that Restroom Reviews may review, edit, or remove submissions as deemed necessary to align with our content strategy and community guidelines. We are committed to respecting privacy and these guidelines in all uses of submitted material."
};

export default function PorcelainRulePage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">The Porcelain Rule</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Our community guidelines for respectful, helpful, and effective reviews and nominations. 
            Let's keep Restroom Reviews a trusted resource!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {rules.map((rule, index) => (
            <Card key={index} className="bg-card-foreground/5 border-border">
              <CardHeader className="flex flex-row items-start space-x-3 pb-3">
                <CheckSquare className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-headline text-secondary">{rule.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mt-1">{rule.description}</p>
                </div>
              </CardHeader>
            </Card>
          ))}

          <Card className="bg-card-foreground/5 border-border mt-8">
            <CardHeader className="flex flex-row items-start space-x-3 pb-3">
              <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
               <div>
                  <h3 className="text-2xl font-headline text-secondary">{submissionTerms.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mt-1">{submissionTerms.description}</p>
                </div>
            </CardHeader>
          </Card>

          <div className="text-center pt-6">
            <p className="text-lg font-semibold text-primary">
              By submitting a review or nomination, you agree to abide by The Porcelain Rule, including the Content Submission & Usage terms.
            </p>
            <p className="text-foreground/80 mt-2">
              Thank you for helping us maintain a positive and constructive community!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
