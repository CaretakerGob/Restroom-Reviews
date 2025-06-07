import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";

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
    title: "Photos - Optional but Encouraged", 
    description: "A picture is worth a thousand words. If you upload photos, ensure they are relevant and DO NOT include any people for privacy reasons. This is crucial for respecting everyone's privacy." 
  },
  { 
    title: "Respect Privacy", 
    description: "Do not share personal information about restroom staff or other patrons. Focus on the facility itself, not individuals." 
  },
  { 
    title: "Constructive Criticism for Nominations", 
    description: "When nominating a business for the \"Clean It Up\" program, be clear and constructive about why they need improvement. Help us help them make positive changes." 
  },
];

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
              <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                <CheckSquare className="w-8 h-8 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-headline text-secondary">{rule.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
          <div className="text-center pt-6">
            <p className="text-lg font-semibold text-primary">
              By submitting a review or nomination, you agree to abide by The Porcelain Rule.
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
